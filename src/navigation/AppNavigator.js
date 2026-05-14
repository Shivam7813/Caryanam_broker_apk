// src/navigation/AppNavigator.js
// FULL UPDATED FILE
// Clean + Folder Matched + Safe Auth Flow
// Fixed Duplicate User Routes

import React, {
  useContext,
} from 'react';

import {
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {
  AuthContext,
} from '../context/AuthContext';

/* AUTH */
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import VerifyOtpScreen from '../screens/auth/VerifyOtpScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';

/* COMMON */
import LandingScreen from '../components/common/LandingScreen';

/* ROLE BASED */
import RoleBasedNavigator from './RoleBasedNavigator';

const Stack =
  createNativeStackNavigator();

/* PREMIUM THEME */

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary:
      '#4338CA',
    background:
      '#F8FAFC',
    card:
      '#FFFFFF',
    text:
      '#0F172A',
    border:
      '#E2E8F0',
    notification:
      '#4338CA',
  },
};

export default function AppNavigator() {
  const {
    userToken,
    userRole,
    loading,
  } = useContext(
    AuthContext
  );

  /* ================= LOADING ================= */

  if (loading) {
    return <SplashScreen />;
  }

  const safeRole =
    userRole ||
    'USER';

  return (
    <NavigationContainer
      theme={AppTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation:
            'slide_from_right',
          contentStyle: {
            backgroundColor:
              '#F8FAFC',
          },
        }}
      >
        {/* ================= PUBLIC FLOW ================= */}

        {!userToken ? (
          <>
            <Stack.Screen
              name="Landing"
              component={
                LandingScreen
              }
            />

            <Stack.Screen
              name="Login"
              component={
                LoginScreen
              }
            />

            <Stack.Screen
              name="Register"
              component={
                RegisterScreen
              }
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />

            <Stack.Screen
              name="VerifyOtp"
              component={VerifyOtpScreen}
            />

            <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordScreen}
            />
          </>
        ) : (
          <>
            {/* ================= MAIN APP ================= */}

            <Stack.Screen
              name="MainApp"
              options={{
                gestureEnabled:
                  false,
              }}
            >
              {() => (
                <RoleBasedNavigator
                  role={
                    safeRole
                  }
                />
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}