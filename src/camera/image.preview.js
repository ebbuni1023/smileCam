import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image, navigation} from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import {AntDesign, Ionicons, MaterialCommunityIcons,MaterialIcons, Entypo} from '@expo/vector-icons';


function ImagePreview({route}){

    const photo = route.params.paramKey;

    const [hasPermission, setHasPermission] = useState(null);

    const _takePicture = async() => {
        const photo_link= photo
        await MediaLibrary.saveToLibraryasync(photo_link);
    }

    useEffect(() => { 
        (async () => {
          const { status } = await MediaLibrary.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access </Text>;
      }

    return(
        <View style={{flex:1}}>
            <Image style={{flex:6}} source={{ uri: photo }} />
            <View style={{flex:1, flexDirection: "row"}}>
                <View style={{flex:5}} >
                <TouchableOpacity
                    style={{ rightMargin:100, padding: 40, alignContent: "center"}}
                    onPress={() => navigation.goBack()}>
                    <AntDesign name="back" size={50} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:5}} >
                <TouchableOpacity
                    style={{ leftMargin:100,padding: 30,alignContent: "center"}}
                    onPress={() => _takePicture}
                    >
                    <Entypo name="save" size={50} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
//Just to update the code repo
export default ImagePreview;
