import React from 'react';
import Classes from './Classes'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function ProfilePage(props) {
  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Location: {props.location}</Text>
      <Text>Classes you can tutor:</Text>
      <Classes />
    </View>
  );
}
