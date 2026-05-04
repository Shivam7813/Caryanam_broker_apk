// src/screens/auth/RoleSelectScreen.js
// UPDATED PREMIUM VERSION
// Caryanam Broker Role Selection

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function RoleSelectScreen({
  navigation,
}) {
  const roles = [
    {
      icon: '👤',
      title: 'Continue as User',
      sub:
        'Find flats, PG, rooms and rental homes.',
      screen: 'Login',
    },
    {
      icon: '🏠',
      title: 'Continue as Owner',
      sub:
        'Post rental property and manage leads.',
      screen: 'Register',
    },
    {
      icon: '🛡️',
      title: 'Admin Access',
      sub:
        'Manage approvals and platform controls.',
      screen: 'Login',
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
        contentContainerStyle={
          styles.scroll
        }
      >
        {/* TOP */}
        <View style={styles.top}>
          <View style={styles.logo}>
            <Text
              style={
                styles.logoTxt
              }
            >
              CB
            </Text>
          </View>

          <Text style={styles.brand}>
            Caryanam Broker
          </Text>

          <Text
            style={
              styles.heading
            }
          >
            Select Your Role
          </Text>

          <Text style={styles.sub}>
            Choose how you want to
            continue in the app.
          </Text>
        </View>

        {/* ROLE CARDS */}
        <View style={styles.cardWrap}>
          {roles.map(
            (
              item,
              index
            ) => (
              <TouchableOpacity
                key={
                  index
                }
                style={
                  styles.card
                }
                onPress={() =>
                  navigation.navigate(
                    item.screen
                  )
                }
              >
                <View
                  style={
                    styles.iconBox
                  }
                >
                  <Text
                    style={
                      styles.icon
                    }
                  >
                    {
                      item.icon
                    }
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    marginLeft: 14,
                  }}
                >
                  <Text
                    style={
                      styles.cardTitle
                    }
                  >
                    {
                      item.title
                    }
                  </Text>

                  <Text
                    style={
                      styles.cardSub
                    }
                  >
                    {
                      item.sub
                    }
                  </Text>
                </View>

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

        {/* FOOTER */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              'Landing'
            )
          }
        >
          <Text
            style={
              styles.footer
            }
          >
            Back to Home
          </Text>
        </TouchableOpacity>
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

    scroll: {
      flexGrow: 1,
      paddingHorizontal: 22,
      paddingVertical: 24,
      justifyContent:
        'center',
    },

    top: {
      alignItems: 'center',
      marginBottom: 28,
    },

    logo: {
      width: 88,
      height: 88,
      borderRadius: 44,
      backgroundColor:
        '#1565FF',
      justifyContent:
        'center',
      alignItems:
        'center',
    },

    logoTxt: {
      color: '#fff',
      fontSize: 28,
      fontWeight: '900',
    },

    brand: {
      marginTop: 14,
      fontSize: 25,
      fontWeight: '900',
      color: '#0F172A',
    },

    heading: {
      marginTop: 10,
      fontSize: 28,
      fontWeight: '900',
      color: '#0F172A',
    },

    sub: {
      marginTop: 10,
      color: '#64748B',
      textAlign: 'center',
      lineHeight: 22,
      fontSize: 14,
      paddingHorizontal: 16,
    },

    cardWrap: {
      gap: 14,
    },

    card: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 22,
      padding: 18,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
      flexDirection: 'row',
      alignItems: 'center',
    },

    iconBox: {
      width: 56,
      height: 56,
      borderRadius: 18,
      backgroundColor:
        '#EAF2FF',
      justifyContent:
        'center',
      alignItems:
        'center',
    },

    icon: {
      fontSize: 24,
    },

    cardTitle: {
      fontSize: 17,
      fontWeight: '900',
      color: '#0F172A',
    },

    cardSub: {
      marginTop: 6,
      color: '#64748B',
      fontSize: 13,
      lineHeight: 20,
    },

    arrow: {
      fontSize: 24,
      color: '#1565FF',
      fontWeight: '900',
      marginLeft: 10,
    },

    footer: {
      marginTop: 26,
      textAlign: 'center',
      color: '#1565FF',
      fontSize: 15,
      fontWeight: '800',
    },
  });