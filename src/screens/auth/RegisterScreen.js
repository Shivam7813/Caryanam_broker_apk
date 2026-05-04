// src/screens/auth/RegisterScreen.js
// FULL UPDATED FILE
// Backend Validation Ready + Premium UI + Keyboard Fixed

import React, {
  useState,
  useContext,
} from 'react';

import {
  StatusBar,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import {
  AuthContext,
} from '../../context/AuthContext';

export default function RegisterScreen({
  navigation,
}) {
  const { register } =
    useContext(AuthContext);

  const [role, setRole] =
    useState('USER');

  const [fullName,
    setFullName] =
    useState('');

  const [mobile,
    setMobile] =
    useState('');

  const [email,
    setEmail] =
    useState('');

  const [password,
    setPassword] =
    useState('');

  const [loading,
    setLoading] =
    useState(false);

  const [showPassword,
    setShowPassword] =
    useState(false);

  const roles = [
    {
      label: 'User',
      value: 'USER',
    },
    {
      label: 'Owner',
      value:
        'PROPERTY_OWNER',
    },
    // {
    //   label: 'Admin',
    //   value:
    //     'ADMIN',
    // },
  ];

  const validateEmail =
    value => {
      return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(
        value
      );
    };

  const validateName =
    value => {
      return /^[A-Za-z ]+$/.test(
        value
      );
    };

  const handleRegister =
    async () => {
      const name =
        fullName.trim();

      const phone =
        mobile.trim();

      const mail =
        email
          .trim()
          .toLowerCase();

      if (
        !name ||
        !phone ||
        !mail ||
        !password.trim()
      ) {
        Alert.alert(
          'Required',
          'Please fill all fields.'
        );
        return;
      }

      if (
        !validateName(
          name
        )
      ) {
        Alert.alert(
          'Invalid Name',
          'Only letters and spaces allowed.'
        );
        return;
      }

      if (
        phone.length !==
          10 ||
        !/^\d+$/.test(
          phone
        )
      ) {
        Alert.alert(
          'Invalid Mobile',
          'Enter valid 10 digit mobile number.'
        );
        return;
      }

      if (
        !validateEmail(
          mail
        )
      ) {
        Alert.alert(
          'Invalid Email',
          'Only Gmail addresses allowed.'
        );
        return;
      }

      if (
        password.length <
        6
      ) {
        Alert.alert(
          'Weak Password',
          'Password must be minimum 6 characters.'
        );
        return;
      }

      try {
        setLoading(true);

        const response =
          await register({
            role,
            fullName:
              name,
            mobile:
              phone,
            email:
              mail,
            password,
          });

        if (
          response?.success
        ) {
          Alert.alert(
            'Success',
            response?.message ||
              'Registration successful.',
            [
              {
                text: 'Login',
                onPress:
                  () =>
                    navigation.navigate(
                      'Login'
                    ),
              },
            ]
          );
        } else {
          Alert.alert(
            'Failed',
            response?.message ||
              'Registration failed.'
          );
        }
      } catch (error) {
        Alert.alert(
          'Failed',
          'Something went wrong.'
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <SafeAreaView
      style={styles.container}
      edges={[
        'top',
        'left',
        'right',
      ]}
    >
      <StatusBar
        backgroundColor="#F8FAFC"
        barStyle="dark-content"
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : 'height'
        }
      >
        <ScrollView
          showsVerticalScrollIndicator={
            false
          }
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={
            styles.scroll
          }
        >
          {/* TOP */}
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
              Create Account
            </Text>

            <Text style={styles.sub}>
              Join trusted home rental
              marketplace today.
            </Text>
          </View>

          {/* CARD */}
          <View style={styles.card}>
            <Text style={styles.label}>
              Select Role
            </Text>

            <View style={styles.roleRow}>
              {roles.map(
                item => (
                  <TouchableOpacity
                    key={
                      item.value
                    }
                    style={[
                      styles.roleBtn,
                      role ===
                        item.value &&
                        styles.roleActive,
                    ]}
                    onPress={() =>
                      setRole(
                        item.value
                      )
                    }
                  >
                    <Text
                      style={[
                        styles.roleTxt,
                        role ===
                          item.value &&
                          styles.roleTxtActive,
                      ]}
                    >
                      {
                        item.label
                      }
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>

            <Text style={styles.label}>
              Full Name
            </Text>

            <TextInput
              placeholder="Enter full name"
              placeholderTextColor="#94A3B8"
              value={fullName}
              onChangeText={
                setFullName
              }
              style={styles.input}
            />

            <Text style={styles.label}>
              Mobile Number
            </Text>

            <TextInput
              placeholder="Enter mobile number"
              placeholderTextColor="#94A3B8"
              keyboardType="number-pad"
              maxLength={10}
              value={mobile}
              onChangeText={
                setMobile
              }
              style={styles.input}
            />

            <Text style={styles.label}>
              Gmail Address
            </Text>

            <TextInput
              placeholder="Enter gmail"
              placeholderTextColor="#94A3B8"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={
                setEmail
              }
              style={styles.input}
            />

            <Text style={styles.label}>
              Password
            </Text>

            <View
              style={
                styles.passWrap
              }
            >
              <TextInput
                placeholder="Create password"
                placeholderTextColor="#94A3B8"
                secureTextEntry={
                  !showPassword
                }
                value={password}
                onChangeText={
                  setPassword
                }
                style={
                  styles.passInput
                }
              />

              <TouchableOpacity
                onPress={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                <Text
                  style={
                    styles.showTxt
                  }
                >
                  {showPassword
                    ? 'Hide'
                    : 'Show'}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={
                handleRegister
              }
              disabled={
                loading
              }
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.btnTxt}>
                  Register
                </Text>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                'Login'
              )
            }
          >
            <Text style={styles.bottomTxt}>
              Already have account?{' '}
              <Text style={styles.link}>
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        '#F8FAFC',
    },

    scroll: {
      flexGrow: 1,
      paddingHorizontal: 22,
      paddingTop: 14,
      paddingBottom: 30,
    },

    top: {
      alignItems: 'center',
      marginBottom: 24,
    },

    logo: {
      width: 88,
      height: 88,
      borderRadius: 44,
      backgroundColor:
        '#4338CA',
      justifyContent:
        'center',
      alignItems:
        'center',
    },

    logoTxt: {
      color: '#fff',
      fontSize: 28,
      fontWeight: '900',
    },

    brand: {
      marginTop: 14,
      fontSize: 25,
      fontWeight: '900',
      color: '#0F172A',
    },

    heading: {
      marginTop: 10,
      fontSize: 28,
      fontWeight: '900',
      color: '#0F172A',
    },

    sub: {
      marginTop: 10,
      color: '#64748B',
      textAlign: 'center',
      fontSize: 14,
      lineHeight: 22,
    },

    card: {
      backgroundColor:
        '#fff',
      borderRadius: 28,
      padding: 22,
      borderWidth: 1,
      borderColor:
        '#EEF2FF',
    },

    label: {
      fontSize: 14,
      fontWeight: '800',
      color: '#0F172A',
      marginTop: 12,
      marginBottom: 8,
    },

    roleRow: {
      flexDirection: 'row',
      gap: 8,
    },

    roleBtn: {
      flex: 1,
      paddingVertical: 13,
      borderRadius: 14,
      backgroundColor:
        '#EEF2FF',
      alignItems: 'center',
    },

    roleActive: {
      backgroundColor:
        '#4338CA',
    },

    roleTxt: {
      color: '#334155',
      fontWeight: '800',
    },

    roleTxtActive: {
      color: '#fff',
    },

    input: {
      backgroundColor:
        '#F8FAFC',
      borderRadius: 16,
      borderWidth: 1,
      borderColor:
        '#E2E8F0',
      paddingHorizontal: 14,
      paddingVertical: 15,
      color: '#111827',
    },

    passWrap: {
      flexDirection: 'row',
      alignItems:
        'center',
      backgroundColor:
        '#F8FAFC',
      borderRadius: 16,
      borderWidth: 1,
      borderColor:
        '#E2E8F0',
      paddingHorizontal: 14,
    },

    passInput: {
      flex: 1,
      paddingVertical: 15,
      color: '#111827',
    },

    showTxt: {
      color: '#4338CA',
      fontWeight: '800',
    },

    btn: {
      backgroundColor:
        '#4338CA',
      paddingVertical: 16,
      borderRadius: 16,
      marginTop: 26,
    },

    btnTxt: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '900',
      fontSize: 16,
    },

    bottomTxt: {
      textAlign: 'center',
      marginTop: 26,
      color: '#64748B',
      fontSize: 14,
    },

    link: {
      color: '#4338CA',
      fontWeight: '900',
    },
  });