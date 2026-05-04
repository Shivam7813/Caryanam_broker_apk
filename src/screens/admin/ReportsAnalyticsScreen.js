// src/screens/admin/ReportsAnalyticsScreen.js
// NEW PREMIUM VERSION
// Caryanam Broker - Reports & Analytics

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

export default function ReportsAnalyticsScreen({
  navigation,
}) {
  const summary = [
    {
      title: 'Total Revenue',
      value: '₹2.85L',
    },
    {
      title: 'New Users',
      value: '245',
    },
    {
      title: 'Active Owners',
      value: '88',
    },
    {
      title: 'Live Listings',
      value: '412',
    },
  ];

  const months = [
    {
      name: 'Jan',
      revenue: '₹28K',
      users: 32,
    },
    {
      name: 'Feb',
      revenue: '₹34K',
      users: 41,
    },
    {
      name: 'Mar',
      revenue: '₹39K',
      users: 53,
    },
    {
      name: 'Apr',
      revenue: '₹46K',
      users: 67,
    },
  ];

  const cities = [
    'Pune',
    'Mumbai',
    'Nashik',
    'Nagpur',
    'Aurangabad',
  ];

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
          Analytics
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
        {/* HERO */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Business Growth
          </Text>

          <Text style={styles.heroSub}>
            Revenue, users and
            listing performance in
            one place.
          </Text>
        </View>

        {/* SUMMARY */}
        <Text style={styles.section}>
          Summary
        </Text>

        <View style={styles.grid}>
          {summary.map(
            (
              item,
              i
            ) => (
              <View
                key={i}
                style={
                  styles.card
                }
              >
                <Text
                  style={
                    styles.value
                  }
                >
                  {
                    item.value
                  }
                </Text>

                <Text
                  style={
                    styles.label
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

        {/* MONTHLY */}
        <Text style={styles.section}>
          Monthly Growth
        </Text>

        <View
          style={{
            paddingHorizontal: 18,
          }}
        >
          {months.map(
            (
              item,
              i
            ) => (
              <View
                key={i}
                style={
                  styles.monthCard
                }
              >
                <Text
                  style={
                    styles.month
                  }
                >
                  {
                    item.name
                  }
                </Text>

                <Text
                  style={
                    styles.meta
                  }
                >
                  Revenue:{' '}
                  {
                    item.revenue
                  }
                </Text>

                <Text
                  style={
                    styles.meta
                  }
                >
                  Users:{' '}
                  {
                    item.users
                  }
                </Text>
              </View>
            )
          )}
        </View>

        {/* TOP CITIES */}
        <Text style={styles.section}>
          Top Cities
        </Text>

        <View
          style={{
            paddingHorizontal: 18,
          }}
        >
          {cities.map(
            (
              city,
              i
            ) => (
              <View
                key={i}
                style={
                  styles.cityCard
                }
              >
                <Text
                  style={
                    styles.cityTxt
                  }
                >
                  {i + 1}.{' '}
                  {city}
                </Text>
              </View>
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
      fontWeight: '900',
      color: '#0F172A',
    },

    title: {
      fontSize: 22,
      fontWeight: '900',
      color: '#0F172A',
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
      fontSize: 21,
      fontWeight: '900',
      color: '#0F172A',
    },

    grid: {
      paddingHorizontal: 18,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:
        'space-between',
    },

    card: {
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

    value: {
      fontSize: 24,
      fontWeight: '900',
      color: '#1565FF',
    },

    label: {
      marginTop: 8,
      color: '#64748B',
      fontSize: 13,
    },

    monthCard: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 18,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    month: {
      fontSize: 16,
      fontWeight: '900',
      color: '#0F172A',
    },

    meta: {
      marginTop: 6,
      color: '#64748B',
      fontSize: 13,
    },

    cityCard: {
      backgroundColor:
        '#FFFFFF',
      padding: 16,
      borderRadius: 16,
      marginBottom: 10,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    cityTxt: {
      color: '#0F172A',
      fontWeight: '800',
      fontSize: 14,
    },
  });