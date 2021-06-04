import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome5, Ionicons, MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';

export default function CameraPage1() {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null);
        setImage(data.uri);
    }
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{flex: 1, backgroundColor:'black'}}>
        <View style={styles.cameraContainer}> 
            {/* <Camera 
            ref= {ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'1:1'}/> */}
        <Camera style={styles.camera, {flex:3}} type={type}
      ref= {ref => setCamera(ref)}></Camera>
        </View>
        
        <View style = {styles.buttonCamera}>

            <View style = {styles.galleryButtpon}>
            <MaterialIcons name="collections" size ={40} color = 'white' onPress={() => takePicture()}/>

            </View>

            <View style = {styles.cameraButton}>
            <Ionicons name="ios-radio-button-on-outline" size ={80} color = 'white' onPress={() => takePicture()}/>
          {/* {image && <Image source={{uri: image}} style={{flex:1}}/>} */}
            </View>


            <View style = {styles.flipButton}>
            <MaterialIcons
            name="flip"
            size ={40}
            color = "white"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
          </MaterialIcons>
            </View>

          </View>

    </View>
  );
}

const styles = StyleSheet.create({
    cameraContainer: {
        backgroundColor: 'black',
        flex: 2,
        flexDirection: 'row',
      },

      camera:{
          flex: 2,
      },

      buttonCamera:{
          height: '15%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 20,
          paddingLeft: 30,
          paddingRight: 30,
        },

    })