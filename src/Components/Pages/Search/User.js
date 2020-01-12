import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, Picker, View } from 'react-native';

export default function User(props) {

  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <Text>{props.klass}</Text>
      <Text>{props.credits}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add8e6',
    width: '45%',
  },
});
