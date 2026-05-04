// src/navigation/UserNavigator.js
// FULL UPDATED FILE
// Clean User Stack Navigator
// Uses Bottom Tabs + Shared Screens

import React from 'react';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';

/* USER SHARED SCREENS */
import PropertyDetailsScreen from '../screens/user/PropertyDetailsScreen';
import PremiumScreen from '../screens/user/PremiumScreen';
import ChatScreen from '../screens/user/ChatScreen';

const Stack =
  createNativeStackNavigator();

export default function UserNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="UserTabs"
      screenOptions={{
        headerShown: false,
        animation:
          'slide_from_right',
        gestureEnabled:
          true,
        contentStyle: {
          backgroundColor:
            '#F8FAFC',
        },
      }}
    >
      {/* MAIN USER TABS */}
      <Stack.Screen
        name="UserTabs"
        component={
          BottomTabs
        }
      />

      {/* PROPERTY DETAILS */}
      <Stack.Screen
        name="PropertyDetails"
        component={
          PropertyDetailsScreen
        }
      />

      {/* PREMIUM */}
      <Stack.Screen
        name="Premium"
        component={
          PremiumScreen
        }
      />

      {/* CHAT */}
      <Stack.Screen
        name="ChatScreen"
        component={
          ChatScreen
        }
      />
    </Stack.Navigator>
  );
}