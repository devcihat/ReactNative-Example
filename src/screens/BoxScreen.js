import React from 'react'
import { View, Text, StyleSheet } from "react-native"

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box 1 Screen</Text>
            <Text style={styles.textStyle}>Box 2 Screen</Text>
            <Text style={styles.textStyle}>Box 3 Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:3,
        borderColor:'black',
        height:200,
        justifyContent:"center"
        //alignItems:'center'
    },
    textStyle: {
        borderWidth:3,
        borderColor:"red",
    }
})

export default BoxScreen