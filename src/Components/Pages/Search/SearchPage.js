import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, Picker, View } from 'react-native';
import User from './User';

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
      <View style={styles.containerRow}>
        <User name="test" klass="gaya01" credits={10}/>
        <User name="test2" klass="gaya02" credits={5}/>
        <User name="test3" klass="gaya03" credits={3}/>
        <User name="test4" klass="gaya04" credits={0}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRow: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
