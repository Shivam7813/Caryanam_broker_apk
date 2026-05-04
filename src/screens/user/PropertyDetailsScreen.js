// src/screens/user/PropertyDetailsScreen.js
// FULL UPDATED FILE
// API READY + Premium UI + Safe Area Fixed

import React, {
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Linking,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import api from '../../api/axiosConfig';

export default function PropertyDetailsScreen({
  navigation,
  route,
}) {
  const propertyId =
    route?.params?.propertyId;

  const [loading,
    setLoading] =
    useState(true);

  const [property,
    setProperty] =
    useState(null);

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty =
    async () => {
      try {
        setLoading(true);

        const res =
          await api.get(
            `/api/properties/${propertyId}`
          );

        setProperty(
          res.data
        );
      } catch (error) {
        Alert.alert(
          'Error',
          'Unable to load property details.'
        );
      } finally {
        setLoading(false);
      }
    };

  const callOwner =
    () => {
      const phone =
        property?.ownerMobile ||
        property?.mobileNumber;

      if (phone) {
        Linking.openURL(
          `tel:${phone}`
        );
      } else {
        Alert.alert(
          'Unavailable',
          'Owner number not available.'
        );
      }
    };

  if (loading) {
    return (
      <SafeAreaView
        style={
          styles.loaderWrap
        }
      >
        <ActivityIndicator
          size="large"
          color="#4338CA"
        />
      </SafeAreaView>
    );
  }

  if (!property) {
    return (
      <SafeAreaView
        style={
          styles.loaderWrap
        }
      >
        <Text>
          Property not found
        </Text>
      </SafeAreaView>
    );
  }

  const ownerName =
    property?.ownerName ||
    'Verified Owner';

  const ownerInitial =
    ownerName
      ?.charAt(0)
      ?.toUpperCase();

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

        <Text
          style={styles.headTxt}
        >
          Property Details
        </Text>

        <TouchableOpacity>
          <Text style={styles.save}>
            ♡
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 130,
        }}
      >
        {/* IMAGE */}
        <View style={styles.imageBox}>
          <Text
            style={styles.imageTxt}
          >
            Home Image
          </Text>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          <Text
            style={styles.title}
          >
            {property?.title ||
              'Property'}
          </Text>

          <Text
            style={styles.price}
          >
            ₹
            {property?.price ||
              '0'}{' '}
            / month
          </Text>

          <Text
            style={
              styles.location
            }
          >
            {property?.location ||
              property?.city}
          </Text>

          {/* TAGS */}
          <View style={styles.tagRow}>
            <Text style={styles.tag}>
              {property?.bhk ||
                'Home'}
            </Text>

            <Text style={styles.tag}>
              Verified
            </Text>

            <Text style={styles.tag}>
              Ready To Move
            </Text>
          </View>

          {/* ABOUT */}
          <Text
            style={
              styles.section
            }
          >
            About Home
          </Text>

          <Text style={styles.desc}>
            {property?.description ||
              'Spacious home with modern interior, peaceful locality and ideal for family living.'}
          </Text>

          {/* AMENITIES */}
          <Text
            style={
              styles.section
            }
          >
            Amenities
          </Text>

          <View style={styles.box}>
            <Text
              style={
                styles.feature
              }
            >
              • Parking Available
            </Text>

            <Text
              style={
                styles.feature
              }
            >
              • Security
            </Text>

            <Text
              style={
                styles.feature
              }
            >
              • Lift Facility
            </Text>

            <Text
              style={
                styles.feature
              }
            >
              • Water Supply
            </Text>

            <Text
              style={
                styles.feature
              }
            >
              • Family Friendly
            </Text>
          </View>

          {/* OWNER */}
          <Text
            style={
              styles.section
            }
          >
            Owner Details
          </Text>

          <View
            style={
              styles.ownerCard
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
                {
                  ownerInitial
                }
              </Text>
            </View>

            <View
              style={{
                marginLeft: 14,
                flex: 1,
              }}
            >
              <Text
                style={
                  styles.ownerName
                }
              >
                {ownerName}
              </Text>

              <Text
                style={
                  styles.ownerSub
                }
              >
                Trusted Owner
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM BAR */}
      <View
        style={
          styles.bottomBar
        }
      >
        <TouchableOpacity
          style={
            styles.chatBtn
          }
          onPress={() =>
            navigation.navigate(
              'ChatScreen',
              {
                propertyId:
                  propertyId,
              }
            )
          }
        >
          <Text
            style={
              styles.chatTxt
            }
          >
            Chat
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            styles.callBtn
          }
          onPress={
            callOwner
          }
        >
          <Text
            style={
              styles.callTxt
            }
          >
            Contact Owner
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
        '#F8FAFC',
    },

    loaderWrap: {
      flex: 1,
      justifyContent:
        'center',
      alignItems:
        'center',
      backgroundColor:
        '#F8FAFC',
    },

    header: {
      paddingHorizontal: 18,
      paddingVertical: 14,
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'center',
    },

    back: {
      fontSize: 26,
      fontWeight: '900',
      color: '#0F172A',
    },

    headTxt: {
      fontSize: 20,
      fontWeight: '900',
      color: '#0F172A',
    },

    save: {
      fontSize: 24,
      color: '#4338CA',
    },

    imageBox: {
      height: 250,
      marginHorizontal: 18,
      borderRadius: 24,
      backgroundColor:
        '#EEF2FF',
      justifyContent:
        'center',
      alignItems:
        'center',
    },

    imageTxt: {
      color: '#4338CA',
      fontWeight: '900',
      fontSize: 16,
    },

    content: {
      paddingHorizontal: 18,
      paddingTop: 20,
    },

    title: {
      fontSize: 26,
      fontWeight: '900',
      color: '#0F172A',
    },

    price: {
      marginTop: 8,
      fontSize: 22,
      fontWeight: '900',
      color: '#4338CA',
    },

    location: {
      marginTop: 8,
      color: '#64748B',
      fontSize: 15,
    },

    tagRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16,
    },

    tag: {
      backgroundColor:
        '#EEF2FF',
      color: '#4338CA',
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 20,
      marginRight: 10,
      marginBottom: 10,
      fontWeight: '800',
      fontSize: 12,
      overflow: 'hidden',
    },

    section: {
      marginTop: 24,
      marginBottom: 12,
      fontSize: 20,
      fontWeight: '900',
      color: '#0F172A',
    },

    desc: {
      color: '#64748B',
      lineHeight: 24,
      fontSize: 15,
    },

    box: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 18,
      padding: 18,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
    },

    feature: {
      color: '#0F172A',
      marginBottom: 10,
      fontSize: 15,
    },

    ownerCard: {
      backgroundColor:
        '#FFFFFF',
      borderRadius: 18,
      padding: 18,
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
      flexDirection: 'row',
      alignItems: 'center',
    },

    avatar: {
      width: 54,
      height: 54,
      borderRadius: 27,
      backgroundColor:
        '#4338CA',
      justifyContent:
        'center',
      alignItems:
        'center',
    },

    avatarTxt: {
      color: '#fff',
      fontWeight: '900',
      fontSize: 18,
    },

    ownerName: {
      fontSize: 17,
      fontWeight: '900',
      color: '#0F172A',
    },

    ownerSub: {
      marginTop: 4,
      color: '#64748B',
      fontSize: 13,
    },

    bottomBar: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: 14,
      backgroundColor:
        '#FFFFFF',
      borderRadius: 20,
      padding: 12,
      flexDirection: 'row',
      justifyContent:
        'space-between',
      borderWidth: 1,
      borderColor:
        '#EEF2F7',
      elevation: 8,
    },

    chatBtn: {
      width: '32%',
      backgroundColor:
        '#EEF2FF',
      borderRadius: 14,
      paddingVertical: 14,
      alignItems: 'center',
    },

    chatTxt: {
      color: '#4338CA',
      fontWeight: '900',
    },

    callBtn: {
      width: '64%',
      backgroundColor:
        '#4338CA',
      borderRadius: 14,
      paddingVertical: 14,
      alignItems: 'center',
    },

    callTxt: {
      color: '#fff',
      fontWeight: '900',
    },
  });