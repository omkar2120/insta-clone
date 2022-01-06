import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen'
import NewPostScreen from './screen/NewPostScreen'
import initialRouteName from '@react-navigation/stack'
import LogInScreen from './screen/LogInScreen';
import SignUpScreen from './screen/SignUpScreen'


const Stack = createStackNavigator()

const screenOption = {
    handleShown:false,
}

 export const SignedInStack = () => (
        <NavigationContainer>
           <Stack.Navigator     initialRouteName='HomeScreen' screenOption={screenOption}>
               <Stack.Screen name='HomeScreen' component={HomeScreen} />
               <Stack.Screen name='NewPostScreen' component={NewPostScreen} />



           </Stack.Navigator>
        </NavigationContainer>
        
    )
export const SignedOutStack = () => (
        <NavigationContainer>
        <Stack.Navigator     initialRouteName='LogInScreen' screenOption={screenOption}>
           
            <Stack.Screen name='LogInScreen' component={LogInScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />


        </Stack.Navigator>
     </NavigationContainer>
    
    )

 


 