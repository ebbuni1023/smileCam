import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

import {
    Base,
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    StatusBar,
    ImageBackground,
    Dimensions,
    navigation
} from 'react-native';

const Stack = createStackNavigator();
import CameraPage from './camera.page';
import LoginScreen from './LoginScreen';
import GalleryPage from './gallery';
import { abs } from 'react-native-reanimated';

function HomeScr({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style = {styles.top_container}>
                <View style={styles.top_button}>
                    <TouchableHighlight onPress={() => navigation.navigate('Gallery')}>
                        <FontAwesome
                            name="image"
                            style={{
                                color: 'pink',
                                fontSize: 20
                            }}/>
                    </TouchableHighlight>
                </View>

                <View style={styles.top_button}>
                    <TouchableHighlight onPress={() => navigation.navigate('Camera')}>
                        <FontAwesome
                            name="camera"
                            style={{
                                fontSize: 20
                            }}/>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.imgconatiner}>
                <ImageBackground
                    source={require('../assets/images/smile.png')}
                    style={styles.image}/>
            </View>

            <View style={styles.welcomeText}>
                <Text>Hello, Welcome to our Smile App</Text>
                <Text>Introduction</Text>
            </View>

            <View style={styles.newsText1}>
                <Text>News1</Text>
            </View>
            <View style={styles.newsText2}>
                <Text>News2</Text>
            </View>
            <View style={styles.newsText3}>
                <Text>News3</Text>
            </View>

            <View style={styles.button}>
                <TouchableHighlight onPress={() => navigation.navigate('Gallery')}>
                    <FontAwesome
                        name="image"
                        style={{
                            color: 'pink',
                            fontSize: 30
                        }}/>
                </TouchableHighlight>
            </View>

            <View style={styles.button}>
                <TouchableHighlight onPress={() => navigation.navigate('Camera')}>
                    <FontAwesome
                        name="camera"
                        style={{
                            fontSize: 30
                        }}/>
                </TouchableHighlight>
            </View>

            <View style={styles.button}>
                <TouchableHighlight onPress={() => navigation.navigate('Profile')}>
                    <FontAwesome
                        name="user"
                        style={{
                            color: 'pink',
                            fontSize: 30
                        }}/>
                </TouchableHighlight>
            </View>

            <View style={styles.button}>
                <TouchableHighlight onPress={() => navigation.navigate('Gallery')}>
                    <FontAwesome
                        name="image"
                        style={{
                            color: 'pink',
                            fontSize: 30
                        }}/>
                </TouchableHighlight>
            </View>

            <View style={styles.button}>
                <TouchableHighlight onPress={() => navigation.navigate('Gallery')}>
                    <FontAwesome
                        name="image"
                        style={{
                            color: 'pink',
                            fontSize: 30
                        }}/>
                </TouchableHighlight>
            </View>
        </View>
    );

}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: "row",
        backgroundColor: 'white',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

    imgconatiner: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '60%'
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
        backgroundColor: 'pink'
    },

    newsText1: {
        width: '30%',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        height: '15%',
        marginRight: 10
    },

    newsText2: {
        width: '30%',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        height: '15%',
        marginRight: 10
    },

    newsText3: {
        width: '30%',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        height: '15%'
    },

    top_container:{
        width: '100%',
        height: '10%',
        backgroundColor: 'yellow',
    },

    top_button:{
        flexDirection: 'row',
        height: '20%',
        backgroundColor: 'yellow',
        alignItems: "flex-end",
        padding: 10,
        display: "flex",
    },

    button: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        height: '20%',
        backgroundColor: 'yellow',
        padding: 20
    }
});

export default HomeScr;