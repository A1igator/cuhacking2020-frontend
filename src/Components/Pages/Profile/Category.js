import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Classes(props) {
    const containerStyle = (colour, active) => {
        console.log(colour)
        let opacityValue = 0.4;
        if (active) opacityValue = 1
        return {
            backgroundColor: colour,
            opacity: opacityValue,
            width: '40%',
            height: '50%',
            marginBottom: '5%',
            display: 'flex',
            justifyContent: 'center'
        }
    }

    const buttonClicked = () => {
        props.clicked(props.id); 
        console.log("testing")
    }
    
    return (
        <Button onPress = {buttonClicked} style = {containerStyle(props.colour, props.active)}><Text style = {styles.categoryText}>{props.name}</Text></Button>
    );
}



const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    categoryText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
});