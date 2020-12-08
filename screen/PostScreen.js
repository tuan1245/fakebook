import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class PostScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <TouchableOpacity>
                        <Ionicons></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput></TextInput>

                </View>
            </SafeAreaView>
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
