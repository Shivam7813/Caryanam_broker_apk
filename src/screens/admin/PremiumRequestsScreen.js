// src/screens/admin/PremiumRequestsScreen.js
// NEW PREMIUM VERSION
// Caryanam Broker - Premium Requests

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

export default function PremiumRequestsScreen({
  navigation,
}) {
  const [search,
    setSearch] =
    useState('');

  const [requests,
    setRequests] =
    useState([
      {
        id: 1,
        owner:
          'Rajesh Patil',
        city: 'Pune',
        plan: 'Gold',
        amount: '₹999',
        duration:
          '3 Months',
        status:
          'Pending',
      },
      {
        id: 2,
        owner:
          'Sneha More',
        city: 'Mumbai',
        plan: 'Silver',
        amount: '₹499',
        duration:
          '1 Month',
        status:
          'Pending',
      },
      {
        id: 3,
        owner:
          'Amit Shah',
        city: 'Nashik',
        plan: 'Platinum',
        amount: '₹1499',
        duration:
          '6 Months',
        status:
          'Pending',
      },
    ]);

  const filtered =
    requests.filter(
      item =>
        item.owner
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.city
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.plan
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
      setRequests(
        requests.map(
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
        `Request ${type}`
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
          Premium Requests
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
          placeholder="Search owner, city, plan"
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
            {/* TOP */}
            <View
              style={
                styles.row
              }
            >
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={
                    styles.name
                  }
                >
                  {
                    item.owner
                  }
                </Text>

                <Text
                  style={
                    styles.meta
                  }
                >
                  {item.city} •{' '}
                  {item.plan}
                </Text>
              </View>

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

            {/* PRICE */}
            <Text
              style={
                styles.amount
              }
            >
              {item.amount}
            </Text>

            <Text
              style={
                styles.duration
              }
            >
              {item.duration}
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
    },

    meta: {
      marginTop: 5,
      color: '#64748B',
      fontSize: 13,
    },

    status: {
      fontSize: 12,
      fontWeight: '900',
      marginLeft: 10,
    },

    amount: {
      marginTop: 14,
      fontSize: 28,
      fontWeight: '900',
      color: '#1565FF',
    },

    duration: {
      marginTop: 5,
      color: '#64748B',
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