import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
// FontAwesom Icon
// https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=chat
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
import Setting from './setting';
import Profile from './profile';
import Header from './Header';



import { abs } from 'react-native-reanimated';

function HomeScr({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {/* TOP CONTAINER */}
            < Header/>

            {/* IMAGE CONTAINER */}
            <View style={styles.imgconatiner}>
                <ImageBackground
                    // 1. Need to change image 
                    source={require('../assets/images/smile.png')} 
                    style={styles.image}/>
            </View>
 
            {/* TEXT CONTAINER */}
            <View style={styles.welcomeText}>
                {/* 2. Need to change indtroduction */}
                <Text>Hello, Welcome to our Smile App</Text>
                <Text>Introduction</Text>
            </View>
            

            {/* NEWS CONTAINER */}

            <View style={styles.news}>
                <View style={styles.newsText1}>
                    <Text>News1</Text>
                </View>
                <View style={styles.newsText2}>
                    <Text>News2</Text>
                </View>
                <View style={styles.newsText3}>
                    <Text>News3</Text>
                </View>
            </View>
            
            {/* BOTTOM CONTAINER */}

            <View style={styles.bottom}>
                <View style={styles.b1}>
                    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
                        <FontAwesome
                            name="home"
                            style={{
                                color: 'black',
                                fontSize: 30
                            }}/>
                    </TouchableHighlight>
                </View>
    
                <View style={styles.b2}>
                    <TouchableHighlight onPress={() => navigation.navigate('Camera')}>
                        <FontAwesome
                            name="paw"
                            style={{
                                fontSize: 30,
                                color: 'black',
                            }}/>
                    </TouchableHighlight>
                </View>
    
                <View style={styles.b3}>
                    <TouchableHighlight onPress={() => navigation.navigate('Camera')}>
                        <FontAwesome
                            name="camera"
                            style={{
                                color: 'black',
                                fontSize: 30
                            }}/>
                    </TouchableHighlight>
                </View>
    
                <View style={styles.b4}>
                    <TouchableHighlight onPress={() => navigation.navigate('Gallery')}>
                        <FontAwesome
                            name="street-view"
                            style={{
                                color: 'black',
                                fontSize: 30
                            }}/>
                    </TouchableHighlight>
                </View>
    
                <View style={styles.b5}>
                    <TouchableHighlight onPress={() => navigation.navigate('Gallery')}>
                        <FontAwesome
                            name="user"
                            style={{
                                color: 'black',
                                fontSize: 30
                            }}/>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
 
}
 
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    // TOP CONTAINER
    top_container:{
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '7%'
    },

    top_button1:{
        justifyContent: 'center',
        paddingEnd: 15,
        paddingStart: 15,
    },

    top_button2:{
        justifyContent: 'center',
        paddingEnd: 15,
        paddingStart: 15,
    },


    // IMAGE CONTAINER
    imgconatiner: {
        flex:3,
        justifyContent: "center"
    },

    image: {
        width: width * 1,
        height: height * 0.5
    },


    // TEXT CONTAINER
    welcomeText: {
        flexDirection: "column",
        justifyContent: 'center',
        height: '10%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
 
    // NEWS CONTAINER
    news:{
        flexDirection: "row",
        backgroundColor: "red",
        alignItems: 'center',
        flex: 1,
    },

    newsText1: {
        flex: 1,
        alignItems: 'center',
    },
 
    newsText2: {
        flex: 1,
        alignItems: 'center',
    },
 
    newsText3: {
        flex: 1,
        alignItems: 'center',
    },

    // BOTTOM CONTAINER
    bottom:{
        flexDirection:"row",
        height: '10%',
        justifyContent: 'space-between',
        paddingEnd: 20,
        paddingStart: 20,
        alignItems:'center',
    },

});

export default HomeScr;