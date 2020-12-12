import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import * as firebase from 'firebase'
import PostScreen from './PostScreen';

export default class TestScreen extends Component {

    state = {
        email: "",
        displayName: "",
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    post = () => {

    }


    render() {
        return (
            <View style={styles.container}>
                <Text> {this.state.email} Bug Bug cai db ay nhu l </Text>


                <TouchableOpacity style={{marginTop: 64}} onPress={this.post} onPress={() => this.props.navigation.navigate("Post")}>
                    <Text style={{color:"#ccd9e3", fontWeight: "500"  }}>Post</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop: 64}} onPress={this.post} onPress={() => this.props.navigation.navigate("Home")}>
                    <Text style={{color:"#ccd9e3", fontWeight: "500"  }}>Home</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },

})


 