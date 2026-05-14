// src/screens/auth/ResetPasswordScreen.js

import React, {
  useState,
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import {
  AuthContext,
} from '../../context/AuthContext';

export default function ResetPasswordScreen({
  navigation,
  route,
}) {

  const { resetPassword } =
    useContext(AuthContext);

  const email =
    route?.params?.email || '';

  const [newPassword,
    setNewPassword] =
    useState('');

  const [confirmPassword,
    setConfirmPassword] =
    useState('');

  const [showNewPassword,
    setShowNewPassword] =
    useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] =
    useState(false);

  const [loading,
    setLoading] =
    useState(false);

  const validatePassword =
    value => {
      return value.length >= 6;
    };

  const handleResetPassword =
    async () => {

      const newPass =
        newPassword.trim();

      const confirmPass =
        confirmPassword.trim();

      if (
        !newPass ||
        !confirmPass
      ) {

        Alert.alert(
          'Required',
          'Please fill all fields.'
        );

        return;
      }

      if (
        !validatePassword(
          newPass
        )
      ) {

        Alert.alert(
          'Weak Password',
          'Password must be minimum 6 characters.'
        );

        return;
      }

      if (
        newPass !==
        confirmPass
      ) {

        Alert.alert(
          'Mismatch',
          'Passwords do not match.'
        );

        return;
      }

      try {

        setLoading(true);

        const response =
          await resetPassword({
            email,
            newPassword:
              newPass,
            confirmPassword:
              confirmPass,
          });

        if (
          response.success
        ) {

          Alert.alert(
            'Success',
            response.message,
            [
              {
                text: 'Login',
                onPress:
                  () =>
                    navigation.reset({
                      index: 0,
                      routes: [
                        {
                          name:
                            'Login',
                        },
                      ],
                    }),
              },
            ]
          );

        } else {

          Alert.alert(
            'Failed',
            response.message
          );
        }

      } catch (error) {

        Alert.alert(
          'Error',
          'Something went wrong.'
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <SafeAreaView
      style={
        styles.container
      }
    >
      <StatusBar
        backgroundColor="#F8FAFC"
        barStyle="dark-content"
      />

      <View style={styles.top}>
        <View style={styles.logo}>
          <Text style={styles.logoTxt}>
            CB
          </Text>
        </View>

        <Text style={styles.brand}>
          Caryanam Broker
        </Text>

        <Text style={styles.heading}>
          Reset Password
        </Text>

        <Text style={styles.sub}>
          Create your new secure password
        </Text>
      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          New Password
        </Text>

        <View
          style={
            styles.passWrap
          }
        >
          <TextInput
            placeholder="Enter new password"
            placeholderTextColor="#94A3B8"
            secureTextEntry={
              !showNewPassword
            }
            value={newPassword}
            onChangeText={
              setNewPassword
            }
            style={
              styles.passInput
            }
          />

          <TouchableOpacity
            onPress={() =>
              setShowNewPassword(
                !showNewPassword
              )
            }
          >
            <Text
              style={
                styles.showTxt
              }
            >
              {showNewPassword
                ? 'Hide'
                : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>
          Confirm Password
        </Text>

        <View
          style={
            styles.passWrap
          }
        >
          <TextInput
            placeholder="Confirm password"
            placeholderTextColor="#94A3B8"
            secureTextEntry={
              !showConfirmPassword
            }
            value={
              confirmPassword
            }
            onChangeText={
              setConfirmPassword
            }
            style={
              styles.passInput
            }
          />

          <TouchableOpacity
            onPress={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
          >
            <Text
              style={
                styles.showTxt
              }
            >
              {showConfirmPassword
                ? 'Hide'
                : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={
            handleResetPassword
          }
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.btnTxt}>
              Reset Password
            </Text>
          )}
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles =
  StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:
        '#F8FAFC',
      paddingHorizontal: 20,
    },

    top: {
      alignItems: 'center',
      marginTop: 40,
      marginBottom: 30,
    },

    logo: {
      width: 80,
      height: 80,
      borderRadius: 24,
      backgroundColor:
        '#4338CA',
      justifyContent:
        'center',
      alignItems: 'center',
      marginBottom: 16,
    },

    logoTxt: {
      color: '#fff',
      fontSize: 30,
      fontWeight: '800',
    },

    brand: {
      fontSize: 18,
      fontWeight: '700',
      color: '#0F172A',
      marginBottom: 6,
    },

    heading: {
      fontSize: 28,
      fontWeight: '800',
      color: '#0F172A',
      marginBottom: 8,
    },

    sub: {
      fontSize: 14,
      color: '#64748B',
      textAlign: 'center',
    },

    card: {
      backgroundColor:
        '#fff',
      borderRadius: 24,
      padding: 20,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 3,
    },

    label: {
      fontSize: 14,
      fontWeight: '700',
      color: '#334155',
      marginBottom: 8,
      marginTop: 14,
    },

    passWrap: {
      height: 58,
      borderWidth: 1,
      borderColor: '#CBD5E1',
      borderRadius: 16,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:
        'space-between',
      backgroundColor:
        '#fff',
    },

    passInput: {
      flex: 1,
      color: '#0F172A',
      fontSize: 15,
    },

    showTxt: {
      color: '#4338CA',
      fontWeight: '700',
    },

    btn: {
      height: 58,
      backgroundColor:
        '#4338CA',
      borderRadius: 16,
      justifyContent:
        'center',
      alignItems: 'center',
      marginTop: 28,
    },

    btnTxt: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '700',
    },
  });