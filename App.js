import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Base, View, Text, StyleSheet, Button ,TouchableOpacity, } from 'react-native';
import HomeScr from './src/home';
import CameraPage from './src/camera.page';
import { StackRouter } from 'react-navigation';

const Stack = createStackNavigator();

function App(){
      return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name ="Home" component={HomeScr} options={{ title: 'SMILE :D'}} />
              <Stack.Screen name ="Camera" component={CameraPage} />
            </Stack.Navigator>
          </NavigationContainer>
      );
};

export default App;