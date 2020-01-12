import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, Picker, View } from 'react-native';

export default function User(props) {

  return (
    <View style={styles.container}>
      <Text style = {{color: 'grey'}}>Name: {props.name}</Text>
      <Text style = {{color: 'grey'}}>Class: {props.klass}</Text>
      <Text style = {{color: 'grey'}}>Cost: {props.credits}</Text>
      <Text style = {{color: 'grey'}}>Email: {props.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    width: '45%',
    marginTop: '10%',
    padding: '2%'
  },
});
