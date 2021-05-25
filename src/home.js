import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

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
    navigation,
    TouchableHighlight
} from 'react-native';

const Stack = createStackNavigator();
import CameraPage from './camera.page';
import LoginScreen from './LoginScreen';

class HomeScr extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBar style="auto"/> */}
                <View style={styles.imgconatiner}>
                    <ImageBackground
                        source={require('../assets/images/smile.png')}
                        style={styles.image}/>
                </View>

                <View style={styles.welcomeText}>
                    <Text>Hello, Welcome to our Smile App</Text>
                    <Text>HERE WILL BE ANY PARAGRAH</Text>
                </View>
                <View style={styles.newsText}>
                    <Text>Hello, Welcome to our Smile App</Text>
                    <Text>HERE WILL BE ANY PARAGRAH</Text>
                </View>

                <View style={styles.button}>
                    <TouchableHighlight onPress={() => {Camera}}>
                    <FontAwesome name="image" style={{ color: 'pink', fontSize: 40 }}/>
                    </TouchableHighlight>
                </View>

                <View style={styles.button}>
                    <TouchableHighlight onPress={() => {Camera}}>
                    <FontAwesome name="camera" style={{ color: 'black', fontSize: 40 }}/>
                    </TouchableHighlight>
                </View>

                <View style={styles.button}>
                    <TouchableHighlight onPress={() => {Camera}}>
                    <FontAwesome name="user" style={{ color: 'pink', fontSize: 40 }}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: "row",
        backgroundColor: 'white',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    imgconatiner: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '60%',
    },

    image: {
        width: width * 1,
        height: height * 0.5
    },

    welcomeText: {
        paddingTop: 10,
        height: '10%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    newsText:{
        paddingTop: 10,
        height: '10%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'pink',
        },

    button:{
        flex:1,
        marginTop: 25,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        height: '20%',
        backgroundColor: 'white',
        padding: 20,
    }
});

export default HomeScr;