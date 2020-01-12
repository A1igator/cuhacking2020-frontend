import React, {useState} from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { Text, Button } from 'react-native-paper';
import User from './User';

export default function SearchPage() {
  const [subject, setSubject] = useState('english');
  const [classes, setClasses] = useState([
    {name: "Henry", klass: "COMP1005", email:"email@email.ca", credits: 0},
    {name: "Henry", klass: "COMP1006", email:"email@email.ca", credits: 0},
    {name: "Edu I mean Chris", klass: "MATH1007", email:"email@email.ca", credits: 0}
  ])

  const fetchCategoryUsers = (itemValue, itemIndex) => {
    //fetch new classes
    setSubject(itemValue)
  }

  return (
    <View>
      <Text style = {{fontSize: 30, textAlign: 'center', marginVertical: '5%'}}>What are you looking for?</Text>
      <Picker
        selectedValue={subject}
        onValueChange={fetchCategoryUsers}>
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Computer Science" value="cs" />
      </Picker>
      <View style={styles.containerRow}>
        {classes.map((ele, i) => {
          return (<User key = {i} name = {ele.name} klass = {ele.klass} credits = {ele.credits} email = {ele.email} />)
        })}
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
