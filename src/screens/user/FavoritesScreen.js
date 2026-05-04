// src/screens/user/FavoritesScreen.js
// UPDATED PREMIUM VERSION
// Caryanam Broker - Saved Rentals Screen

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
} from 'react-native';

export default function FavoritesScreen({
  navigation,
}) {
  const [favorites] =
    useState([
      {
        id: 1,
        title: '2 BHK Apartment',
        price: '₹18,000 / month',
        location: 'Baner, Pune',
        type: 'Family',
      },
      {
        id: 2,
        title: '1 BHK Flat',
        price: '₹13,500 / month',
        location: 'Wakad, Pune',
        type: 'Bachelor',
      },
      {
        id: 3,
        title: 'PG Room',
        price: '₹8,000 / month',
        location: 'Hinjewadi',
        type: 'Boys PG',
      },
    ]);

  const isEmpty =
    favorites.length === 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#F8FAFF"
        barStyle="dark-content"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Saved Rentals
        </Text>

        <View style={styles.badge}>
          <Text
            style={
              styles.badgeTxt
            }
          >
            {favorites.length}
          </Text>
        </View>
      </View>

      {/* BODY */}
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 110,
        }}
      >
        <View
          style={{
            paddingHorizontal: 18,
          }}
        >
          {!isEmpty ? (
            favorites.map(
              item => (
                <TouchableOpacity
                  key={
                    item.id
                  }
                  style={
                    styles.card
                  }
                  onPress={() =>
                    navigation.navigate(
                      'PropertyDetails',
                      {
                        property:
                          item,
                      }
                    )
                  }
                >
                  {/* IMAGE */}
                  <View
                    style={
                      styles.imageBox
                    }
                  >
                    <Text
                      style={
                        styles.imageTxt
                      }
                    >
                      Saved
                    </Text>
                  </View>

                  {/* DETAILS */}
                  <View
                    style={{
                      flex: 1,
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
                        styles.price
                      }
                    >
                      {
                        item.price
                      }
                    </Text>

                    <Text
                      style={
                        styles.location
                      }
                    >
                      {
                        item.location
                      }
                    </Text>

                    <Text
                      style={
                        styles.type
                      }
                    >
                      {
                        item.type
                      }
                    </Text>
                  </View>

                  {/* HEART */}
                  <TouchableOpacity>
                    <Text
                      style={
                        styles.heart
                      }
                    >
                      ♥
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            )
          ) : (
            <View
              style={
                styles.emptyWrap
              }
            >
              <Text
                style={
                  styles.emptyIcon
                }
              >
                ♡
              </Text>

              <Text
                style={
                  styles.emptyTitle
                }
              >
                No Saved Rentals
              </Text>

              <Text
                style={
                  styles.emptySub
                }
              >
                Explore homes and save
                your favorite rentals.
              </Text>

              <TouchableOpacity
                style={
                  styles.exploreBtn
                }
                onPress={() =>
                  navigation.navigate(
                    'PropertyList'
                  )
                }
              >
                <Text
                  style={
                    styles.exploreTxt
                  }
                >
                  Explore Rentals
                </Text>
              </TouchableOpacity>
            </View>
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
      paddingTop: 16,
      paddingHorizontal: 18,
      paddingBottom: 12,
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'center',
    },

    title: {
      fontSize: 24,
      fontWeight: '900',
      color: '#0F172A',
    },

    badge: {
      minWidth: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor:
        '#EAF2FF',
      justifyContent:
        'center',
      alignItems:
        'center',
      paddingHorizontal: 8,
    },

    badgeTxt: {
      color: '#1565FF',
      fontWeight: '900',
      fontSize: 13,
    },

    card: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 20,
      padding: 14,
      marginBottom: 14,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
      flexDirection: 'row',
      alignItems: 'center',
    },

    imageBox: {
      width: 82,
      height: 82,
      borderRadius: 18,
      backgroundColor:
        '#EAF2FF',
      justifyContent:
        'center',
      alignItems:
        'center',
      marginRight: 14,
    },

    imageTxt: {
      color: '#1565FF',
      fontWeight: '800',
      fontSize: 13,
    },

    cardTitle: {
      fontSize: 16,
      fontWeight: '900',
      color: '#0F172A',
    },

    price: {
      marginTop: 6,
      color: '#1565FF',
      fontWeight: '900',
      fontSize: 14,
    },

    location: {
      marginTop: 5,
      color: '#64748B',
      fontSize: 13,
    },

    type: {
      marginTop: 6,
      color: '#334155',
      fontSize: 12,
      fontWeight: '700',
    },

    heart: {
      fontSize: 24,
      color: '#EF4444',
      marginLeft: 8,
    },

    emptyWrap: {
      marginTop: 80,
      alignItems: 'center',
      paddingHorizontal: 20,
    },

    emptyIcon: {
      fontSize: 44,
      color: '#CBD5E1',
    },

    emptyTitle: {
      marginTop: 12,
      fontSize: 22,
      fontWeight: '900',
      color: '#0F172A',
    },

    emptySub: {
      marginTop: 10,
      textAlign: 'center',
      color: '#64748B',
      lineHeight: 22,
      fontSize: 14,
    },

    exploreBtn: {
      marginTop: 18,
      backgroundColor:
        '#1565FF',
      paddingHorizontal: 22,
      paddingVertical: 14,
      borderRadius: 16,
    },

    exploreTxt: {
      color: '#fff',
      fontWeight: '900',
    },
  });