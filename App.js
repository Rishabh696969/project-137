import React from "react"
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import HomeScreen from "./screens/home"
import DetailScreen from "./screens/detail"
import { AppRegistry } from "react-native"

expo default function App(){
  return<AppContainer/>
}

const appStackNavigator = createStackNavigator(
{
  Home:{
    screen:HomeScreen,
    navigationOption:{
      headerShown:false
    }
  },
  Detail:{
    screen:DetailScreen
  }
},
{
  intialRouteName:"home"
}
)

const AppContainer = createAppContainer(appStackNavigator)