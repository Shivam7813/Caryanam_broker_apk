import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function UserInfo() {
  const { userRole, userData } = useContext(AuthContext);

  return (
    <View style={{ padding: 10 }}>
      <Text>👤 {userData?.email}</Text>
      <Text>{userRole}</Text>
    </View>
  );
}