import React from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';

export default function ChatListScreen({ navigation }) {
  const chats = [
    { id: 1, name: 'Rahul Owner', msg: 'Is property available?' },
    { id: 2, name: 'Amit User', msg: 'Interested in flat.' },
  ];

  return (
    <ScrollView style={{
      flex:1,
      backgroundColor:'#0D0D0D',
      padding:15
    }}>
      <Text style={{
        color:'#FFD700',
        fontSize:28,
        fontWeight:'bold',
        marginBottom:20
      }}>
        Chats
      </Text>

      {chats.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('ChatRoom', { user: item })}
          style={{
            backgroundColor:'#1A1A1A',
            padding:18,
            borderRadius:12,
            marginBottom:12
          }}
        >
          <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>
            {item.name}
          </Text>

          <Text style={{color:'#999',marginTop:5}}>
            {item.msg}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}