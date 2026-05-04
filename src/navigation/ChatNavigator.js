// src/navigation/ChatNavigator.js
// FULL UPDATED FILE
// Caryanam Broker Chat Navigation

import React from 'react';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

/* CHAT SCREENS */
import ChatListScreen from '../screens/user/ChatListScreen';
import ChatScreen from '../screens/user/ChatScreen';

const Stack =
  createNativeStackNavigator();

export default function ChatNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ChatList"
      screenOptions={{
        headerShown: false,
        animation:
          'slide_from_right',
        gestureEnabled:
          true,
      }}
    >
      {/* CHAT LIST */}
      <Stack.Screen
        name="ChatList"
        component={
          ChatListScreen
        }
      />

      {/* CHAT ROOM */}
      <Stack.Screen
        name="ChatScreen"
        component={
          ChatScreen
        }
      />
    </Stack.Navigator>
  );
}