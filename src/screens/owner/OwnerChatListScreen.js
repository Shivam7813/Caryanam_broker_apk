// src/screens/owner/OwnerChatListScreen.js
// UPDATED PREMIUM VERSION
// Caryanam Broker - Owner Leads & Chats

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

export default function OwnerChatListScreen({
  navigation,
}) {
  const [chats] =
    useState([
      {
        id: 1,
        tenant:
          'Amit Sharma',
        property:
          '2 BHK Baner',
        msg:
          'Can we visit today?',
        time: '10:20 AM',
        unread: 3,
        lead: 'Hot Lead',
      },
      {
        id: 2,
        tenant:
          'Sneha Patil',
        property:
          '1 BHK Wakad',
        msg:
          'What is final rent?',
        time: 'Yesterday',
        unread: 1,
        lead: 'Interested',
      },
      {
        id: 3,
        tenant:
          'Rohan Jain',
        property:
          'PG Hinjewadi',
        msg:
          'Still available?',
        time: 'Mon',
        unread: 0,
        lead: 'New',
      },
    ]);

  const leadColor =
    type => {
      if (
        type ===
        'Hot Lead'
      )
        return '#16A34A';

      if (
        type ===
        'Interested'
      )
        return '#F59E0B';

      return '#1565FF';
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
          Tenant Leads
        </Text>

        <View
          style={{ width: 24 }}
        />
      </View>

      {/* BODY */}
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <View
          style={{
            paddingHorizontal: 18,
          }}
        >
          {chats.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate(
                  'ChatScreen',
                  {
                    chat: {
                      name:
                        item.tenant,
                      property:
                        item.property,
                    },
                  }
                )
              }
            >
              {/* AVATAR */}
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
                  {item.tenant
                    .charAt(0)
                    .toUpperCase()}
                </Text>
              </View>

              {/* CENTER */}
              <View
                style={{
                  flex: 1,
                  marginLeft: 14,
                }}
              >
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
                    {
                      item.tenant
                    }
                  </Text>

                  <Text
                    style={[
                      styles.lead,
                      {
                        color:
                          leadColor(
                            item.lead
                          ),
                      },
                    ]}
                  >
                    {
                      item.lead
                    }
                  </Text>
                </View>

                <Text
                  style={
                    styles.property
                  }
                >
                  {
                    item.property
                  }
                </Text>

                <Text
                  numberOfLines={
                    1
                  }
                  style={
                    styles.msg
                  }
                >
                  {item.msg}
                </Text>
              </View>

              {/* RIGHT */}
              <View
                style={{
                  alignItems:
                    'flex-end',
                }}
              >
                <Text
                  style={
                    styles.time
                  }
                >
                  {item.time}
                </Text>

                {item.unread >
                  0 && (
                  <View
                    style={
                      styles.badge
                    }
                  >
                    <Text
                      style={
                        styles.badgeTxt
                      }
                    >
                      {
                        item.unread
                      }
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
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

    card: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 20,
      padding: 14,
      marginBottom: 12,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
      flexDirection: 'row',
      alignItems:
        'center',
    },

    avatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor:
        '#1565FF',
      justifyContent:
        'center',
      alignItems:
        'center',
    },

    avatarTxt: {
      color: '#fff',
      fontWeight: '900',
      fontSize: 20,
    },

    row: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems:
        'center',
    },

    name: {
      fontSize: 16,
      fontWeight: '900',
      color: '#0F172A',
      flex: 1,
    },

    lead: {
      fontSize: 11,
      fontWeight: '900',
      marginLeft: 8,
    },

    property: {
      marginTop: 4,
      color: '#1565FF',
      fontSize: 13,
      fontWeight: '700',
    },

    msg: {
      marginTop: 6,
      color: '#64748B',
      fontSize: 13,
    },

    time: {
      color: '#64748B',
      fontSize: 12,
    },

    badge: {
      marginTop: 10,
      minWidth: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor:
        '#1565FF',
      justifyContent:
        'center',
      alignItems:
        'center',
      paddingHorizontal: 6,
    },

    badgeTxt: {
      color: '#fff',
      fontSize: 11,
      fontWeight: '900',
    },
  });