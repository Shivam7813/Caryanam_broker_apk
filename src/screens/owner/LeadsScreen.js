import React from 'react';
import { View, Text } from 'react-native';

export default function LeadsScreen() {
  return (
    <View style={{
      flex:1,
      backgroundColor:'#0D0D0D',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text style={{
        color:'#FFD700',
        fontSize:24
      }}>
        Leads Screen
      </Text>
    </View>
  );
}