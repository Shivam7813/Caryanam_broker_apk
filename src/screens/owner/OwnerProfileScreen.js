// src/screens/owner/OwnerProfileScreen.js

import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/AuthContext';

import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function OwnerProfileScreen({
  navigation,
}) {
  const { setUserToken, setUserRole, setUserData } = useContext(AuthContext);
  const owner = {
    name: 'Rajesh Patil',
    email: 'rajesh@gmail.com',
    mobile: '9876543210',
    city: 'Pune',
    plan: 'Verified Owner',
    totalListings: 12,
    activeListings: 8,
    rentedListings: 4,
  };

  const menu = [
    {
      title: 'Edit Profile',
      screen: null,
    },
    {
      title: 'My Listings',
      screen:
        'MyListings',
    },
    {
      title: 'Premium Plans',
      screen:
        'Premium',
    },
    {
      title: 'Documents',
      screen: null,
    },
    {
      title:
        'Help & Support',
      screen: null,
    },
    {
      title: 'Logout',
      screen: null,
    },
  ];

  const handleMenu =
    item => {
      if (
        item.screen
      ) {
        navigation.navigate(
          item.screen
        );
        return;
      }

     if (item.title === 'Logout') {
        Alert.alert(
          'Logout',
          'Are you sure you want to logout?',
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Logout',
              style: 'destructive',
              onPress: async () => {
                try {
                  await AsyncStorage.multiRemove([
                    'userToken',
                    'userRole',
                    'userData',
                  ]);

                  setUserToken(null);
                  setUserRole(null);
                  setUserData(null);

                } catch (e) {
                  console.log('Logout Error', e);
                }
              },
            },
          ]
        );
        return;
      }
      Alert.alert(
        item.title
      );
    };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#F8FAFF"
        barStyle="dark-content"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }
        >
          <Text style={styles.back}>
            ←
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Owner Profile
        </Text>

        <View
          style={{ width: 24 }}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* PROFILE */}
        <View
          style={
            styles.profileCard
          }
        >
          <View
            style={
              styles.avatar
            }
          >
            <Text
              style={
                styles.avatarTxt
              }
            >
              RP
            </Text>
          </View>

          <Text style={styles.name}>
            {owner.name}
          </Text>

          <Text
            style={
              styles.email
            }
          >
            {owner.email}
          </Text>

          <Text
            style={
              styles.mobile
            }
          >
            +91 {owner.mobile}
          </Text>

          <View
            style={
              styles.badge
            }
          >
            <Text
              style={
                styles.badgeTxt
              }
            >
              {owner.plan}
            </Text>
          </View>
        </View>

        {/* STATS */}
        <View style={styles.statsRow}>
          <View
            style={
              styles.statBox
            }
          >
            <Text
              style={
                styles.statValue
              }
            >
              {
                owner.totalListings
              }
            </Text>

            <Text
              style={
                styles.statLabel
              }
            >
              Total
            </Text>
          </View>

          <View
            style={
              styles.statBox
            }
          >
            <Text
              style={
                styles.statValue
              }
            >
              {
                owner.activeListings
              }
            </Text>

            <Text
              style={
                styles.statLabel
              }
            >
              Active
            </Text>
          </View>

          <View
            style={
              styles.statBox
            }
          >
            <Text
              style={
                styles.statValue
              }
            >
              {
                owner.rentedListings
              }
            </Text>

            <Text
              style={
                styles.statLabel
              }
            >
              Rented
            </Text>
          </View>
        </View>

        {/* MENU */}
        <View
          style={{
            paddingHorizontal: 18,
            marginTop: 18,
          }}
        >
          {menu.map(
            (
              item,
              i
            ) => (
              <TouchableOpacity
                key={i}
                style={
                  item.title ===
                  'Logout'
                    ? styles.logoutCard
                    : styles.menuCard
                }
                onPress={() =>
                  handleMenu(
                    item
                  )
                }
              >
                <Text
                  style={
                    item.title ===
                    'Logout'
                      ? styles.logoutTxt
                      : styles.menuTxt
                  }
                >
                  {
                    item.title
                  }
                </Text>

                {item.title !==
                  'Logout' && (
                  <Text
                    style={
                      styles.arrow
                    }
                  >
                    →
                  </Text>
                )}
              </TouchableOpacity>
            )
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        '#F8FAFF',
    },

    header: {
      paddingHorizontal: 18,
      paddingVertical: 16,
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems:
        'center',
    },

    back: {
      fontSize: 26,
      color: '#0F172A',
      fontWeight: '900',
    },

    title: {
      fontSize: 22,
      fontWeight: '900',
      color: '#0F172A',
    },

    profileCard: {
      marginHorizontal: 18,
      backgroundColor:
        '#FFFFFF',
      borderRadius: 24,
      padding: 24,
      alignItems:
        'center',
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    avatar: {
      width: 92,
      height: 92,
      borderRadius: 46,
      backgroundColor:
        '#1565FF',
      justifyContent:
        'center',
      alignItems:
        'center',
    },

    avatarTxt: {
      color: '#fff',
      fontSize: 30,
      fontWeight: '900',
    },

    name: {
      marginTop: 14,
      fontSize: 24,
      fontWeight: '900',
      color: '#0F172A',
    },

    email: {
      marginTop: 6,
      color: '#64748B',
      fontSize: 14,
    },

    mobile: {
      marginTop: 4,
      color: '#64748B',
      fontSize: 14,
    },

    badge: {
      marginTop: 14,
      backgroundColor:
        '#EAF2FF',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
    },

    badgeTxt: {
      color: '#1565FF',
      fontWeight: '800',
      fontSize: 13,
    },

    statsRow: {
      marginHorizontal: 18,
      marginTop: 16,
      flexDirection: 'row',
      justifyContent:
        'space-between',
    },

    statBox: {
      width: '31%',
      backgroundColor:
        '#FFFFFF',
      borderRadius: 18,
      paddingVertical: 18,
      alignItems:
        'center',
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    statValue: {
      fontSize: 22,
      fontWeight: '900',
      color: '#1565FF',
    },

    statLabel: {
      marginTop: 6,
      color: '#64748B',
      fontSize: 13,
    },

    menuCard: {
      backgroundColor:
        '#FFFFFF',
      padding: 18,
      borderRadius: 18,
      marginBottom: 12,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems:
        'center',
    },

    menuTxt: {
      color: '#0F172A',
      fontWeight: '800',
      fontSize: 15,
    },

    arrow: {
      color: '#1565FF',
      fontSize: 22,
      fontWeight: '900',
    },

    logoutCard: {
      backgroundColor:
        '#FEE2E2',
      padding: 18,
      borderRadius: 18,
      marginTop: 2,
      borderWidth: 1,
      borderColor:
        '#FECACA',
      alignItems:
        'center',
    },

    logoutTxt: {
      color: '#DC2626',
      fontWeight: '900',
      fontSize: 15,
    },
  });