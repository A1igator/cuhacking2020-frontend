import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Classes(props) {
    const containerStyle = (colour) => {
        return {
            width: '50%',
            backgroundColor: colour
        }
    }
    
    return (
        <View style = {() => {containerStyle(props.colour)}}><Text>{props.name}</Text><Text>{props.catName}</Text></View>
    );
}



const styles = StyleSheet.create({
    container: {
        width: '95%',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    }
});