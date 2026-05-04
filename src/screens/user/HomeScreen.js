// src/screens/user/HomeScreen.js
// FINAL VERSION (LANDING UI + API + USER FLOW)

import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import api from '../../api/axiosConfig';

export default function HomeScreen({ navigation }) {

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [properties, setProperties] = useState([]);
  const { userRole, userData } = useContext(AuthContext);

  const categories = ['1 BHK', '2 BHK', '3 BHK', 'Villa', 'House'];

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await api.get('/api/properties/all');
      setProperties(res.data || []);
    } catch (error) {
      console.log('API ERROR:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchProperties();
  };

  const filteredProperties = properties.filter(item =>
    item?.city?.toLowerCase().includes(search.toLowerCase()) ||
    item?.location?.toLowerCase().includes(search.toLowerCase()) ||
    item?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

      <StatusBar backgroundColor="#F8FAFC" barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>Caryanam Broker</Text>
            <Text style={styles.tag}>Welcome back 👋</Text>
            <Text style={{ fontSize: 12, color: '#4338CA', marginTop: 2 }}>
              {userData?.email} ({userRole})
            </Text>
          </View>

          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.profileTxt}>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Find Verified{'\n'}Homes For Rent
          </Text>

          <Text style={styles.heroSub}>
            Apartments, flats, villas and family homes from trusted owners & brokers.
          </Text>

          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>⌕</Text>

            <TextInput
              placeholder="Search city, area, locality"
              placeholderTextColor="#94A3B8"
              value={search}
              onChangeText={setSearch}
              style={styles.input}
            />
          </View>

          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => navigation.navigate('PropertyList')}
          >
            <Text style={styles.searchTxt}>Explore Homes</Text>
          </TouchableOpacity>
        </View>

        {/* CATEGORY */}
        <Text style={styles.section}>Categories</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalWrap}
        >
          {categories.map((item, i) => (
            <TouchableOpacity key={i} style={styles.catBtn}>
              <Text style={styles.catTxt}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* LISTINGS */}
        <Text style={styles.section}>Popular Homes</Text>

        <View style={styles.cardWrap}>
          {loading ? (
            <ActivityIndicator size="large" color="#4338CA" />
          ) : filteredProperties.length === 0 ? (
            <Text style={styles.empty}>No Properties Found</Text>
          ) : (
            filteredProperties.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={styles.card}
                onPress={() =>
                  navigation.navigate('PropertyDetails', {
                    propertyId: item.id,
                  })
                }
              >
                <View style={styles.imageBox}>
                  <Text style={styles.imageTxt}>Home</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>
                    {item.title || 'Property'}
                  </Text>

                  <Text style={styles.price}>
                    ₹{item.price || '0'} / month
                  </Text>

                  <Text style={styles.loc}>
                    {item.location || item.city}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>

        {/* CTA */}
        <View style={styles.cta}>
          <Text style={styles.ctaTitle}>Post Your Property</Text>

          <Text style={styles.ctaSub}>
            List your property & get verified tenants instantly.
          </Text>

          <TouchableOpacity
            style={styles.postBtn}
            onPress={() => navigation.navigate('AddProperty')}
          >
            <Text style={styles.postTxt}>Add Property</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

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
    lineHeight: 38,
  },

  heroSub: {
    color: '#E0E7FF',
    marginTop: 10,
  },

  searchBox: {
    backgroundColor: '#fff',
    marginTop: 18,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },

  searchIcon: {
    color: '#4338CA',
    fontSize: 18,
    fontWeight: '900',
  },

  input: {
    flex: 1,
    paddingVertical: 14,
    marginLeft: 10,
  },

  searchBtn: {
    backgroundColor: '#312E81',
    marginTop: 14,
    paddingVertical: 15,
    borderRadius: 16,
  },

  searchTxt: {
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

  horizontalWrap: {
    paddingHorizontal: 18,
  },

  catBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E0E7FF',
  },

  catTxt: {
    color: '#4338CA',
    fontWeight: '700',
  },

  cardWrap: {
    paddingHorizontal: 18,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageBox: {
    width: 70,
    height: 70,
    borderRadius: 16,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  imageTxt: {
    color: '#4338CA',
    fontWeight: '800',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '900',
  },

  price: {
    color: '#4338CA',
    fontWeight: '900',
    marginTop: 6,
  },

  loc: {
    color: '#64748B',
    marginTop: 4,
  },

  empty: {
    textAlign: 'center',
    color: '#64748B',
  },

  cta: {
    backgroundColor: '#fff',
    marginHorizontal: 18,
    marginTop: 18,
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
  },

  ctaTitle: {
    fontSize: 22,
    fontWeight: '900',
  },

  ctaSub: {
    color: '#64748B',
    marginTop: 8,
    textAlign: 'center',
  },

  postBtn: {
    backgroundColor: '#4338CA',
    marginTop: 16,
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 16,
  },

  postTxt: {
    color: '#fff',
    fontWeight: '800',
  },
});