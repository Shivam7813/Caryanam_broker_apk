import React, { useEffect, useState, useContext } from 'react';

import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/AuthContext';

export default function AdminProfileScreen({ navigation }) {

  const { logout } = useContext(AuthContext);

  const [admin, setAdmin] = useState({
    name: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    loadAdminData();
  }, []);

  const loadAdminData = async () => {

    try {

      const storedData = await AsyncStorage.getItem('userData');

      if (storedData) {

        const parsed = JSON.parse(storedData);

        setAdmin({
          name: parsed.fullName || parsed.name || 'Admin',
          email: parsed.email || 'No Email',
          role: parsed.role || 'ADMIN',
        });

      }

    } catch (e) {
      console.log('ERROR:', e);
    }

  };

  const handleLogout = () => {

    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await logout();
            } catch (e) {
              console.log('Logout Error', e);
            }
          },
        },
      ]
    );

  };

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'left', 'right']}
    >

      <StatusBar
        backgroundColor="#F8FAFC"
        barStyle="dark-content"
      />

      {/* HEADER */}

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>
            ←
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Admin Profile
        </Text>

        <View style={{ width: 24 }} />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >

        {/* PROFILE CARD */}

        <View style={styles.profileCard}>

          <View style={styles.avatar}>

            <Text style={styles.avatarTxt}>
              {(admin.name || 'A')[0].toUpperCase()}
            </Text>

          </View>

          <Text style={styles.name}>
            {admin.name}
          </Text>

          <Text style={styles.role}>
            System Administrator
          </Text>

        </View>

        {/* DETAILS */}

        <View style={styles.detailsCard}>

          <Text style={styles.sectionTitle}>
            Account Details
          </Text>

          <View style={styles.detailRow}>

            <Text style={styles.label}>
              Email Address
            </Text>

            <Text style={styles.value}>
              {admin.email}
            </Text>

          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>

            <Text style={styles.label}>
              Access Level
            </Text>

            <Text style={styles.value}>
              Full Administrative Access
            </Text>

          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>

            <Text style={styles.label}>
              Account Role
            </Text>

            <Text style={styles.value}>
              {admin.role}
            </Text>

          </View>

        </View>

        {/* INFO CARD */}

        <View style={styles.infoCard}>

          <Text style={styles.infoTitle}>
            Administrative Control Panel
          </Text>

          <Text style={styles.infoText}>
            Manage platform operations, monitor users,
            maintain listings, and oversee overall
            system management through the admin dashboard.
          </Text>

        </View>

        {/* LOGOUT */}

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={handleLogout}
        >

          <Text style={styles.logoutText}>
            Logout
          </Text>

        </TouchableOpacity>

        {/* FOOTER */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Caryanam Broker • Administration Panel
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  scroll: {
    paddingBottom: 40,
  },

  header: {
    paddingHorizontal: 20,
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

  profileCard: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#4338CA',
    borderRadius: 30,
    paddingVertical: 34,
    alignItems: 'center',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#5B4DF1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarTxt: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '900',
  },

  name: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
  },

  role: {
    marginTop: 6,
    color: '#E0E7FF',
    fontSize: 14,
    fontWeight: '600',
  },

  detailsCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 26,
    padding: 22,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 18,
  },

  detailRow: {
    paddingVertical: 6,
  },

  label: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 6,
  },

  value: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 14,
  },

  infoCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#EEF2FF',
    borderRadius: 24,
    padding: 22,
  },

  infoTitle: {
    color: '#312E81',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10,
  },

  infoText: {
    color: '#475569',
    lineHeight: 23,
    fontSize: 14,
  },

  logoutBtn: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#DC2626',
    paddingVertical: 18,
    borderRadius: 22,
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
  },

  footer: {
    marginTop: 28,
    alignItems: 'center',
  },

  footerText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
  },

});