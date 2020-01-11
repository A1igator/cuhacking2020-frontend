import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function SignupBase(props) {
  return (
    <View>
      <TextInput>username</TextInput>
      <TextInput>password</TextInput>
      <TextInput>confirm password</TextInput>
      <Button title="Signup" />
      <Button onPress={() =>
            props.navigation.navigate('LoginBase')
          } title="go to login" />
    </View>
  );
}
