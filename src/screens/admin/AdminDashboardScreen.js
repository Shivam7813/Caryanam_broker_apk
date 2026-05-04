// src/screens/admin/AdminDashboardScreen.js
// UPDATED PREMIUM VERSION
// Caryanam Broker - Admin Dashboard

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function AdminDashboardScreen({
  navigation,
}) {
  const stats = [
    {
      title: 'Users',
      value: '245',
    },
    {
      title: 'Owners',
      value: '88',
    },
    {
      title: 'Listings',
      value: '412',
    },
    {
      title: 'Premium',
      value: '39',
    },
  ];

  const actions = [
    {
      title:
        'User Management',
      screen:
        'UsersManagement',
    },
    {
      title:
        'Owner Approvals',
      screen:
        'OwnersApproval',
    },
    {
      title:
        'Property Review',
      screen:
        'PropertiesApproval',
    },
    {
      title:
        'Premium Requests',
      screen:
        'PremiumRequests',
    },
    {
      title:
        'Reports & Analytics',
      screen:
        'ReportsAnalytics',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#F8FAFF"
        barStyle="dark-content"
      />

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text
              style={
                styles.small
              }
            >
              Welcome Admin 👋
            </Text>

            <Text
              style={
                styles.title
              }
            >
              Control Center
            </Text>
          </View>

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
              Secure
            </Text>
          </View>
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <Text
            style={
              styles.heroTitle
            }
          >
            Manage Full
            Platform
          </Text>

          <Text
            style={
              styles.heroSub
            }
          >
            Users, owners,
            rentals, approvals and
            premium growth in one
            place.
          </Text>
        </View>

        {/* STATS */}
        <Text style={styles.section}>
          Overview
        </Text>

        <View style={styles.grid}>
          {stats.map(
            (
              item,
              i
            ) => (
              <View
                key={i}
                style={
                  styles.statCard
                }
              >
                <Text
                  style={
                    styles.statValue
                  }
                >
                  {
                    item.value
                  }
                </Text>

                <Text
                  style={
                    styles.statTitle
                  }
                >
                  {
                    item.title
                  }
                </Text>
              </View>
            )
          )}
        </View>

        {/* REVENUE */}
        <Text style={styles.section}>
          Revenue
        </Text>

        <View
          style={{
            paddingHorizontal: 18,
          }}
        >
          <View
            style={
              styles.revenueCard
            }
          >
            <Text
              style={
                styles.revLabel
              }
            >
              This Month
            </Text>

            <Text
              style={
                styles.revValue
              }
            >
              ₹48,500
            </Text>

            <Text
              style={
                styles.revSub
              }
            >
              Premium plans &
              boosts
            </Text>
          </View>
        </View>

        {/* ACTIONS */}
        <Text style={styles.section}>
          Quick Actions
        </Text>

        <View
          style={{
            paddingHorizontal: 18,
          }}
        >
          {actions.map(
            (
              item,
              i
            ) => (
              <TouchableOpacity
                key={i}
                style={
                  styles.actionCard
                }
                onPress={() =>
                  navigation.navigate(
                    item.screen
                  )
                }
              >
                <Text
                  style={
                    styles.actionTxt
                  }
                >
                  {
                    item.title
                  }
                </Text>

                <Text
                  style={
                    styles.arrow
                  }
                >
                  →
                </Text>
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
      padding: 18,
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems:
        'center',
    },

    small: {
      fontSize: 13,
      color: '#64748B',
    },

    title: {
      marginTop: 4,
      fontSize: 26,
      fontWeight: '900',
      color: '#0F172A',
    },

    badge: {
      backgroundColor:
        '#EAF2FF',
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 20,
    },

    badgeTxt: {
      color: '#1565FF',
      fontWeight: '800',
      fontSize: 12,
    },

    hero: {
      backgroundColor:
        '#1565FF',
      marginHorizontal: 18,
      borderRadius: 24,
      padding: 22,
    },

    heroTitle: {
      color: '#fff',
      fontSize: 28,
      fontWeight: '900',
      lineHeight: 36,
    },

    heroSub: {
      marginTop: 10,
      color: '#EAF2FF',
      lineHeight: 22,
      fontSize: 14,
    },

    section: {
      marginTop: 26,
      marginBottom: 14,
      marginHorizontal: 18,
      fontSize: 22,
      fontWeight: '900',
      color: '#0F172A',
    },

    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:
        'space-between',
      paddingHorizontal: 18,
    },

    statCard: {
      width: '48%',
      backgroundColor:
        '#FFFFFF',
      borderRadius: 18,
      padding: 18,
      marginBottom: 14,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    statValue: {
      fontSize: 24,
      fontWeight: '900',
      color: '#1565FF',
    },

    statTitle: {
      marginTop: 8,
      color: '#64748B',
      fontSize: 13,
    },

    revenueCard: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 22,
      padding: 20,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    revLabel: {
      color: '#64748B',
      fontSize: 13,
    },

    revValue: {
      marginTop: 8,
      fontSize: 30,
      fontWeight: '900',
      color: '#1565FF',
    },

    revSub: {
      marginTop: 6,
      color: '#64748B',
      fontSize: 13,
    },

    actionCard: {
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

    actionTxt: {
      color: '#0F172A',
      fontWeight: '800',
      fontSize: 15,
    },

    arrow: {
      color: '#1565FF',
      fontSize: 22,
      fontWeight: '900',
    },
  });