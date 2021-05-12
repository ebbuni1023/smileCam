import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Base, View, Text, StyleSheet, Button ,TouchableOpacity, StatusBar, ImageBackground, Alert, } from 'react-native';

import CameraPage from '../src/camera.page';
import Profile from '../src/profile';

const Stack = createStackNavigator();

class HomeScr extends React.Component{
    render(){
        return (
            <View style = {styles.container}>

                {/* This will be advertisements or random images for users */}
                <View style = {styles.imgconatiner}>
                    <ImageBackground
                    source={require('../assets/images/smile.png')}
                    style={styles.image}
                    />
                    
                </View>

                {/* Greeting for users <3 */}
                <View style = {styles.greeting}>
                    <View style = {styles.welcomeText}>
                    <Text>Hello, Welcome to our Smile App</Text>
                    </View>
                </View>

                {/* Three parts 
                left => gallery.js, center => camera.page.js, pictures right=> profile.js*/}
                <View style = {styles.below}>

                    {/* button for gallery -> gallery.js */}
                    <View style = {styles.gallery}>

                    </View>
                    {/* button for camera -> camera.page.js */}
                    <View style = {styles.buttonCamera}>
                        <Button title="Take picturs" onPress={() => NavigationContainer.navigate('Profile')}></Button>
                    </View>

                    {/* button for profile -> profile.js */}
                    <View style = {styles.profile}>

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
        width: '100%',
        alignItems: 'center',
    },
    
    image:{
        marginTop: '20%',
        width: '100%',
        height: '70%',
    },

    buttonCamera:{
        
    },
});

export default HomeScr;