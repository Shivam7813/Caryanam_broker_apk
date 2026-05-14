import React from 'react';

import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function AdminDashboardScreen({ navigation }) {

  const managementSections = [
    {
      title: 'User Management',
      desc: 'Manage and monitor registered platform users.',
    },
    {
      title: 'Owner Approvals',
      desc: 'Review and verify owner registration requests.',
    },
    // {
    //   title: 'Property Monitoring',
    //   desc: 'Review uploaded properties and listing activity.',
    // },
    {
      title: 'Premium Requests',
      desc: 'Handle premium plans and upgrade requests.',
    },
    // {
    //   title: 'Reports & Analytics',
    //   desc: 'Access reports and monitor platform activity.',
    // },
  ];

  return (

    <SafeAreaView
      style={styles.safeArea}
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
              Admin Panel
            </Text>

            <Text style={styles.tag}>
              Welcome back, Administrator 👋
            </Text>

          </View>

          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => navigation.navigate('ProfileTab')}
          >

            <Text style={styles.profileTxt}>
              Profile
            </Text>

          </TouchableOpacity>

        </View>

        {/* HERO */}

        <View style={styles.heroCard}>

          <View style={styles.heroTop}>

            <View>

              <Text style={styles.heroMini}>
                ADMINISTRATION
              </Text>

              <Text style={styles.heroTitle}>
                Control Center
              </Text>

            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeTxt}>
                ADMIN
              </Text>
            </View>

          </View>

          <Text style={styles.heroSub}>
            Manage platform operations, monitor activities,
            and maintain the Caryanam Broker ecosystem
            from one centralized dashboard.
          </Text>

          <View style={styles.heroDivider} />

          <View style={styles.heroBottom}>

            <View>
              <Text style={styles.heroLabel}>
                Platform
              </Text>

              <Text style={styles.heroValue}>
                Caryanam Broker
              </Text>
            </View>

            <View>
              <Text style={styles.heroLabel}>
                Access Level
              </Text>

              <Text style={styles.heroValue}>
                Full Access
              </Text>
            </View>

          </View>

        </View>

        {/* SECTION */}

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Administrative Controls
          </Text>

          <Text style={styles.sectionSub}>
            Core management tools available to administrators
          </Text>

        </View>

        {/* MANAGEMENT CARDS */}

        <View style={styles.cardWrap}>

          {managementSections.map((item, index) => (

            <View
              key={index}
              style={styles.card}
            >

              <View style={styles.cardAccent} />

              <View style={{ flex: 1 }}>

                <Text style={styles.cardTitle}>
                  {item.title}
                </Text>

                <Text style={styles.cardText}>
                  {item.desc}
                </Text>

              </View>

            </View>

          ))}

        </View>

        {/* STATUS CARD */}

        <View style={styles.statusCard}>

          <Text style={styles.statusTitle}>
            Platform Status
          </Text>

          <Text style={styles.statusText}>
            All systems are operational and platform
            services are running normally.
          </Text>

        </View>

        {/* FOOTER */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Caryanam Broker • Administration Dashboard
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  scroll: {
    paddingBottom: 40,
  },

  header: {
    paddingHorizontal: 22,
    paddingTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brand: {
    fontSize: 30,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 0.3,
  },

  tag: {
    marginTop: 5,
    fontSize: 14,
    color: '#64748B',
    fontWeight: '600',
  },

  profileBtn: {
    backgroundColor: '#4338CA',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 16,
  },

  profileTxt: {
    color: '#fff',
    fontWeight: '800',
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

  badge: {
    backgroundColor: '#312E81',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
  },

  badgeTxt: {
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

  heroLabel: {
    color: '#C7D2FE',
    fontSize: 12,
  },

  heroValue: {
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

  cardWrap: {
    paddingHorizontal: 22,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 14,
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

  statusCard: {
    marginHorizontal: 22,
    marginTop: 8,
    backgroundColor: '#EEF2FF',
    borderRadius: 26,
    padding: 22,
  },

  statusTitle: {
    color: '#312E81',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10,
  },

  statusText: {
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