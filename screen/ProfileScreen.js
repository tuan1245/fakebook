import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> ProfileScreen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    }
})