// src/navigation/AdminStackNavigator.js
// FULL UPDATED FILE
// Exact Match With Your Admin Folder

import React from 'react';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

/* ADMIN SCREENS */
import AdminDashboardScreen from '../screens/admin/AdminDashboardScreen';
import UsersManagementScreen from '../screens/admin/UsersManagementScreen';
import OwnersApprovalScreen from '../screens/admin/OwnersApprovalScreen';
import PropertiesApprovalScreen from '../screens/admin/PropertiesApprovalScreen';
import PremiumRequestsScreen from '../screens/admin/PremiumRequestsScreen';
import ReportsAnalyticsScreen from '../screens/admin/ReportsAnalyticsScreen';
import SettingsScreen from '../screens/admin/SettingsScreen';

/* OPTIONAL EXTRA */
import AnalyticsScreen from '../screens/admin/AnalyticsScreen';
import AdminProfileScreen from '../screens/admin/ProfileScreen';

/* SHARED */
import PropertyDetailsScreen from '../screens/user/PropertyDetailsScreen';
import ChatScreen from '../screens/user/ChatScreen';

const Stack =
  createNativeStackNavigator();

export default function AdminStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="AdminDashboard"
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
      {/* DASHBOARD */}
      <Stack.Screen
        name="AdminDashboard"
        component={
          AdminDashboardScreen
        }
      />

      {/* USER MANAGEMENT */}
      <Stack.Screen
        name="UsersManagement"
        component={
          UsersManagementScreen
        }
      />

      {/* OWNER APPROVAL */}
      <Stack.Screen
        name="OwnersApproval"
        component={
          OwnersApprovalScreen
        }
      />

      {/* PROPERTY APPROVAL */}
      <Stack.Screen
        name="PropertiesApproval"
        component={
          PropertiesApprovalScreen
        }
      />

      {/* PREMIUM REQUESTS */}
      <Stack.Screen
        name="PremiumRequests"
        component={
          PremiumRequestsScreen
        }
      />

      {/* REPORTS */}
      <Stack.Screen
        name="ReportsAnalytics"
        component={
          ReportsAnalyticsScreen
        }
      />

      {/* SETTINGS */}
      <Stack.Screen
        name="Settings"
        component={
          SettingsScreen
        }
      />

      {/* OPTIONAL EXTRA */}
      <Stack.Screen
        name="Analytics"
        component={
          AnalyticsScreen
        }
      />

      <Stack.Screen
        name="Profile"
        component={AdminProfileScreen}
      />

      {/* SHARED */}
      <Stack.Screen
        name="PropertyDetails"
        component={
          PropertyDetailsScreen
        }
      />

      <Stack.Screen
        name="ChatScreen"
        component={
          ChatScreen
        }
      />
    </Stack.Navigator>
  );
}