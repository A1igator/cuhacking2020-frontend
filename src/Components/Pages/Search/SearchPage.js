import React, {useState} from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { Text, Button } from 'react-native-paper';
import User from './User';

export default function SearchPage() {
  [subject, setSubject] = useState('english');

  return (
    <View>
      <Text>Welcome to NAME____NAME</Text>
      <Text>This is an app that allows students to help students.</Text>
      <Picker
        selectedValue={subject}
        onValueChange={(itemValue, itemIndex) =>
          setSubject(itemValue)
        }>
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Computer Science" value="cs" />
      </Picker>
      <Button>Find A Tutor</Button>
      <View style={styles.containerRow}>
        <User name="test" klass="mata01" credits={10} email="test@gmail.com"/>
        <User name="test2" klass="mata02" credits={5} email="test@gmail.com"/>
        <User name="test3" klass="mata03" credits={3} email="test@gmail.com"/>
        <User name="test4" klass="mata04" credits={0} email="test@gmail.com"/>
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
  picker: {
    width: '100%',
  }
});
