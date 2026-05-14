import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function OwnerHomeScreen() {

  const { userData, userRole } = useContext(AuthContext);

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'left', 'right']}
    >

      <StatusBar
        backgroundColor="#F8FAFC"
        barStyle="dark-content"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >

        {/* HEADER */}

        <View style={styles.header}>

          <View>

            <Text style={styles.brand}>
              Caryanam Broker
            </Text>

            <Text style={styles.welcome}>
              Welcome back, Owner 👋
            </Text>

            <Text style={styles.email}>
              {userData?.email || 'owner@gmail.com'}
            </Text>

          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileLetter}>
              {(userData?.email || 'O').charAt(0).toUpperCase()}
            </Text>
          </View>

        </View>

        {/* HERO CARD */}

        <View style={styles.heroCard}>

          <View style={styles.heroTop}>

            <View>

              <Text style={styles.heroMini}>
                DASHBOARD
              </Text>

              <Text style={styles.heroTitle}>
                Owner Panel
              </Text>

            </View>

            <View style={styles.roleBadge}>
              <Text style={styles.roleBadgeText}>
                {userRole || 'OWNER'}
              </Text>
            </View>

          </View>

          <Text style={styles.heroSub}>
            Manage your properties and rental activities
            with a professional and streamlined dashboard.
          </Text>

          <View style={styles.heroDivider} />

          <View style={styles.heroBottom}>

            <View style={styles.heroInfo}>
              <Text style={styles.heroInfoLabel}>
                Platform
              </Text>

              <Text style={styles.heroInfoValue}>
                Caryanam Broker
              </Text>
            </View>

            <View style={styles.heroInfo}>
              <Text style={styles.heroInfoLabel}>
                Access
              </Text>

              <Text style={styles.heroInfoValue}>
                Full Owner Access
              </Text>
            </View>

          </View>

        </View>

        {/* SECTION */}

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Dashboard Features
          </Text>

          <Text style={styles.sectionSub}>
            Everything you can manage from your account
          </Text>

        </View>

        {/* CARDS */}

        <View style={styles.card}>

          <View style={styles.cardAccent} />

          <View style={{ flex: 1 }}>

            <Text style={styles.cardTitle}>
              Property Management
            </Text>

            <Text style={styles.cardText}>
              Add, manage, and organize your rental property listings.
            </Text>

          </View>

        </View>

        <View style={styles.card}>

          <View style={styles.cardAccent} />

          <View style={{ flex: 1 }}>

            <Text style={styles.cardTitle}>
              Tenant Communication
            </Text>

            <Text style={styles.cardText}>
              Connect and communicate with tenants directly from the platform.
            </Text>

          </View>

        </View>

        <View style={styles.card}>

          <View style={styles.cardAccent} />

          <View style={{ flex: 1 }}>

            <Text style={styles.cardTitle}>
              Business Insights
            </Text>

            <Text style={styles.cardText}>
              Monitor rental activity and improve listing visibility.
            </Text>

          </View>

        </View>

        {/* INFO CARD */}

        <View style={styles.infoCard}>

          <Text style={styles.infoTitle}>
            Professional Rental Management
          </Text>

          <Text style={styles.infoText}>
            Caryanam Broker helps owners manage properties,
            connect with tenants, and maintain rental activities
            through a modern and secure platform.
          </Text>

        </View>

        {/* FOOTER */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Caryanam Broker • Smart Rental Management
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  scroll: {
    paddingBottom: 40,
  },

  header: {
    paddingHorizontal: 22,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brand: {
    fontSize: 30,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 0.4,
  },

  welcome: {
    marginTop: 6,
    fontSize: 15,
    color: '#475569',
    fontWeight: '600',
  },

  email: {
    marginTop: 5,
    color: '#6366F1',
    fontSize: 13,
    fontWeight: '500',
  },

  profileCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#4338CA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileLetter: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
  },

  heroCard: {
    marginHorizontal: 22,
    marginTop: 24,
    backgroundColor: '#4338CA',
    borderRadius: 30,
    padding: 26,
  },

  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  heroMini: {
    color: '#C7D2FE',
    fontSize: 11,
    letterSpacing: 1.2,
    fontWeight: '700',
  },

  heroTitle: {
    marginTop: 6,
    color: '#fff',
    fontSize: 32,
    fontWeight: '900',
  },

  roleBadge: {
    backgroundColor: '#312E81',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
  },

  roleBadgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  heroSub: {
    marginTop: 18,
    color: '#E0E7FF',
    lineHeight: 24,
    fontSize: 14,
  },

  heroDivider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginVertical: 20,
  },

  heroBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  heroInfo: {
    flex: 1,
  },

  heroInfoLabel: {
    color: '#C7D2FE',
    fontSize: 12,
  },

  heroInfoValue: {
    marginTop: 5,
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  sectionHeader: {
    marginTop: 32,
    marginBottom: 16,
    paddingHorizontal: 22,
  },

  sectionTitle: {
    fontSize: 23,
    fontWeight: '900',
    color: '#0F172A',
  },

  sectionSub: {
    marginTop: 5,
    color: '#64748B',
    fontSize: 13,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 22,
    marginBottom: 14,
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',

    shadowColor: '#0F172A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.04,
    shadowRadius: 10,

    elevation: 2,
  },

  cardAccent: {
    width: 5,
    height: '100%',
    backgroundColor: '#4338CA',
    borderRadius: 10,
    marginRight: 16,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 8,
  },

  cardText: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 22,
  },

  infoCard: {
    backgroundColor: '#EEF2FF',
    marginHorizontal: 22,
    marginTop: 8,
    borderRadius: 26,
    padding: 22,
  },

  infoTitle: {
    color: '#312E81',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10,
  },

  infoText: {
    color: '#475569',
    lineHeight: 23,
    fontSize: 14,
  },

  footer: {
    marginTop: 30,
    alignItems: 'center',
    paddingBottom: 20,
  },

  footerText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

});