import React, { useState, useEffect } from 'react';
import Classes from './Classes'
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Category from './Category'
const axios = require('react-native-axios')

export default function ProfilePage(props) {
    const [add, setAdd] = useState(false);
    const [name, setName] = useState("Henry Morris");
    const [location, setLocation] = useState("Ottawa, Ontario");
    const [credits, setCredits] = useState("");
    const [classes, setClasses] = useState([
        { name: 'COMP1005', colour: 'red', catName: 'Computer Science' },
        { name: 'COMP1006', colour: 'green', catName: 'Computer Science' },
        { name: 'COMP2001', colour: 'blue', catName: 'Computer Science' }
    ]);
    const [categorys, setCategories] = useState([
        { name: 'Science', colour: 'red', active: true, catID: 0 },
        { name: 'English', colour: 'green', active: false, catID: 1 },
        { name: 'Science', colour: 'red', active: false, catID: 2 },
        { name: 'English', colour: 'green', active: false, catID: 3 },
    ])
    const [catNameInput, setCatNameInput] = useState('')

    useEffect(() => {
        console.log(props)
        TESTING()
        getClasses()
    }, [])

    const getClasses = async () => {
        try {
            console.log(props.jwt)
            
            let classes = await axios.post('https://cuhacking2020-server.appspot.com/getClassFromUser', {
                token: props.jwt
            })
            console.log(classes.data);
            await console.log("help")
            await console.log("GETING CLASSSSSSSSSSS")
            setClasses(classes.data);
        } catch (err) {
            console.log(err)
        }
    }

    const TESTING = async () => {
        let cats = await axios.post('https://cuhacking2020-server.appspot.com/getCategories')
        console.log(cats.data)
        cats.data.map(ele => {
            return { ...ele, active: false }
        })
        cats.data[0].active = true;
        setCategories(cats.data)
    }

    const makeActive = (id) => {
        console.log(id)
        console.log("clicked")
        setCategories(categorys.map(ele => {
            if (ele.catID == id) {
                return { ...ele, active: true }
            }
            return { ...ele, active: false }
        }))
    }

    const addClassToUser = async () => {
        let catID;
        categorys.map((ele) => {
            if (ele.active) {
                catID = ele.catID
            }
        })
        let res = await axios.post('https://cuhacking2020-server.appspot.com/addClassToUser',
            {
                token: props.jwt,
                catID: catID,
                name: catNameInput
            })
        console.log("rahhh")
        console.log(res.body)
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, height: '145%' }}>
                <Text style={styles.basicInfo}>Name: <Text style={{ color: "black" }}>{name}</Text></Text>
                <Text style={styles.basicInfo}>Location: <Text style={{ color: "black" }}>{location}</Text></Text>
                <Text style={styles.classesTitle}>Your Expertise</Text>
                <View style={styles.categoryContainer}>
                    {
                        classes.map((ele, i) => {
                            return <Classes name={ele.name} colour={ele.colour} catName={ele.catName} key={i} />
                        })
                    }
                </View>
                <Button style={{ width: '15%', alignSelf: 'center' }} onPress={add ? () => { setAdd(false) } : () => { setAdd(true) }}><Text style={styles.addNewClass}>+</Text></Button>
                {add &&
                    <View contentContainerStyle={{ flexGrow: 1, height: '150%' }}>
                        <TextInput placeholder={"name"} value={catNameInput} onChangeText={(text) => { setCatNameInput(text) }} style={styles.catNameInput}></TextInput>
                        <Text style={styles.pickTextTitle}>Pick A Category</Text>
                        <View style={styles.categoryContainer}>
                            {categorys.map((ele, i) => {
                                return (
                                    <Category clicked={makeActive} id={ele.catID} active={ele.active} colour={ele.colour} key={i} name={ele.name} />
                                )
                            })}
                        </View>
                        <Button onPress={addClassToUser} style={styles.addButton}><Text style={{ color: 'white' }}>Add</Text></Button>
                    </View>
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    addNewClass: {
        fontSize: 30
    },
    basicInfo: {
        color: 'grey',
        fontSize: 25,
    },
    classesTitle: {
        marginBottom: '5%',
        fontSize: 30,
        textAlign: 'center'
    },
    container: {
        marginTop: '5%',
        height: '100%',
        flex: 1
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: 'red',
    },
    pickTextTitle: {
        fontSize: 30,
        marginVertical: '10%',
        textAlign: 'center'
    },
    category: {
        width: '40%',
        height: '40%',
        marginBottom: '5%',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center'
    },
    categoryText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    categoryContainer: {
        display: "flex",
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    catNameInput: {
        marginTop: '5%',
    },
    addButton: {
        width: '50%',
        paddingVertical: '3%',
        color: 'white',
        backgroundColor: 'green',
        marginTop: '-10%',
        alignSelf: 'center'
    }
});