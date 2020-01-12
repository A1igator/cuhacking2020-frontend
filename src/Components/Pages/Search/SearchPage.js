import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { Text, Button } from 'react-native-paper';
import User from './User';
const axios = require('react-native-axios')

export default function SearchPage() {
  const [subject, setSubject] = useState('english');
  const [classes, setClasses] = useState([
    { name: "Henry", klass: "COMP1005", email: "email@email.ca", credits: 0 },
    { name: "Henry", klass: "COMP1006", email: "email@email.ca", credits: 0 },
    { name: "Edu I mean Chris", klass: "MATH1007", email: "email@email.ca", credits: 0 }
  ])

  useEffect(() => {
    fetchCategory(0)
  }, [])

  const fetchCategory = async (id) => {
    let res = await axios.post('https://cuhacking2020-server.appspot.com/getCategoryUsers', { catID: id });
    console.log("doing it")
    console.log(res.data)
    console.log("after")
    setClasses(res.data)
  }

  const fetchCategoryUsers = (itemValue, itemIndex) => {
    fetchCategory(itemIndex)
    setSubject(itemValue)
  }

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center', marginVertical: '5%' }}>What are you looking for?</Text>
      <Picker
        selectedValue={subject}
        onValueChange={fetchCategoryUsers}>
        <Picker.Item label="Computer Science" value="cs" />
        <Picker.Item label="English" value="english" />
      </Picker>
      <View style={styles.containerRow}>
        {classes.map((ele, i) => {
          return (<User key={i} name={ele.name} klass={ele.classes} email={ele.email} />)
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
