import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import {
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen({ navigation }) {

  const { logout, userData } = useContext(AuthContext);

  const user = userData || {};

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
          My Profile
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
              {(user.name || user.fullName || 'U')[0].toUpperCase()}
            </Text>

          </View>

          <Text style={styles.name}>
            {user.name || user.fullName || 'User'}
          </Text>

          <Text style={styles.role}>
            Rental User Account
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
              {user.email || 'Not Available'}
            </Text>

          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>

            <Text style={styles.label}>
              Mobile Number
            </Text>

            <Text style={styles.value}>
              +91 {user.mobile || user.phone || 'Not Available'}
            </Text>

          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>

            {/* <Text style={styles.label}>
              Membership
            </Text>

            <Text style={styles.value}>
              {user.membership || 'Free Plan'}
            </Text> */}

          </View>

        </View>

        {/* LOGOUT */}

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={handleLogout}
        >

          <Text style={styles.logoutTxt}>
            Logout
          </Text>

        </TouchableOpacity>

        {/* FOOTER */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Caryanam Broker • Smart Rental Management
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

  logoutBtn: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#DC2626',
    paddingVertical: 18,
    borderRadius: 22,
    alignItems: 'center',
  },

  logoutTxt: {
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