import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator  } from 'react-native'
import * as firebase from 'firebase'

export default class LoadingScreen extends Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Loading do dep trai cua Tuan</Text>
                <ActivityIndicator size="large"></ActivityIndicator>

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


 