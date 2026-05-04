import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

export default function PrimaryButton({
  title,
  onPress,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{
        backgroundColor:'#FFC107',
        padding:16,
        borderRadius:14,
        alignItems:'center',
      }, style]}>

      <Text style={{
        color:'black',
        fontWeight:'bold',
        fontSize:16
      }}>
        {title}
      </Text>

    </TouchableOpacity>
  );
}