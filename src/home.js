import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Base,
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    Dimensions,
} from 'react-native';

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

                {/*<StatusBar style="auto" />*/}
            </View>
        );
    }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        backgroundColor: 'white',
        justifyContent: 'center',
    },

    imgconatiner:{
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    image:{
        marginTop: height * 0.1,
        width: width * 0.8,
        height: height * 0.5,
    },

    welcomeText:{
        paddingTop: 10,
        height: height * 0.5,
        width: '100%',
        alignItems: 'center',
    },

});

export default HomeScr;