import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function SignupBase(props) {
  const [username, onChangeUsername] = useState('username');
  const [password, onChangePassword] = useState('password');
  const [canSignup, setCanSignup] = useState(false);

  return (
    <View>
      <TextInput onChangeText={text => onChangeUsername(text)} value={username} />
      <TextInput onChangeText={text => onChangePassword(text)} value={password} />
      <TextInput onChangeText={text => {setCanSignup(text === password)}}>confirm password</TextInput>
      <Button>Signup</Button>
      <Button onPress={() =>
            props.navigation.navigate('LoginBase')
          }>
      go to login
      </Button>
    </View>
  );
}
