// src/screens/admin/OwnersApprovalScreen.js
// NEW PREMIUM VERSION
// Caryanam Broker - Owner Approvals

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

export default function OwnersApprovalScreen({
  navigation,
}) {
  const [search,
    setSearch] =
    useState('');

  const [owners,
    setOwners] =
    useState([
      {
        id: 1,
        name:
          'Rajesh Patil',
        city: 'Pune',
        listings: 3,
        docs: 'Complete',
        status:
          'Pending',
      },
      {
        id: 2,
        name:
          'Sneha More',
        city: 'Mumbai',
        listings: 2,
        docs: 'Complete',
        status:
          'Pending',
      },
      {
        id: 3,
        name:
          'Amit Shah',
        city: 'Nashik',
        listings: 1,
        docs: 'Partial',
        status:
          'Pending',
      },
    ]);

  const filtered =
    owners.filter(
      item =>
        item.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.city
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
      setOwners(
        owners.map(
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
        `Owner ${type}`
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
          Owner Approvals
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
          placeholder="Search owner or city"
          placeholderTextColor="#94A3B8"
          value={search}
          onChangeText={
            setSearch
          }
          style={styles.search}
        />
      </View>

      {/* LIST */}
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
                style={
                  styles.avatar
                }
              >
                <Text
                  style={
                    styles.avatarTxt
                  }
                >
                  {item.name
                    .charAt(0)
                    .toUpperCase()}
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  marginLeft: 12,
                }}
              >
                <Text
                  style={
                    styles.name
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
                  {item.city} •{' '}
                  {
                    item.listings
                  } Listings
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

            {/* DOCS */}
            <Text
              style={
                styles.docs
              }
            >
              Documents:{' '}
              {item.docs}
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
      alignItems:
        'center',
    },

    avatar: {
      width: 54,
      height: 54,
      borderRadius: 27,
      backgroundColor:
        '#1565FF',
      justifyContent:
        'center',
      alignItems:
        'center',
    },

    avatarTxt: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '900',
    },

    name: {
      fontSize: 16,
      fontWeight: '900',
      color: '#0F172A',
    },

    meta: {
      marginTop: 4,
      color: '#64748B',
      fontSize: 13,
    },

    status: {
      fontWeight: '900',
      fontSize: 12,
    },

    docs: {
      marginTop: 14,
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