import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function HomePage() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.mainTitle}>Welcome to</Text>
      <Text style = {styles.subTitle}>Students Helping Students</Text>
      <Text style = {styles.appDesc}>This is an app that allows students to help students.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 40
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: '10%'
  },
  appDesc: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: '10%'
  },
  findTutorButton: {
    width: '75%',
    paddingVertical: '5%',
    backgroundColor: 'lightblue',
    margin: 'auto',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: 'purple'
  }
});
