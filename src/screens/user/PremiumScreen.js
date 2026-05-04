// src/screens/user/PremiumScreen.js
// UPDATED PREMIUM VERSION
// Caryanam Broker - Premium Plans

import React, {
  useState,
} from 'react';

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

export default function PremiumScreen({
  navigation,
}) {
  const [selectedPlan,
    setSelectedPlan] =
    useState('Gold');

  const plans = [
    {
      name: 'Silver',
      price: '₹499',
      duration: '1 Month',
      badge: 'Starter',
      features: [
        '5 Tenant Leads',
        'Priority Listing',
        'Basic Support',
      ],
    },
    {
      name: 'Gold',
      price: '₹999',
      duration: '3 Months',
      badge: 'Popular',
      features: [
        'Unlimited Leads',
        'Top Search Rank',
        'Verified Badge',
      ],
    },
    {
      name: 'Platinum',
      price: '₹1499',
      duration: '6 Months',
      badge: 'Best Value',
      features: [
        'Unlimited Leads',
        'Top Placement',
        'Dedicated Support',
      ],
    },
  ];

  const buyPlan =
    () => {
      Alert.alert(
        'Premium Request',
        `${selectedPlan} plan request sent for admin approval.`
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
          Premium Plans
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
            Grow Faster with
            Premium
          </Text>

          <Text style={styles.heroSub}>
            Boost rental listings,
            get more leads and rank
            higher in search.
          </Text>
        </View>

        {/* PLANS */}
        <View
          style={{
            paddingHorizontal: 18,
            marginTop: 18,
          }}
        >
          {plans.map(plan => {
            const active =
              selectedPlan ===
              plan.name;

            return (
              <TouchableOpacity
                key={plan.name}
                style={[
                  styles.card,
                  active &&
                    styles.activeCard,
                ]}
                onPress={() =>
                  setSelectedPlan(
                    plan.name
                  )
                }
              >
                <View
                  style={
                    styles.topRow
                  }
                >
                  <Text
                    style={
                      styles.planName
                    }
                  >
                    {plan.name}
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
                      {
                        plan.badge
                      }
                    </Text>
                  </View>
                </View>

                <Text
                  style={
                    styles.price
                  }
                >
                  {plan.price}
                </Text>

                <Text
                  style={
                    styles.duration
                  }
                >
                  {plan.duration}
                </Text>

                <View
                  style={
                    styles.line
                  }
                />

                {plan.features.map(
                  (
                    item,
                    index
                  ) => (
                    <Text
                      key={
                        index
                      }
                      style={
                        styles.feature
                      }
                    >
                      ✓ {item}
                    </Text>
                  )
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* CTA */}
        <TouchableOpacity
          style={styles.buyBtn}
          onPress={buyPlan}
        >
          <Text style={styles.buyTxt}>
            Activate {selectedPlan}
          </Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Current Flow: Admin
          approval enabled now.
          Payment gateway can be
          added later.
        </Text>
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
      lineHeight: 36,
    },

    heroSub: {
      marginTop: 10,
      color: '#EAF2FF',
      lineHeight: 22,
      fontSize: 14,
    },

    card: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 22,
      padding: 18,
      marginBottom: 14,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    activeCard: {
      borderWidth: 2,
      borderColor:
        '#1565FF',
    },

    topRow: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'center',
    },

    planName: {
      fontSize: 20,
      fontWeight: '900',
      color: '#0F172A',
    },

    badge: {
      backgroundColor:
        '#EAF2FF',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
    },

    badgeTxt: {
      color: '#1565FF',
      fontWeight: '800',
      fontSize: 12,
    },

    price: {
      marginTop: 12,
      fontSize: 28,
      fontWeight: '900',
      color: '#1565FF',
    },

    duration: {
      marginTop: 4,
      color: '#64748B',
      fontSize: 13,
    },

    line: {
      height: 1,
      backgroundColor:
        '#EEF2F7',
      marginVertical: 14,
    },

    feature: {
      color: '#0F172A',
      marginBottom: 9,
      fontSize: 14,
    },

    buyBtn: {
      backgroundColor:
        '#1565FF',
      marginHorizontal: 18,
      marginTop: 10,
      paddingVertical: 16,
      borderRadius: 16,
      alignItems: 'center',
    },

    buyTxt: {
      color: '#fff',
      fontWeight: '900',
      fontSize: 16,
    },

    note: {
      marginTop: 14,
      textAlign: 'center',
      color: '#64748B',
      fontSize: 13,
      paddingHorizontal: 20,
      lineHeight: 20,
    },
  });