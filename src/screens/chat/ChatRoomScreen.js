import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function ChatRoomScreen({ route }) {
  const { user } = route.params;

  const [message, setMessage] = useState('');

  return (
    <View style={{
      flex:1,
      backgroundColor:'#0D0D0D'
    }}>
      <View style={{
        padding:15,
        backgroundColor:'#111'
      }}>
        <Text style={{
          color:'#FFD700',
          fontSize:20,
          fontWeight:'bold'
        }}>
          {user.name}
        </Text>
      </View>

      <ScrollView style={{flex:1,padding:15}}>
        <View style={{
          backgroundColor:'#1A1A1A',
          padding:12,
          borderRadius:12,
          alignSelf:'flex-start',
          marginBottom:10
        }}>
          <Text style={{color:'white'}}>Hello 👋</Text>
        </View>

        <View style={{
          backgroundColor:'#FFD700',
          padding:12,
          borderRadius:12,
          alignSelf:'flex-end',
          marginBottom:10
        }}>
          <Text>Hello, interested property?</Text>
        </View>
      </ScrollView>

      <View style={{
        flexDirection:'row',
        padding:10,
        backgroundColor:'#111'
      }}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type message..."
          placeholderTextColor="#999"
          style={{
            flex:1,
            backgroundColor:'#1A1A1A',
            color:'white',
            borderRadius:10,
            paddingHorizontal:15
          }}
        />

        <TouchableOpacity style={{
          backgroundColor:'#FFD700',
          paddingHorizontal:20,
          justifyContent:'center',
          borderRadius:10,
          marginLeft:10
        }}>
          <Text style={{fontWeight:'bold'}}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}