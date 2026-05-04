import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getOwnerProperties, deleteProperty } from '../../api/ownerApi';

import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';

export default function MyListingsScreen({ navigation }) {
  const { userData } = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState('All');
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const ownerId = userData?.id || 1;
      const res = await getOwnerProperties(ownerId);
      const data = res?.data;

      setListings(data?.properties || []);
    } catch (e) {
      console.log('API ERROR:', e?.response?.data || e.message);
    } finally {
      setLoading(false);
    }
  };

  const tabs = ['All', 'Active', 'Pending', 'Rented'];

  const filtered =
    activeTab === 'All'
      ? listings
      : listings.filter(item => item.status === activeTab);

  const statusColor = status => {
    if (status === 'Active') return '#16A34A';
    if (status === 'Pending') return '#F59E0B';
    return '#1565FF';
  };

  const handleDelete = item => {
    Alert.alert(
      'Delete Property',
      'Are you sure?',
      [
        { text: 'Cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await deleteProperty(item.id);
              fetchListings();
            } catch {
              Alert.alert('Error', 'Delete failed');
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F8FAFF" barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>My Listings</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* 🔥 FIXED FILTER */}
      <View style={styles.tabWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabContainer}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabBtn, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabTxt, activeTab === tab && styles.activeTabTxt]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#1565FF" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingHorizontal: 18 }}>
            {filtered.length === 0 ? (
              <Text style={{ textAlign: 'center', marginTop: 20 }}>
                No properties found
              </Text>
            ) : (
              filtered.map(item => (
                <View key={item.id} style={styles.card}>

                  <View style={styles.imageBox}>
                    <Text style={styles.imageTxt}>Rental</Text>
                  </View>

                  <Text style={styles.cardTitle}>
                    {item.title || 'Property'}
                  </Text>

                  <Text style={styles.price}>
                    ₹{item.price || 0}
                  </Text>

                  <Text style={styles.location}>
                    {item.city || 'Location'}
                  </Text>

                  <View style={styles.metaRow}>
                    <Text style={[styles.status, { color: statusColor(item.status) }]}>
                      {item.status || 'Active'}
                    </Text>

                    <Text style={styles.metaTxt}>
                      {item.views || 0} Views
                    </Text>

                    <Text style={styles.metaTxt}>
                      {item.leads || 0} Leads
                    </Text>
                  </View>

                  <View style={styles.actionRow}>
                    <TouchableOpacity
                      style={styles.editBtn}
                      onPress={() =>
                        navigation.navigate('EditProperty', { id: item.id })
                      }
                    >
                      <Text style={styles.editTxt}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.deleteBtn}
                      onPress={() => handleDelete(item)}
                    >
                      <Text style={styles.deleteTxt}>Delete</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              ))
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFF' },

  header: {
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  back: {
    fontSize: 26,
    fontWeight: '900',
    color: '#0F172A',
  },

  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
  },

  tabWrapper: {
    marginBottom: 10,
  },

  tabContainer: {
    paddingHorizontal: 18,
    alignItems: 'center',
  },

  tabBtn: {
    backgroundColor: '#EEF2F7',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: '#1565FF',
  },

  tabTxt: {
    color: '#334155',
    fontWeight: '800',
    fontSize: 13,
  },

  activeTabTxt: {
    color: '#fff',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#EEF2F7',
  },

  imageBox: {
    height: 145,
    borderRadius: 18,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  imageTxt: {
    color: '#1565FF',
    fontWeight: '900',
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
  },

  price: {
    marginTop: 8,
    color: '#1565FF',
    fontWeight: '900',
    fontSize: 16,
  },

  location: {
    marginTop: 6,
    color: '#64748B',
    fontSize: 14,
  },

  metaRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  status: {
    fontWeight: '900',
    fontSize: 13,
  },

  metaTxt: {
    color: '#64748B',
    fontSize: 12,
  },

  actionRow: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  editBtn: {
    width: '48%',
    backgroundColor: '#EAF2FF',
    paddingVertical: 13,
    borderRadius: 14,
    alignItems: 'center',
  },

  editTxt: {
    color: '#1565FF',
    fontWeight: '900',
  },

  deleteBtn: {
    width: '48%',
    backgroundColor: '#FEE2E2',
    paddingVertical: 13,
    borderRadius: 14,
    alignItems: 'center',
  },

  deleteTxt: {
    color: '#EF4444',
    fontWeight: '900',
  },
});