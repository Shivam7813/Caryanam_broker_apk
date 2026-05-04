// PendingUsersScreen.js
// Create this file in:
// src/screens/admin/PendingUsersScreen.js

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

export default function PendingUsersScreen({
  navigation,
}) {
  const [users] =
    useState([
      {
        id: 1,
        name: 'Amit Sharma',
        email: 'amit@gmail.com',
        plan: 'Gold',
      },
      {
        id: 2,
        name: 'Sneha Patil',
        email: 'sneha@gmail.com',
        plan: 'Silver',
      },
      {
        id: 3,
        name: 'Rohan Jain',
        email: 'rohan@gmail.com',
        plan: 'Platinum',
      },
    ]);

  const action = (
    type,
    user
  ) => {
    Alert.alert(
      type,
      `${type} ${user.name} premium request`
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
          Pending Users
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
          {users.map(user => (
            <View
              key={user.id}
              style={styles.card}
            >
              <Text
                style={
                  styles.name
                }
              >
                {user.name}
              </Text>

              <Text
                style={
                  styles.email
                }
              >
                {user.email}
              </Text>

              <Text
                style={
                  styles.plan
                }
              >
                Requested Plan:{' '}
                {user.plan}
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
                      user
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
                      user
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