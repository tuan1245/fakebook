import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, ImagePickerIOS } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Contants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import Fire from '../Fire'
import * as ImagePicker from 'expo-image-picker'

export default class PostScreen extends Component {
    state = {
        text: "",
        image: null,

    };

    componentDidMount() {
        this.getPhotoPermission();
    }

    getPhotoPermission = async () => {
        if(Contants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if(status != "granted") {
                alert("Cho phep truy cap camera em ey");
            }
        }
    };

    handlePost = () => {
        
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Image,
            allowEditing: true,
            aspect: [4,3]
        });

        if (!result.cancelled) {
            this.setState({image: result.uri});
        }

    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: "500"}}>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    {/* <Image source={require("...")} style={styles.avatar}></Image> */}
                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        style={{flex: 1}}
                        placeholder="Post something babe"
                    ></TextInput>

                </View>

                <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
                </TouchableOpacity>

                <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
                    <Image source={{uri: this.state.image}} style={{width:"100%", height:"100%"}}></Image>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        flexDirection:"row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },

    inputContainer: {
        margin: 32,
        flexDirection: "row"
    },

    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },

    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32
    }
})
