import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function SignupBase(props) {
  const [username, onChangeUsername] = useState('username');
  const [password, onChangePassword] = useState('password');
  const [canSignup, setCanSignup] = useState(false);

  return (
    <View>
      <TextInput onChangeText={text => onChangeUsername(text)} value={username} />
      <TextInput onChangeText={text => onChangePassword(text)} value={password} />
      <TextInput onChangeText={text => {setCanSignup(text === password)}}>confirm password</TextInput>
      <Button title="Signup" />
      <Button onPress={() =>
            props.navigation.navigate('LoginBase')
          } title="go to login" />
    </View>
  );
}
