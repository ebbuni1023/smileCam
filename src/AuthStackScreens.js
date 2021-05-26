import React from "react";

import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from './LoginScreen'
import LogoutScreen from './LogoutScreen'

export default AuthStackScreens = () => {
    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="LogIn" component={LoginScreen} />
            <AuthStack.Screen name="LogOut" component={LogoutScreen} />
        </AuthStack.Navigator>
    )
}