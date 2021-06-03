import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import {FontAwesome5, Ionicons, MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';

import imagePreview from './image.preview';
import styles from './styles';

let camera= Camera;

export default function CameraPage({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  const _takePicture = async() => {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    console.log(photo)
    const asset = await MediaLibrary.createAssetAsync(photo['uri']);
    console.log('asset', asset);
    MediaLibrary.createAlbumAsync('Expo', asset)
    navigation.navigate('ImagePre')
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  },[]);
  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  },[]);
 
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera, {flex:3}} type={type}
      ref={(r) => {camera=r}}
      >
      </Camera>

      <View style={{flexDirection: "row", flex:1, backgroundColor:"transparent"}}>
      <View style={{flex:1, backgroundColor:"transparent", justifyContent: "center", alignContent: "center"}}>
          <TouchableOpacity
          style={{padding: 35}}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
              <MaterialIcons name="flip" size={50} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flex:1,  justifyContent: "center", alignContent: "center"}}>
            <TouchableOpacity
            style={{paddingLeft:20,}}
              onPress={_takePicture}
            >
              <Ionicons name="ios-radio-button-on-outline" size={80} color="black" />
            </TouchableOpacity>
        </View>
        <View style={{flex:1, justifyContent: "center", alignContent: "center"}}>
          <TouchableOpacity
          style={{padding: 35,}}
          >
          <FontAwesome5 name="smile" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

