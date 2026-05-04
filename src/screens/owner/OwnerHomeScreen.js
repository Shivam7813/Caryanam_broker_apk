import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getOwnerProperties } from '../../api/ownerApi';

import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function OwnerHomeScreen({ navigation }) {
  const { userData, userRole } = useContext(AuthContext);

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const ownerId = userData?.id || 1;

      const res = await getOwnerProperties(ownerId);
      const data = res?.data;

      setProperties(data?.properties || []);
    } catch (e) {
      console.log('API ERROR:', e?.response?.data || e.message);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { title: 'Active Listings', value: properties.length },
    { title: 'Leads', value: '0' },
    { title: 'Chats', value: '0' },
    { title: 'Views', value: '0' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar backgroundColor="#F8FAFC" barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>Caryanam Broker</Text>
            <Text style={styles.tag}>Welcome Owner 👋</Text>
            <Text style={styles.email}>
              {userData?.email} ({userRole})
            </Text>
          </View>

          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => navigation.navigate('OwnerProfile')}
          >
            <Text style={styles.profileTxt}>Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Manage Your{'\n'}Rental Business
          </Text>

          <Text style={styles.heroSub}>
            Add properties, track leads, and grow faster with verified tenants.
          </Text>

          <TouchableOpacity
            style={styles.heroBtn}
            onPress={() => navigation.navigate('AddProperty')}
          >
            <Text style={styles.heroBtnTxt}>Add Property</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.section}>Your Dashboard</Text>

        <View style={styles.grid}>
          {stats.map((item, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statTitle}>{item.title}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.section}>Quick Actions</Text>

        <View style={styles.actionWrap}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('MyListings')}
          >
            <Text style={styles.actionTxt}>My Listings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Leads')}
          >
            <Text style={styles.actionTxt}>View Leads</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('OwnerChats')}
          >
            <Text style={styles.actionTxt}>Chats</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Premium')}
          >
            <Text style={styles.actionTxt}>Premium Plans</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.section}>Your Properties</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#4338CA" />
        ) : (
          <View style={{ paddingHorizontal: 18 }}>
            {properties.length === 0 ? (
              <Text style={{ textAlign: 'center' }}>No properties found</Text>
            ) : (
              properties.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.propertyCard}
                  onPress={() =>
                    navigation.navigate('PropertyDetails', { id: item.id })
                  }
                >
                  <View style={styles.imageBox}>
                    <Text style={styles.imageTxt}>Img</Text>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.cardTitle}>{item.title || 'Property'}</Text>
                    <Text style={styles.price}>₹{item.price || '0'}</Text>
                    <Text style={styles.loc}>{item.city || 'Location'}</Text>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  scroll: { paddingBottom: 40 },

  header: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brand: {
    fontSize: 26,
    fontWeight: '900',
    color: '#0F172A',
  },

  tag: {
    marginTop: 4,
    fontSize: 13,
    color: '#64748B',
  },

  email: {
    fontSize: 12,
    color: '#4338CA',
    marginTop: 2,
  },

  profileBtn: {
    backgroundColor: '#4338CA',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
  },

  profileTxt: {
    color: '#fff',
    fontWeight: '800',
  },

  hero: {
    backgroundColor: '#4338CA',
    marginHorizontal: 18,
    borderRadius: 26,
    padding: 22,
    marginTop: 8,
  },

  heroTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
  },

  heroSub: {
    color: '#E0E7FF',
    marginTop: 10,
  },

  heroBtn: {
    backgroundColor: '#312E81',
    marginTop: 14,
    paddingVertical: 15,
    borderRadius: 16,
  },

  heroBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '800',
  },

  section: {
    fontSize: 21,
    fontWeight: '900',
    marginHorizontal: 18,
    marginTop: 26,
    marginBottom: 14,
  },

  grid: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  statCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },

  statValue: {
    fontSize: 22,
    fontWeight: '900',
    color: '#4338CA',
  },

  statTitle: {
    marginTop: 6,
    color: '#64748B',
  },

  actionWrap: {
    paddingHorizontal: 18,
  },

  actionCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
  },

  actionTxt: {
    fontWeight: '800',
    color: '#0F172A',
  },

  propertyCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageBox: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  imageTxt: {
    fontSize: 10,
    color: '#4338CA',
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
  },

  price: {
    color: '#4338CA',
    fontWeight: '700',
    marginTop: 2,
  },

  loc: {
    color: '#64748B',
    fontSize: 12,
  },
});