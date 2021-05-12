import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Base, View, Text, StyleSheet, Button ,TouchableOpacity, StatusBar, ImageBackground, Alert, } from 'react-native';

import CameraPage from '../src/camera.page';
import Profile from '../src/profile';

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

                    <View style = {styles.buttonCamera}>
                        <Button title="Take picturs" onPress={() => NavigationContainer.navigate('Profile')}></Button>
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