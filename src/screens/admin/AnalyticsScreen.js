// AnalyticsScreen.js
// Create this file in:
// src/screens/admin/AnalyticsScreen.js

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

export default function AnalyticsScreen({
  navigation,
}) {
  const cards = [
    {
      title: 'Total Revenue',
      value: '₹1,48,500',
    },
    {
      title: 'Premium Users',
      value: '39',
    },
    {
      title: 'Monthly Leads',
      value: '284',
    },
    {
      title: 'New Signups',
      value: '117',
    },
  ];

  const cities = [
    'Pune',
    'Mumbai',
    'Bengaluru',
    'Hyderabad',
    'Delhi',
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

        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        {/* KPI CARDS */}
        <View style={styles.grid}>
          {cards.map((item, i) => (
            <View
              key={i}
              style={styles.card}
            >
              <Text
                style={
                  styles.value
                }
              >
                {item.value}
              </Text>

              <Text
                style={
                  styles.label
                }
              >
                {item.title}
              </Text>
            </View>
          ))}
        </View>

        {/* MOCK CHART */}
        <Text style={styles.section}>
          Growth Trend
        </Text>

        <View style={styles.chartBox}>
          <View
            style={[
              styles.bar,
              {
                height: 70,
              },
            ]}
          />

          <View
            style={[
              styles.bar,
              {
                height: 110,
              },
            ]}
          />

          <View
            style={[
              styles.bar,
              {
                height: 90,
              },
            ]}
          />

          <View
            style={[
              styles.bar,
              {
                height: 140,
              },
            ]}
          />

          <View
            style={[
              styles.bar,
              {
                height: 120,
              },
            ]}
          />
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
            (city, i) => (
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
                  {i + 1}. {city}
                </Text>

                <Text
                  style={
                    styles.cityLead
                  }
                >
                  {80 - i * 9}{' '}
                  Leads
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
      alignItems: 'center',
    },

    back: {
      fontSize: 26,
      fontWeight: '900',
      color: '#111827',
    },

    title: {
      fontSize: 22,
      fontWeight: '900',
      color: '#111827',
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
        '#E5E7EB',
    },

    value: {
      fontSize: 22,
      fontWeight: '900',
      color: '#1565FF',
    },

    label: {
      marginTop: 8,
      color: '#6B7280',
      fontSize: 14,
    },

    section: {
      marginTop: 24,
      marginBottom: 14,
      marginHorizontal: 18,
      fontSize: 22,
      fontWeight: '900',
      color: '#111827',
    },

    chartBox: {
      marginHorizontal: 18,
      backgroundColor:
        '#FFFFFF',
      borderRadius: 22,
      borderWidth: 1,
      borderColor:
        '#E5E7EB',
      padding: 18,
      height: 220,
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'flex-end',
    },

    bar: {
      width: '15%',
      backgroundColor:
        '#1565FF',
      borderRadius: 10,
    },

    cityCard: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 18,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor:
        '#E5E7EB',
      flexDirection: 'row',
      justifyContent:
        'space-between',
    },

    cityTxt: {
      color: '#111827',
      fontWeight: '800',
      fontSize: 15,
    },

    cityLead: {
      color: '#1565FF',
      fontWeight: '800',
      fontSize: 14,
    },
  });