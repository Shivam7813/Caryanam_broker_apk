import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function ScreenWrapper({
  children,
}) {
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:'#0D0D0D'
    }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0D0D0D"
      />
      {children}
    </SafeAreaView>
  );
}