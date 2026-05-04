// src/screens/user/ChatScreen.js
// UPDATED PREMIUM VERSION
// Caryanam Broker - Chat Screen

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

export default function ChatScreen({
  navigation,
  route,
}) {
  const chat =
    route?.params?.chat || {
      name: 'Rajesh Patil',
      property:
        '2 BHK Apartment',
    };

  const [message,
    setMessage] =
    useState('');

  const [messages,
    setMessages] =
    useState([
      {
        id: 1,
        type: 'owner',
        text:
          'Hello, this rental is available.',
        time: '10:30 AM',
      },
      {
        id: 2,
        type: 'me',
        text:
          'Can I visit tomorrow?',
        time: '10:32 AM',
      },
      {
        id: 3,
        type: 'owner',
        text:
          'Yes, after 11 AM works.',
        time: '10:35 AM',
      },
    ]);

  const sendMessage =
    () => {
      if (
        !message.trim()
      )
        return;

      setMessages([
        ...messages,
        {
          id:
            messages.length +
            1,
          type: 'me',
          text: message,
          time: 'Now',
        },
      ]);

      setMessage('');
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

        <View
          style={{
            flex: 1,
            marginLeft: 14,
          }}
        >
          <Text style={styles.name}>
            {chat.name}
          </Text>

          <Text
            style={styles.property}
          >
            {chat.property}
          </Text>
        </View>

        <View
          style={
            styles.onlineDot
          }
        />
      </View>

      {/* CHAT BODY */}
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          padding: 18,
          paddingBottom: 110,
        }}
      >
        {messages.map(item => (
          <View
            key={item.id}
            style={[
              styles.msgWrap,
              item.type ===
                'me'
                ? {
                    alignItems:
                      'flex-end',
                  }
                : {
                    alignItems:
                      'flex-start',
                  },
            ]}
          >
            <View
              style={[
                styles.msgBox,
                item.type ===
                  'me'
                  ? styles.myMsg
                  : styles.ownerMsg,
              ]}
            >
              <Text
                style={[
                  styles.msgTxt,
                  item.type ===
                    'me' && {
                      color:
                        '#fff',
                    },
                ]}
              >
                {item.text}
              </Text>

              <Text
                style={[
                  styles.time,
                  item.type ===
                    'me' && {
                      color:
                        '#DBEAFE',
                    },
                ]}
              >
                {item.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* INPUT */}
      <View style={styles.bottom}>
        <TextInput
          placeholder="Type message..."
          placeholderTextColor="#94A3B8"
          value={message}
          onChangeText={
            setMessage
          }
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.sendBtn}
          onPress={
            sendMessage
          }
        >
          <Text
            style={
              styles.sendTxt
            }
          >
            Send
          </Text>
        </TouchableOpacity>
      </View>
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
      paddingVertical: 14,
      backgroundColor:
        '#FFFFFF',
      borderBottomWidth: 1,
      borderBottomColor:
        '#EEF2F7',
      flexDirection: 'row',
      alignItems: 'center',
    },

    back: {
      fontSize: 26,
      color: '#0F172A',
      fontWeight: '900',
    },

    name: {
      fontSize: 17,
      fontWeight: '900',
      color: '#0F172A',
    },

    property: {
      marginTop: 4,
      fontSize: 13,
      color: '#64748B',
    },

    onlineDot: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor:
        '#22C55E',
    },

    msgWrap: {
      marginBottom: 12,
    },

    msgBox: {
      maxWidth: '78%',
      borderRadius: 18,
      paddingHorizontal: 14,
      paddingVertical: 12,
    },

    ownerMsg: {
      backgroundColor:
        '#FFFFFF',
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    myMsg: {
      backgroundColor:
        '#1565FF',
    },

    msgTxt: {
      color: '#0F172A',
      fontSize: 14,
      lineHeight: 20,
    },

    time: {
      marginTop: 6,
      fontSize: 11,
      color: '#94A3B8',
      textAlign: 'right',
    },

    bottom: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 12,
      backgroundColor:
        '#FFFFFF',
      borderRadius: 18,
      padding: 10,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
      flexDirection: 'row',
      alignItems: 'center',
    },

    input: {
      flex: 1,
      backgroundColor:
        '#F8FAFC',
      borderRadius: 14,
      paddingHorizontal: 14,
      paddingVertical: 12,
      color: '#111827',
      marginRight: 10,
    },

    sendBtn: {
      backgroundColor:
        '#1565FF',
      paddingHorizontal: 18,
      paddingVertical: 12,
      borderRadius: 14,
    },

    sendTxt: {
      color: '#fff',
      fontWeight: '900',
      fontSize: 14,
    },
  });