import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function LoginBase(props) {
  return (
    <View>
      <TextInput>username</TextInput>
      <TextInput>password</TextInput>
      <Button title="Login" />
      <Button onPress={() =>
            props.navigation.navigate('SignupBase')
          } title="Signup" />
    </View>
  );
}
