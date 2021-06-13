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
import mapview from './src/mappage';

const Stack = createStackNavigator();

function App(){
      return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name ="Home" component={HomeScr} options={{ title: 'SMILE :D'}} />
              <Stack.Screen name ="Camera" component={CameraPage} />
              <Stack.Screen name ="Gallery" component={GalleryPage} />
              <Stack.Screen name ="Profile" component={ProfilePage}/>
              <Stack.Screen name ="Image Preview" component={ImagePreview}/>
              <Stack.Screen name ="Map View" component={mapview} />
            </Stack.Navigator>
          </NavigationContainer>
      );
};

export default App;