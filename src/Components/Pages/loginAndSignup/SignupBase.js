import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function SignupBase() {
  return (
    <View>
      <TextInput>username</TextInput>
      <TextInput>password</TextInput>
      <TextInput>confirm password</TextInput>
      <Button title="Login" />
      <Button title="Signup" />
    </View>
  );
}
