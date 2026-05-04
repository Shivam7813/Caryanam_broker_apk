// src/screens/user/PropertyListScreen.js
// UPDATED PREMIUM VERSION
// Caryanam Broker - Rental Listings Only

import React, {
  useState,
} from 'react';

import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function PropertyListScreen({
  navigation,
}) {
  const [search, setSearch] =
    useState('');

  const rentals = [
    {
      id: 1,
      title: '2 BHK Apartment',
      price: '₹18,000 / month',
      location: 'Baner, Pune',
      bhk: '2 BHK',
      tag: 'Family',
    },
    {
      id: 2,
      title: '1 BHK Flat',
      price: '₹13,500 / month',
      location: 'Wakad, Pune',
      bhk: '1 BHK',
      tag: 'Bachelor',
    },
    {
      id: 3,
      title: 'PG Room',
      price: '₹8,000 / month',
      location: 'Hinjewadi',
      bhk: 'Single',
      tag: 'Boys PG',
    },
    {
      id: 4,
      title: 'Studio Room',
      price: '₹11,000 / month',
      location: 'Kothrud',
      bhk: 'Studio',
      tag: 'Working',
    },
  ];

  const filtered =
    rentals.filter(item =>
      item.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        ) ||
      item.location
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#F8FAFF"
        barStyle="dark-content"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Rental Homes
        </Text>

        <TouchableOpacity
          style={styles.filterBtn}
        >
          <Text
            style={
              styles.filterTxt
            }
          >
            Filter
          </Text>
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View style={styles.searchWrap}>
        <TextInput
          placeholder="Search area, city, locality"
          placeholderTextColor="#94A3B8"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      {/* QUICK FILTERS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingBottom: 8,
        }}
      >
        {[
          '1 BHK',
          '2 BHK',
          'PG',
          'Family',
          'Bachelor',
        ].map(item => (
          <TouchableOpacity
            key={item}
            style={styles.chip}
          >
            <Text
              style={
                styles.chipTxt
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* LIST */}
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
            paddingTop: 8,
          }}
        >
          {filtered.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
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
                  Rental Image
                </Text>
              </View>

              {/* DETAILS */}
              <Text
                style={
                  styles.cardTitle
                }
              >
                {item.title}
              </Text>

              <Text
                style={
                  styles.price
                }
              >
                {item.price}
              </Text>

              <Text
                style={
                  styles.location
                }
              >
                {item.location}
              </Text>

              <View
                style={
                  styles.row
                }
              >
                <Text
                  style={
                    styles.tag
                  }
                >
                  {item.bhk}
                </Text>

                <Text
                  style={
                    styles.tag2
                  }
                >
                  {item.tag}
                </Text>

                <TouchableOpacity
                  style={
                    styles.btn
                  }
                >
                  <Text
                    style={
                      styles.btnTxt
                    }
                  >
                    View
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}

          {filtered.length ===
            0 && (
            <Text
              style={
                styles.empty
              }
            >
              No rentals found
            </Text>
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
      paddingBottom: 10,
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

    filterBtn: {
      backgroundColor:
        '#EAF2FF',
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 20,
    },

    filterTxt: {
      color: '#1565FF',
      fontWeight: '800',
      fontSize: 12,
    },

    searchWrap: {
      paddingHorizontal: 18,
      paddingBottom: 10,
    },

    input: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 16,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
      paddingHorizontal: 16,
      paddingVertical: 14,
      color: '#111827',
      fontSize: 14,
    },

    chip: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 20,
      paddingHorizontal: 14,
      paddingVertical: 9,
      marginRight: 10,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    chipTxt: {
      color: '#334155',
      fontWeight: '700',
      fontSize: 13,
    },

    card: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 20,
      padding: 16,
      marginBottom: 14,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    imageBox: {
      height: 160,
      borderRadius: 18,
      backgroundColor:
        '#EAF2FF',
      justifyContent:
        'center',
      alignItems:
        'center',
      marginBottom: 14,
    },

    imageTxt: {
      color: '#1565FF',
      fontWeight: '800',
    },

    cardTitle: {
      fontSize: 18,
      fontWeight: '900',
      color: '#0F172A',
    },

    price: {
      marginTop: 8,
      color: '#1565FF',
      fontWeight: '900',
      fontSize: 16,
    },

    location: {
      marginTop: 6,
      color: '#64748B',
      fontSize: 14,
    },

    row: {
      marginTop: 14,
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },

    tag: {
      backgroundColor:
        '#EAF2FF',
      color: '#1565FF',
      paddingHorizontal: 12,
      paddingVertical: 7,
      borderRadius: 20,
      fontWeight: '800',
      marginRight: 8,
      marginBottom: 8,
      overflow: 'hidden',
      fontSize: 12,
    },

    tag2: {
      backgroundColor:
        '#F1F5F9',
      color: '#334155',
      paddingHorizontal: 12,
      paddingVertical: 7,
      borderRadius: 20,
      fontWeight: '800',
      marginRight: 8,
      marginBottom: 8,
      overflow: 'hidden',
      fontSize: 12,
    },

    btn: {
      marginLeft: 'auto',
      backgroundColor:
        '#1565FF',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 12,
    },

    btnTxt: {
      color: '#fff',
      fontWeight: '800',
      fontSize: 13,
    },

    empty: {
      textAlign: 'center',
      marginTop: 40,
      color: '#64748B',
      fontSize: 15,
    },
  });