import React from 'react';
import { View, TextInput, Text } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={{
      flex:1,
      backgroundColor:'#0D0D0D',
      padding:20
    }}>
      <TextInput
        placeholder="Search city..."
        placeholderTextColor="#999"
        style={{
          backgroundColor:'#1A1A1A',
          color:'white',
          padding:15,
          borderRadius:12
        }}
      />

      <Text style={{
        color:'#FFD700',
        marginTop:20,
        fontSize:18
      }}>
        Search Results Here
      </Text>
    </View>
  );
}