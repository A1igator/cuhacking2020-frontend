import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function LoginBase(props) {
  const [username, onChangeUsername] = useState('username');
  const [password, onChangePassword] = useState('password');

  return (
    <View>
      <TextInput onChangeText={text => onChangeUsername(text)} value={username} />
      <TextInput onChangeText={text => onChangePassword(text)} value={password} />
      <Button title="Login" />
      <Button onPress={() =>
            props.navigation.navigate('SignupBase')
          } title="go to signup" />
    </View>
  );
}
