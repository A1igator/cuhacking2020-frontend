import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginBase from './src/Components/Pages/loginAndSignup/LoginBase';
import SignupBase from './src/Components/Pages/loginAndSignup/SignupBase';

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
