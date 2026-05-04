import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function PropertyCard({
  item,
  mode,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor:'#151515',
        borderRadius:18,
        padding:16,
        marginBottom:14
      }}>

      <Text style={{
        color:'#FFC107',
        fontSize:20,
        fontWeight:'bold'
      }}>
        {item.title}
      </Text>

      <Text style={{
        color:'white',
        marginTop:8
      }}>
        📍 {item.location}
      </Text>

      <Text style={{
        color:'#999',
        marginTop:6
      }}>
        {mode === 'BUY'
          ? 'For Sale'
          : 'For Rent'}
      </Text>

      <Text style={{
        color:'#FFC107',
        marginTop:8,
        fontSize:18,
        fontWeight:'bold'
      }}>
        ₹ {item.price}
      </Text>

    </TouchableOpacity>
  );
}