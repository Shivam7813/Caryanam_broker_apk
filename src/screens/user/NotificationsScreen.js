import React from 'react';
import { ScrollView, View, Text } from 'react-native';

export default function NotificationsScreen() {
  return (
    <ScrollView style={{
      flex:1,
      backgroundColor:'#0D0D0D',
      padding:15
    }}>
      <Text style={{
        color:'#FFD700',
        fontSize:28,
        fontWeight:'bold',
        marginBottom:20
      }}>
        Notifications
      </Text>

      {['New Property Added','Owner Replied','Premium Offer Available']
        .map((item,index) => (
        <View key={index}
          style={{
            backgroundColor:'#1A1A1A',
            padding:18,
            borderRadius:12,
            marginBottom:12
          }}>
          <Text style={{color:'white'}}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}