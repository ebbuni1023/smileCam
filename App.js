import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createDrawerNavigator } from '@react-navigation/drawer';
import { Base, View, Text, StyleSheet, Button ,TouchableOpacity, } from 'react-native';
import { StackRouter } from 'react-navigation';
// import Navigator from './src/routes/drawer';
import { DrawerContent } from './src/routes/drawer';

import HomeScr from './src/home';
import CameraPage from './src/camera.page';
import GalleryPage from './src/gallery';
import ProfilePage from './src/profile';
import ImagePreview from './src/image.preview';
import LoginScreen from './src/LoginScreen';
import LogoutScreen from './src/LogoutScreen';
import SettingScreen from './src/setting';



const Drawer = createDrawerNavigator();

const App = () => {
      return (
          <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name ="Login" component={LoginScreen}/>
              <Drawer.Screen name ="Home" component={HomeScr} options={{ title: 'SMILE :D'}} />
              <Drawer.Screen name ="Camera" component={CameraPage} />
              <Drawer.Screen name ="Gallery" component={GalleryPage} />
              <Drawer.Screen name ="Profile" component={ProfilePage}/>
              <Drawer.Screen name ="ImagePre" component={ImagePreview}/>
               
              <Drawer.Screen name ="Logout" component={LogoutScreen}/>
              <Drawer.Screen name ="Setting" component={SettingScreen}/>
            </Drawer.Navigator>
          </NavigationContainer>
      );
}

export default App;
