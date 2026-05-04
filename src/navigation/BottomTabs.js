// src/navigation/BottomTabs.js
// FINAL CLEAN VERSION (OWNER + USER PERFECT SWITCH)

import React, { useContext } from 'react';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  View,
  Text,
  Platform,
} from 'react-native';

import {
  AuthContext,
} from '../context/AuthContext';

/* USER SCREENS */
import HomeScreen from '../screens/user/HomeScreen';
import PropertyListScreen from '../screens/user/PropertyListScreen';
import FavoritesScreen from '../screens/user/FavoritesScreen';
import ChatListScreen from '../screens/user/ChatListScreen';
import ProfileScreen from '../screens/user/ProfileScreen';

/* OWNER SCREENS */
import OwnerHomeScreen from '../screens/owner/OwnerHomeScreen';
import AddPropertyScreen from '../screens/owner/AddPropertyScreen';
import MyListingsScreen from '../screens/owner/MyListingsScreen';
import LeadsScreen from '../screens/owner/LeadsScreen';
import OwnerChatListScreen from '../screens/owner/OwnerChatListScreen';
import OwnerProfileScreen from '../screens/owner/OwnerProfileScreen';

const Tab = createBottomTabNavigator();

/* 🔥 TAB ICON */
function TabIcon({ label, focused }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 6 }}>
      
      {focused && (
        <View
          style={{
            width: 6,
            height: 6,
            borderRadius: 10,
            backgroundColor: '#4338CA',
            marginBottom: 5,
          }}
        />
      )}

      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: focused ? '#4338CA' : '#CBD5E1',
        }}
      />

      <Text
        style={{
          marginTop: 4,
          fontSize: 10,
          fontWeight: '700',
          color: focused ? '#4338CA' : '#94A3B8',
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default function BottomTabs() {
  const { userRole } = useContext(AuthContext);

  /* 🔥 SAFE ROLE CHECK */
  const isOwner =
    String(userRole || '')
      .toUpperCase()
      .includes('OWNER');

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          position: 'absolute',
          left: 12,
          right: 12,
          bottom: 12,
          height: Platform.OS === 'ios' ? 82 : 72,
          borderRadius: 24,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          paddingTop: 6,
          paddingBottom: Platform.OS === 'ios' ? 18 : 10,
          elevation: 14,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 5 },
        },
      }}
    >

      {/* 🏠 HOME / DASHBOARD */}
      <Tab.Screen
        name="HomeTab"
        component={isOwner ? OwnerHomeScreen : HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label={isOwner ? 'DASH' : 'HOME'} focused={focused} />
          ),
        }}
      />

      {/* ➕ ADD / RENT */}
      <Tab.Screen
        name="ActionTab"
        component={isOwner ? AddPropertyScreen : PropertyListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label={isOwner ? 'ADD' : 'RENT'} focused={focused} />
          ),
        }}
      />

      {/* 📋 LIST / SAVED */}
      <Tab.Screen
        name="ListTab"
        component={isOwner ? MyListingsScreen : FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label={isOwner ? 'LIST' : 'SAVED'} focused={focused} />
          ),
        }}
      />

      {/* 💬 LEADS / CHAT */}
      <Tab.Screen
        name="ChatTab"
        component={isOwner ? OwnerChatListScreen : ChatListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label={isOwner ? 'LEADS' : 'CHAT'} focused={focused} />
          ),
        }}
      />

      {/* 👤 PROFILE */}
      <Tab.Screen
        name="ProfileTab"
        component={isOwner ? OwnerProfileScreen : ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon label="PROFILE" focused={focused} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}