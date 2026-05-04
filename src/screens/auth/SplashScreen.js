// src/screens/auth/SplashScreen.js
// UPDATED PREMIUM VERSION
// Caryanam Broker Splash Screen

import React, {
  useEffect,
} from 'react';

import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function SplashScreen({
  navigation,
}) {
  useEffect(() => {
    const timer =
      setTimeout(() => {
        navigation?.replace?.(
          'Landing'
        );
      }, 2200);

    return () =>
      clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#F8FAFF"
        barStyle="dark-content"
      />

      {/* TOP LIGHT CIRCLE */}
      <View
        style={
          styles.circleOne
        }
      />

      <View
        style={
          styles.circleTwo
        }
      />

      {/* LOGO */}
      <View style={styles.logoBox}>
        <Text
          style={
            styles.logoTxt
          }
        >
          CB
        </Text>
      </View>

      {/* BRAND */}
      <Text style={styles.brand}>
        Caryanam Broker
      </Text>

      <Text style={styles.sub}>
        Trusted Rental Marketplace
      </Text>

      {/* LOADER */}
      <View
        style={
          styles.loaderWrap
        }
      >
        <ActivityIndicator
          size="large"
          color="#1565FF"
        />
      </View>

      {/* FOOTER */}
      <Text style={styles.footer}>
        Rent • PG • Homes
      </Text>
    </View>
  );
}

/* ================= STYLES ================= */

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        '#F8FAFF',
      justifyContent:
        'center',
      alignItems:
        'center',
      paddingHorizontal: 20,
    },

    circleOne: {
      position:
        'absolute',
      top: -40,
      right: -30,
      width: 180,
      height: 180,
      borderRadius: 90,
      backgroundColor:
        '#EAF2FF',
    },

    circleTwo: {
      position:
        'absolute',
      bottom: -50,
      left: -30,
      width: 170,
      height: 170,
      borderRadius: 85,
      backgroundColor:
        '#EAF2FF',
    },

    logoBox: {
      width: 116,
      height: 116,
      borderRadius: 58,
      backgroundColor:
        '#1565FF',
      justifyContent:
        'center',
      alignItems:
        'center',
      shadowColor:
        '#1565FF',
      shadowOpacity: 0.22,
      shadowRadius: 14,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      elevation: 8,
    },

    logoTxt: {
      color: '#fff',
      fontSize: 40,
      fontWeight: '900',
      letterSpacing: 1,
    },

    brand: {
      marginTop: 24,
      fontSize: 32,
      fontWeight: '900',
      color: '#0F172A',
      textAlign: 'center',
    },

    sub: {
      marginTop: 8,
      fontSize: 15,
      color: '#64748B',
      letterSpacing: 0.3,
      textAlign: 'center',
    },

    loaderWrap: {
      marginTop: 34,
    },

    footer: {
      position:
        'absolute',
      bottom: 42,
      fontSize: 14,
      color: '#1565FF',
      fontWeight: '800',
      letterSpacing: 0.4,
    },
  });