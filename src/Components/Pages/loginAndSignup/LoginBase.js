import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
const axios = require('react-native-axios')

export default function LoginBase(props) {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  const login = async () => {
    try {
      // console.log("before login")
      // let res = await fetch('http:// 172.17.76.76/login/', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username: username,
      //     password: password,
      //   }),
      // });
      console.log(res)
      props.navigation.replace('main', { jwt: 'xbx' })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Welcome To Students Helping Students</Text>
      <TextInput style={styles.topTextInput} placeholder="username" onChangeText={text => onChangeUsername(text)} value={username} />
      <TextInput placeholder="password" onChangeText={text => onChangePassword(text)} value={password} />
      <View style={styles.buttonContainer}>
        <Button style={styles.loginButton} onPress={() => { props.navigation.replace('main', { jwt: 'xbx' }) }}><Text style = {{fontSize: 25}}>Login</Text></Button>
        <Button style={styles.switch} onPress={() =>
          props.navigation.navigate('signup')
        }>go to signup</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  loginButton: {
    width: '70%',
    textAlign: 'center',
    backgroundColor: 'lightblue',
    fontSize: 40
  },
  buttonContainer: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topTextInput: {
    marginBottom: 10,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 30,
  }
});
