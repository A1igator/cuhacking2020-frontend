import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function LoginBase(props) {
  const [username, onChangeUsername] = useState('username');
  const [password, onChangePassword] = useState('password');

  return (
    <View>
      <TextInput onChangeText={text => onChangeUsername(text)} value={username} />
      <TextInput onChangeText={text => onChangePassword(text)} value={password} />
      <Button onPress={() =>
            props.navigation.navigate('BottomNav', {jwt: 'xbx'})
          }>Login</Button>
      <Button onPress={() =>
            props.navigation.navigate('SignupBase')
          }>go to signup</Button>
    </View>
  );
}
