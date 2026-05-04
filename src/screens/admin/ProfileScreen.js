import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#0D0D0D'
    }}>
      <Text style={{
        color:'#FFD700',
        fontSize:24,
        fontWeight:'bold'
      }}>
        Admin Profile Screen
      </Text>
    </View>
  );
}