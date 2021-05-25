import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Base, View, Text, StyleSheet, Button ,TouchableOpacity, } from 'react-native';
import HomeScr from './src/home';
import CameraPage from './src/camera.page';
import { StackRouter } from 'react-navigation';

class IApp extends React.Component{
  render(){
    const Stack = createStackNavigator();
      return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name ="Home" component={HomeScr} options={{ title: 'SMILE :D'}} />
              <Stack.Screen name ="Camera" component={CameraPage} />
            </Stack.Navigator>
          </NavigationContainer>
      );
  };
};

export default IApp;