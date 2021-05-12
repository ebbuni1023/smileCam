import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Base, View, Text, StyleSheet, Button ,TouchableOpacity, StatusBar, ImageBackground, } from 'react-native';

import CameraPage from './camera.page';

class HomeScr extends React.Component{
    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.imgconatiner}>

                    <ImageBackground
                    source={require('../assets/images/smile.png')}
                    style={styles.image}
                    />

                    <View style = {styles.welcomeText}>
                    <Text>Hello, Welcome to our Smile App</Text>
                    </View>

                </View>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgconatiner:{
        width: '100%',
        height: '100%',
    },

    welcomeText:{
        marginTop: '80%',
        width: '100%',
        alignItems: 'center',
    },
    
    image:{

    },
});

export default HomeScr;