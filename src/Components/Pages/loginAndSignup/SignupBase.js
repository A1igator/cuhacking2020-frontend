import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function SignupBase(props) {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [canSignup, setCanSignup] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ready To Learn?</Text>
      <Text style = {styles.title}>Ready To Teach?</Text>
      <TextInput placeholder = "Username" style={{ marginBottom: 10, marginTop: 20 }} onChangeText={text => onChangeUsername(text)} value={username} />
      <TextInput secureTextEntry = {true} placeholder = "Password" style={{ marginBottom: 10 }} onChangeText={text => onChangePassword(text)} value={password} />
      <TextInput secureTextEntry = {true} placeholder = "Confirm Password" style={{ marginBottom: 10 }} onChangeText={text => { setCanSignup(text === password) }}></TextInput>
      <TextInput placeholder = "Email" style={{ marginBottom: 10 }} onChangeText={text => setEmail(text)} value={email} />
      <TextInput placeholder = "Name" style={{ marginBottom: 10 }} onChangeText={text => setName(text)} value={name} />
      <View style={styles.buttonContainer}>
        <Button style={styles.registerButton}><Text style={{ fontSize: 25 }}>Signup</Text></Button>
        <Button onPress={() =>
          props.navigation.navigate('login')
        }>
          go to login
      </Button>
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
  registerButton: {
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
  title: {
    fontSize: 35,
    textAlign: 'center',
  }
});
