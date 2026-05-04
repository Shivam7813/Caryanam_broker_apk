import React from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';

export default function Loader() {
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#0D0D0D'
    }}>
      <ActivityIndicator
        size="large"
        color="#FFC107"
      />
    </View>
  );
}