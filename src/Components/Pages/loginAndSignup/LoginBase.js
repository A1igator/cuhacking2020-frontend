import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function LoginBase(props) {
  const [username, onChangeUsername] = useState('username');
  const [password, onChangePassword] = useState('password');

  return (
    <View style={styles.container}>
      <TextInput onChangeText={text => onChangeUsername(text)} value={username} />
      <TextInput onChangeText={text => onChangePassword(text)} value={password} />
      <Button onPress={() =>
            props.navigation.replace('main', {jwt: 'xbx'})
          }>Login</Button>
      <Button onPress={() =>
            props.navigation.navigate('signup')
          }>go to signup</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
