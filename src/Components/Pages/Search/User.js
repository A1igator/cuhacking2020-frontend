import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, Picker, View } from 'react-native';

export default function User(props) {

  return (
    <View style={styles.container}>
      <Text>Name: {props.name}</Text>
      <Text>Class: {props.klass}</Text>
      <Text>Cost: {props.credits}</Text>
      <Text>Email: {props.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add8e6',
    width: '45%',
    marginTop: '10%',
  },
});
