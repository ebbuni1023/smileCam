import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

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

      <View style={styles.buttonContainer, {flex:1}}>
      <View style={{flex:1}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
            <TouchableOpacity
              style={styles.button}
              onPress={_takePicture}
            >
              <Text>Capture</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

