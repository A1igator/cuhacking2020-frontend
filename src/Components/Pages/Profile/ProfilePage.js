import React, { useState } from 'react';
import Classes from './Classes'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function ProfilePage(props) {
    const dummyDataCat = [
        { name: 'Science', colour: 'red' },
        { name: 'English', colour: 'green' },
    ];
    const [add, setAdd] = useState(false);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [credits, setCredits] = useState("");
    const [classes, setClasses] = useState([
      { name: 'COMP1005', colour: 'red', catName: 'Computer Science' }
    ])

    useState(() => {
        console.log(props)
    })

    const fetchAPI = () => {
        //fetch for name and all that
    }

    return (
        <View style={styles.container}>
            <Text>Name: {name}</Text>
            <Text>Location: {location}</Text>
            <Text>Credits: {credits}</Text>
            <Text>Classes you can tutor</Text>
            {
                classes.map((ele, i) => {
                    console.log(ele)
                    return <Classes name={ele.name} colour={ele.colour} catName={ele.catName} key = {i} />
                })
            }
            <Button title="+" onPress={add ? () => { setAdd(false) } : () => { setAdd(true) }} />
            {console.log(add)}
            {add &&
                <View>
                    <TextInput>Name</TextInput>
                    <Text>Pick A Category:</Text>
                    {dummyDataCat.map((ele) => {
                        console.log("stuff")
                        console.log(ele)
                        return (<View colour={ele.colour}><Text>{ele.name}</Text></View>)
                    })}
                </View>
                }
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
    }
});