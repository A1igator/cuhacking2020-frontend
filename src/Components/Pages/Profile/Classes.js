import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Classes(props) {
    const containerStyle = (colour) => {
        return {
            width: '45%',
            backgroundColor: colour,
            paddingVertical: '5%',
            paddingHorizontal: '2.5%',
            marginBottom: '5%',
        }
    }
    
    return (
        <View style = {containerStyle(props.colour)}>
            <Text style = {styles.title}>{props.name}</Text>
            <Text style = {styles.subTitle}>{props.catName}</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    subTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'lightgrey'
    }
});