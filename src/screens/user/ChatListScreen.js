// src/screens/user/ChatListScreen.js
// UPDATED PREMIUM VERSION
// Caryanam Broker - Rental Chats

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ChatListScreen({
  navigation,
}) {
  const chats = [
    {
      id: 1,
      name: 'Rajesh Patil',
      property: '2 BHK Baner',
      msg: 'Is this rental still available?',
      time: '10:45 AM',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'Amit Sharma',
      property: '1 BHK Wakad',
      msg: 'Can I visit tomorrow?',
      time: 'Yesterday',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Priya Desai',
      property: 'PG Hinjewadi',
      msg: 'Please share exact location',
      time: 'Mon',
      unread: 1,
      online: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#F8FAFF"
        barStyle="dark-content"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.small}>
            Caryanam Broker
          </Text>

          <Text style={styles.title}>
            Messages
          </Text>
        </View>

        <View style={styles.countBox}>
          <Text
            style={
              styles.countTxt
            }
          >
            {chats.length}
          </Text>
        </View>
      </View>

      {/* CHAT LIST */}
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
          {chats.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate(
                  'ChatScreen',
                  { chat: item }
                )
              }
            >
              {/* AVATAR */}
              <View
                style={
                  styles.avatarWrap
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
                      .substring(
                        0,
                        1
                      )
                      .toUpperCase()}
                  </Text>
                </View>

                {item.online && (
                  <View
                    style={
                      styles.online
                    }
                  />
                )}
              </View>

              {/* CENTER */}
              <View
                style={{
                  flex: 1,
                  marginLeft: 14,
                }}
              >
                <Text
                  style={
                    styles.name
                  }
                >
                  {item.name}
                </Text>

                <Text
                  style={
                    styles.property
                  }
                >
                  {item.property}
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
      paddingTop: 16,
      paddingHorizontal: 18,
      paddingBottom: 14,
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'center',
    },

    small: {
      fontSize: 13,
      color: '#64748B',
    },

    title: {
      marginTop: 4,
      fontSize: 24,
      fontWeight: '900',
      color: '#0F172A',
    },

    countBox: {
      minWidth: 38,
      height: 38,
      borderRadius: 19,
      backgroundColor:
        '#EAF2FF',
      justifyContent:
        'center',
      alignItems:
        'center',
      paddingHorizontal: 8,
    },

    countTxt: {
      color: '#1565FF',
      fontWeight: '900',
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
      alignItems: 'center',
    },

    avatarWrap: {
      position:
        'relative',
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
      fontSize: 20,
      fontWeight: '900',
    },

    online: {
      position:
        'absolute',
      right: 2,
      bottom: 2,
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor:
        '#22C55E',
      borderWidth: 2,
      borderColor:
        '#FFFFFF',
    },

    name: {
      fontSize: 16,
      fontWeight: '900',
      color: '#0F172A',
    },

    property: {
      marginTop: 3,
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