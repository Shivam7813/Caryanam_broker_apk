// src/screens/admin/PropertiesApprovalScreen.js
// NEW PREMIUM VERSION
// Caryanam Broker - Property Approvals

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
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

export default function PropertiesApprovalScreen({
  navigation,
}) {
  const [search,
    setSearch] =
    useState('');

  const [properties,
    setProperties] =
    useState([
      {
        id: 1,
        title:
          '2 BHK Apartment',
        owner:
          'Rajesh Patil',
        city: 'Pune',
        price:
          '₹18,000 / month',
        type: 'Flat',
        status:
          'Pending',
      },
      {
        id: 2,
        title:
          'PG Room',
        owner:
          'Sneha More',
        city: 'Mumbai',
        price:
          '₹8,000 / month',
        type: 'PG',
        status:
          'Pending',
      },
      {
        id: 3,
        title:
          'Office Space',
        owner:
          'Amit Shah',
        city: 'Nashik',
        price:
          '₹25,000 / month',
        type: 'Office',
        status:
          'Pending',
      },
    ]);

  const filtered =
    properties.filter(
      item =>
        item.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.city
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.type
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  const updateStatus =
    (
      id,
      type
    ) => {
      setProperties(
        properties.map(
          item =>
            item.id ===
            id
              ? {
                  ...item,
                  status:
                    type,
                }
              : item
        )
      );

      Alert.alert(
        'Updated',
        `Property ${type}`
      );
    };

  const badgeColor =
    status => {
      if (
        status ===
        'Approved'
      )
        return '#16A34A';

      if (
        status ===
        'Rejected'
      )
        return '#DC2626';

      return '#F59E0B';
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
          Property Review
        </Text>

        <View
          style={{ width: 24 }}
        />
      </View>

      {/* SEARCH */}
      <View
        style={{
          paddingHorizontal: 18,
        }}
      >
        <TextInput
          placeholder="Search city, type, title"
          placeholderTextColor="#94A3B8"
          value={search}
          onChangeText={
            setSearch
          }
          style={styles.search}
        />
      </View>

      {/* BODY */}
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          padding: 18,
          paddingTop: 14,
          paddingBottom: 40,
        }}
      >
        {filtered.map(item => (
          <View
            key={item.id}
            style={styles.card}
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
                Property
              </Text>
            </View>

            {/* INFO */}
            <View
              style={
                styles.row
              }
            >
              <Text
                style={
                  styles.name
                }
              >
                {item.title}
              </Text>

              <Text
                style={[
                  styles.status,
                  {
                    color:
                      badgeColor(
                        item.status
                      ),
                  },
                ]}
              >
                {
                  item.status
                }
              </Text>
            </View>

            <Text
              style={
                styles.price
              }
            >
              {item.price}
            </Text>

            <Text
              style={
                styles.meta
              }
            >
              {item.city} •{' '}
              {item.type}
            </Text>

            <Text
              style={
                styles.owner
              }
            >
              Owner:{' '}
              {item.owner}
            </Text>

            {/* ACTIONS */}
            {item.status ===
            'Pending' ? (
              <View
                style={
                  styles.actionRow
                }
              >
                <TouchableOpacity
                  style={
                    styles.approveBtn
                  }
                  onPress={() =>
                    updateStatus(
                      item.id,
                      'Approved'
                    )
                  }
                >
                  <Text
                    style={
                      styles.approveTxt
                    }
                  >
                    Approve
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={
                    styles.rejectBtn
                  }
                  onPress={() =>
                    updateStatus(
                      item.id,
                      'Rejected'
                    )
                  }
                >
                  <Text
                    style={
                      styles.rejectTxt
                    }
                  >
                    Reject
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        ))}
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

    search: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 16,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
      paddingHorizontal: 14,
      paddingVertical: 14,
      color: '#111827',
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
      height: 130,
      borderRadius: 16,
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
      fontWeight: '900',
    },

    row: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems:
        'center',
    },

    name: {
      fontSize: 17,
      fontWeight: '900',
      color: '#0F172A',
      flex: 1,
    },

    status: {
      fontSize: 12,
      fontWeight: '900',
      marginLeft: 8,
    },

    price: {
      marginTop: 8,
      color: '#1565FF',
      fontWeight: '900',
      fontSize: 16,
    },

    meta: {
      marginTop: 6,
      color: '#64748B',
      fontSize: 13,
    },

    owner: {
      marginTop: 6,
      color: '#334155',
      fontSize: 13,
    },

    actionRow: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent:
        'space-between',
    },

    approveBtn: {
      width: '48%',
      backgroundColor:
        '#DCFCE7',
      paddingVertical: 13,
      borderRadius: 14,
      alignItems:
        'center',
    },

    approveTxt: {
      color: '#16A34A',
      fontWeight: '900',
    },

    rejectBtn: {
      width: '48%',
      backgroundColor:
        '#FEE2E2',
      paddingVertical: 13,
      borderRadius: 14,
      alignItems:
        'center',
    },

    rejectTxt: {
      color: '#DC2626',
      fontWeight: '900',
    },
  });