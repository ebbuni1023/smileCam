import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Base, View, Text, StyleSheet, Button ,TouchableOpacity, } from 'react-native';
import { StackRouter } from 'react-navigation';

import HomeScr from './src/home';
import CameraPage from './src/camera.page';
import GalleryPage from './src/gallery';
import ProfilePage from './src/profile';
import ImagePreview from './src/image.preview';
import LoginScreen from './src/LoginScreen';
import LogoutScreen from './src/LogoutScreen';
import SettingScreen from './src/setting';


const Stack = createStackNavigator();

function App(){
      return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name ="Home" component={HomeScr} options={{ title: 'SMILE :D'}} />
              <Stack.Screen name ="Camera" component={CameraPage} />
              <Stack.Screen name ="Gallery" component={GalleryPage} />
              <Stack.Screen name ="Profile" component={ProfilePage}/>
              <Stack.Screen name ="ImagePre" component={ImagePreview}/>
              <Stack.Screen name ="Login" component={LoginScreen}/>
              <Stack.Screen name ="Logout" component={LogoutScreen}/>
              <Stack.Screen name ="Setting" component={SettingScreen}/>

            </Stack.Navigator>
          </NavigationContainer>
      );
};

export default App;