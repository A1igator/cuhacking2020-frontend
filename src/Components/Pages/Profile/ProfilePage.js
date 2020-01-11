import React, { useState } from 'react';
import Classes from './Classes'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function ProfilePage(props) {
    const dummyDataCat = [
        {name: 'Science', colour: 'red'},
        {name: 'English', colour: 'green'},
    ]
    const [add, setAdd] = useState(false);
    return (
        <View style = {styles.container}>
            <Text>Name: {props.name}</Text>
            <Text>Location: {props.location}</Text>
            <Text>Classes you can tutor</Text>
            {
                classes.map((ele) => {
                    return <Classes name = {ele.name} colour = {ele.colour} catName = {ele.catName} />
                })
            }
            <Button title="+" onPress = {add ? () => {setAdd(false)} : () => {setAdd(true)}} />
            {add ?
                <View>
                    <TextInput>Name</TextInput>
                    <Text>Pick A Category:</Text>
                    {dummyDataCat.map((ele) => {
                        return (
                        <View colour = {ele.colour}>
                            <Text>{ele.name}</Text>
                        </View>)
                    })}
                </View>
            : ''}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '95%',
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
    categoryContainer: {
        color: `${p => p.colour}`
    }
  });