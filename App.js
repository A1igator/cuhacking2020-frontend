import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginBase from './loginAndSignup/LoginBase';
import SignupBase from './loginAndSignup/SignupBase';

export default function App() {
  return (
    <View style={styles.container}>
      <SignupBase />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
