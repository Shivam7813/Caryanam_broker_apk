import React from 'react';
import { View, Text } from 'react-native';

export default function EarningsScreen() {
  return (
    <View style={{
      flex:1,
      backgroundColor:'#0D0D0D',
      padding:20
    }}>
      <Text style={{
        color:'#FFD700',
        fontSize:28,
        fontWeight:'bold'
      }}>
        Earnings
      </Text>

      <View style={{
        backgroundColor:'#1A1A1A',
        padding:20,
        borderRadius:15,
        marginTop:20
      }}>
        <Text style={{color:'white'}}>This Month: ₹45,000</Text>
      </View>
    </View>
  );
}