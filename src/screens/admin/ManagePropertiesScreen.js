// ManagePropertiesScreen.js
// Create this file in:
// src/screens/admin/ManagePropertiesScreen.js

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

export default function ManagePropertiesScreen({
  navigation,
}) {
  const [properties] =
    useState([
      {
        id: 1,
        title: 'Luxury Apartment',
        owner: 'Rajesh Patil',
        city: 'Baner, Pune',
        status: 'Active',
      },
      {
        id: 2,
        title: 'Villa House',
        owner: 'Suresh Sharma',
        city: 'Hinjewadi',
        status: 'Pending',
      },
      {
        id: 3,
        title: '1 BHK Flat',
        owner: 'Neha Jain',
        city: 'Wakad, Pune',
        status: 'Blocked',
      },
    ]);

  const action = (
    type,
    item
  ) => {
    Alert.alert(
      type,
      `${type} ${item.title}`
    );
  };

  const getStatusColor =
    status => {
      if (status === 'Active')
        return '#16A34A';

      if (status === 'Pending')
        return '#F59E0B';

      return '#EF4444';
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
          Manage Properties
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
          {properties.map(item => (
            <View
              key={item.id}
              style={styles.card}
            >
              <Text
                style={
                  styles.cardTitle
                }
              >
                {item.title}
              </Text>

              <Text
                style={
                  styles.owner
                }
              >
                Owner:{' '}
                {item.owner}
              </Text>

              <Text
                style={
                  styles.city
                }
              >
                {item.city}
              </Text>

              <Text
                style={[
                  styles.status,
                  {
                    color:
                      getStatusColor(
                        item.status
                      ),
                  },
                ]}
              >
                {item.status}
              </Text>

              <View
                style={
                  styles.row
                }
              >
                <TouchableOpacity
                  style={
                    styles.viewBtn
                  }
                  onPress={() =>
                    action(
                      'View',
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
                    styles.blockBtn
                  }
                  onPress={() =>
                    action(
                      'Block',
                      item
                    )
                  }
                >
                  <Text
                    style={
                      styles.blockTxt
                    }
                  >
                    Block
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

    cardTitle: {
      fontSize: 18,
      fontWeight: '900',
      color: '#111827',
    },

    owner: {
      marginTop: 6,
      color: '#6B7280',
      fontSize: 14,
    },

    city: {
      marginTop: 6,
      color: '#6B7280',
      fontSize: 14,
    },

    status: {
      marginTop: 10,
      fontWeight: '900',
      fontSize: 14,
    },

    row: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent:
        'space-between',
    },

    viewBtn: {
      width: '48%',
      backgroundColor:
        '#EAF2FF',
      paddingVertical: 14,
      borderRadius: 14,
      alignItems: 'center',
    },

    viewTxt: {
      color: '#1565FF',
      fontWeight: '900',
    },

    blockBtn: {
      width: '48%',
      backgroundColor:
        '#FEE2E2',
      paddingVertical: 14,
      borderRadius: 14,
      alignItems: 'center',
    },

    blockTxt: {
      color: '#EF4444',
      fontWeight: '900',
    },
  });