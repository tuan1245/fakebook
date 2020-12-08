import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'
import { createBottomNavigator} from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import LoadingScreen from './screen/LoadingScreen'
import HomeScreen from './screen/HomeScreen'
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import MessageScreen from './screen/MessageScreen'
import NotificationScreen from './screen/NotificationScreen'
import ProfileScreen from './screen/ProfileScreen'
import PostScreen from './screen/PostScreen'



import * as firebase from 'firebase' 



var firebaseConfig = {
  apiKey: "AIzaSyDf68JewWSCPorB-RbryTaqj0e7-01_5xI",
  authDomain: "fakebook-38c50.firebaseapp.com",
  databaseURL: "https://fakebook-38c50.firebaseio.com",
  projectId: "fakebook-38c50",
  storageBucket: "fakebook-38c50.appspot.com",
  messagingSenderId: "618128718847",
  appId: "1:618128718847:web:4f65cdc7ea25da592b85ca"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}


// const AppContainer = createStackNavigator(
//   {
    
//     default: createBottomNavigator(
//       {
//         Home: {
//           screen: HomeScreen,
//           navigationOptions: {
//             tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor} />
//           }
//         },

//         Message: {
//           screen: MessageScreen,
//           navigationOptions: {
//             tabBarIcon: ({tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
//           }
//         },

//         Post: {
//           screen: PostScreen,
//           navigationOptions: {
//             tabBarIcon: ({tintColor}) => <Ionicons name="ios-add-circle" size={24} color={tintColor} />
//           }
//         },

//         Notification: {
//           screen: NotificationScreen,
//           navigationOptions: {
//             tabBarIcon: ({tintColor}) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
//           }
//         },

//         Profile: {
//           screen: ProfileScreen,
//           navigationOptions: {
//             tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor} />
//           }
//         }

//       },
//       {
//         defaultNavigationOptions: {
//           tabBarOnPress: ({navigation, defaultHandler}) => {
//             if (navigation.state.key === "Post") {
//               navigation.navigate("postModal")
//             } else {
//               defaultHandler()
//             }
//           }
//         },
//         tabBarOptions: {
//           activeTintColor: "#161F3D",
//           inactiveTintColor: "B8BBC4",
//           showLabel: false
//         }

//       }
//     ),
//     postModal: {
//       screen: PostScreen
//     }
//   },
//   {
//     mode: "modal",
//     headerMode: "none"
//   }
// )
const AppContainer = createStackNavigator ({
  Home: HomeScreen,
  Post: PostScreen
})

const AuthStack = createStackNavigator ({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    { 
      Loading: LoadingScreen,
      App: AppContainer,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    } 
  )
)



 


