// src/screens/admin/UsersManagementScreen.js
// NEW PREMIUM VERSION
// Caryanam Broker - Users Management

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

export default function UsersManagementScreen({
  navigation,
}) {
  const [search,
    setSearch] =
    useState('');

  const [users,
    setUsers] =
    useState([
      {
        id: 1,
        name:
          'Amit Sharma',
        city: 'Pune',
        email:
          'amit@gmail.com',
        status:
          'Active',
      },
      {
        id: 2,
        name:
          'Sneha Patil',
        city: 'Mumbai',
        email:
          'sneha@gmail.com',
        status:
          'Blocked',
      },
      {
        id: 3,
        name:
          'Rohan Jain',
        city: 'Nashik',
        email:
          'rohan@gmail.com',
        status:
          'Active',
      },
    ]);

  const filtered =
    users.filter(
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
          ) ||
        item.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  const updateStatus =
    id => {
      setUsers(
        users.map(
          item =>
            item.id ===
            id
              ? {
                  ...item,
                  status:
                    item.status ===
                    'Active'
                      ? 'Blocked'
                      : 'Active',
                }
              : item
        )
      );
    };

  const badgeColor =
    status => {
      return status ===
        'Active'
        ? '#16A34A'
        : '#DC2626';
    };

  const viewUser =
    item => {
      Alert.alert(
        item.name,
        `${item.email}\n${item.city}`
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
          Users Management
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
          placeholder="Search name, city, email"
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
                  {item.city}
                </Text>

                <Text
                  style={
                    styles.email
                  }
                >
                  {
                    item.email
                  }
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

            {/* ACTIONS */}
            <View
              style={
                styles.actionRow
              }
            >
              <TouchableOpacity
                style={
                  styles.viewBtn
                }
                onPress={() =>
                  viewUser(
                    item
                  )
                }
              >
                <Text
                  style={
                    styles.viewTxt
                  }
                >
                  View
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={
                  item.status ===
                  'Active'
                    ? styles.blockBtn
                    : styles.unblockBtn
                }
                onPress={() =>
                  updateStatus(
                    item.id
                  )
                }
              >
                <Text
                  style={
                    item.status ===
                    'Active'
                      ? styles.blockTxt
                      : styles.unblockTxt
                  }
                >
                  {item.status ===
                  'Active'
                    ? 'Block'
                    : 'Unblock'}
                </Text>
              </TouchableOpacity>
            </View>
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

    email: {
      marginTop: 4,
      color: '#64748B',
      fontSize: 12,
    },

    status: {
      fontWeight: '900',
      fontSize: 12,
    },

    actionRow: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent:
        'space-between',
    },

    viewBtn: {
      width: '48%',
      backgroundColor:
        '#EAF2FF',
      paddingVertical: 13,
      borderRadius: 14,
      alignItems:
        'center',
    },

    viewTxt: {
      color: '#1565FF',
      fontWeight: '900',
    },

    blockBtn: {
      width: '48%',
      backgroundColor:
        '#FEE2E2',
      paddingVertical: 13,
      borderRadius: 14,
      alignItems:
        'center',
    },

    blockTxt: {
      color: '#DC2626',
      fontWeight: '900',
    },

    unblockBtn: {
      width: '48%',
      backgroundColor:
        '#DCFCE7',
      paddingVertical: 13,
      borderRadius: 14,
      alignItems:
        'center',
    },

    unblockTxt: {
      color: '#16A34A',
      fontWeight: '900',
    },
  });