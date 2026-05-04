// PendingOwnersScreen.js
// Create this file in:
// src/screens/admin/PendingOwnersScreen.js

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

export default function PendingOwnersScreen({
  navigation,
}) {
  const [owners] =
    useState([
      {
        id: 1,
        name: 'Rajesh Patil',
        email: 'rajesh@gmail.com',
        listings: 12,
        plan: 'Gold',
      },
      {
        id: 2,
        name: 'Suresh Sharma',
        email: 'suresh@gmail.com',
        listings: 7,
        plan: 'Platinum',
      },
      {
        id: 3,
        name: 'Neha Jain',
        email: 'neha@gmail.com',
        listings: 4,
        plan: 'Silver',
      },
    ]);

  const action = (
    type,
    owner
  ) => {
    Alert.alert(
      type,
      `${type} ${owner.name} premium request`
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
          Pending Owners
        </Text>

        <View style={{ width: 24 }} />
      </View>

      {/* BODY */}
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        <View
          style={{
            paddingHorizontal: 18,
          }}
        >
          {owners.map(owner => (
            <View
              key={owner.id}
              style={styles.card}
            >
              <Text
                style={
                  styles.name
                }
              >
                {owner.name}
              </Text>

              <Text
                style={
                  styles.email
                }
              >
                {owner.email}
              </Text>

              <Text
                style={
                  styles.meta
                }
              >
                Listings:{' '}
                {
                  owner.listings
                }
              </Text>

              <Text
                style={
                  styles.plan
                }
              >
                Requested Plan:{' '}
                {owner.plan}
              </Text>

              <View
                style={
                  styles.row
                }
              >
                <TouchableOpacity
                  style={
                    styles.approveBtn
                  }
                  onPress={() =>
                    action(
                      'Approve',
                      owner
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
                    action(
                      'Reject',
                      owner
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
            </View>
          ))}
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

    card: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 20,
      padding: 18,
      marginBottom: 14,
      borderWidth: 1,
      borderColor:
        '#E5E7EB',
    },

    name: {
      fontSize: 18,
      fontWeight: '900',
      color: '#111827',
    },

    email: {
      marginTop: 6,
      color: '#6B7280',
      fontSize: 14,
    },

    meta: {
      marginTop: 8,
      color: '#6B7280',
      fontSize: 14,
    },

    plan: {
      marginTop: 8,
      color: '#1565FF',
      fontWeight: '800',
    },

    row: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent:
        'space-between',
    },

    approveBtn: {
      width: '48%',
      backgroundColor:
        '#DCFCE7',
      paddingVertical: 14,
      borderRadius: 14,
      alignItems: 'center',
    },

    approveTxt: {
      color: '#16A34A',
      fontWeight: '900',
    },

    rejectBtn: {
      width: '48%',
      backgroundColor:
        '#FEE2E2',
      paddingVertical: 14,
      borderRadius: 14,
      alignItems: 'center',
    },

    rejectTxt: {
      color: '#EF4444',
      fontWeight: '900',
    },
  });