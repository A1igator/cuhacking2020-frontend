import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, Picker, View } from 'react-native';

export default function SearchPage() {
  [subject, setSubject] = useState('english');

  return (
    <View>
      <Text>Welcome to NAME____NAME</Text>
      <Text>This is an app that allows students to help students.</Text>
      <Picker
        selectedValue={subject}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          setSubject(itemValue)
        }>
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Computer Science" value="cs" />
      </Picker>
      <Button title = "Find A Tutor" />
    </View>
  );
}
