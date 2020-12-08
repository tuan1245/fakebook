import { setStatusBarBackgroundColor } from 'expo-status-bar'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native'

import * as firebase from 'firebase';

export default class RegisterScreen extends Component {

    state = {
        name:"",
        email: "",
        password: "",
        errorMessage: null
    }

    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({ errorMessage: error.message }));
    }


    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.greeting}> {'Dang ky di em oi'}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>

                    <View>
                        <Text style={styles.inputTitle}>Fullname</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none" 
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                        ></TextInput>
                    </View>


                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none" 
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                            style={styles.input}
                            secureTextEntry  
                            autoCapitalize="none" 
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color:"#ccd9e3", fontWeight: "500"  }}>Sign Up </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: "center", marginTop: 32}}>
                    <Text style={{color:"#4299db", fontSize: 13  }}>Forgot Password ?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: "center", marginTop: 16}}>
                    <Text style={{color:"#4299db", fontSize: 13  }}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: "center", marginTop: 16}} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{color:"#4299db", fontSize: 13  }}>Sign In</Text>
                </TouchableOpacity>
                
            </View>

            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color:"red",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"

    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color:"black",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "pink",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "tomato"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#2c8bd4",
        borderRadius: 6 ,
        height: 52, 
        alignItems: "center",
        justifyContent: "center"
    }
    

})


 