import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import ItemDeatailsScreen from '../../Screens/ItemDeatailsScreen';
const StackNavigator = () => {
    const AppStack = createNativeStackNavigator();
  return (
  <AppStack.Navigator>
    <AppStack.Screen
    name='HomeScreen'
    component={HomeScreen}
    options={
        {
            headerShown:false
        }
    }
    />
    <AppStack.Screen
    name='ItemDeatailsScreen'
    component={ItemDeatailsScreen}
    options={
        {
            headerShown:false
        }
    }
    />
  </AppStack.Navigator>
  )
}

export default StackNavigator