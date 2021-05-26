import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image} from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

function ImagePreview({navigation}){

    let photo="https://placekitten.com/200/300"
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
            <Image style={{flex:1}} source={{ uri: photo }} />
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text>
                        Go back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => _takePicture}
                >
                    <Text>
                        Save Photo
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ImagePreview;
