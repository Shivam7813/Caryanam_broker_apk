import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default function EmptyState({
  title = 'No Data Found',
}) {
  return (
    <View style={{
      padding:30,
      alignItems:'center'
    }}>
      <Text style={{
        color:'#777',
        fontSize:16
      }}>
        {title}
      </Text>
    </View>
  );
}