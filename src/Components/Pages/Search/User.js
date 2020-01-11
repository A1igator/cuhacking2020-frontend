import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, Picker, View } from 'react-native';

export default function User(props) {

  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <Text>{props.klass}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8DC',
    width: '45%',
  },
});
