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

function HomeScr({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>

            <View style={styles.top_button}>
                <TouchableHighlight onPress={() => navigation.navigate('Profile')}>
                    <FontAwesome
                        name="setting"
                        style={{
                            color: 'pink',
                            fontSize: 30
                        }}/>
                </TouchableHighlight>
            </View>

            <View style={styles.top_button}>
                <TouchableHighlight onPress={() => navigation.navigate('Profile')}>
                    <FontAwesome
                        name="chat"
                        style={{
                            color: 'pink',
                            fontSize: 30
                        }}/>
                </TouchableHighlight>
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
            
            {/* Here I want to make it two rows
            im thinking to just erase news lol  */}
            <View 
                style={{
                    flexDirection: "row", flex: 1, 
                }}
            >
                <View style={styles.newsText, {flex:1}}>
                    <Text>News1</Text>
                </View>
                <View style={styles.newsText, {flex:1}}>
                    <Text>News2</Text>
                </View>
                <View style={styles.newsText, {flex:1}}>
                    <Text>News3</Text>
                </View>
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
                        name="friend's list"
                        style={{
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
                        name="story"
                        style={{
                            color: 'pink',
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

    top_button:{
        width: '100%',
        position: 'relative',

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

    newsText:{
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        height: '20%',
        backgroundColor: 'yellow',
        position: 'absolute',
    },

    // newsText1: {
    //     width: '30%',
    //     flexDirection: 'row',
    //     textAlign: 'center',
    //     justifyContent: 'center',
    //     height: '15%',
    //     marginRight: 10,
    //     position: 'absolute',
    // },

    // newsText2: {
    //     width: '30%',
    //     flexDirection: 'row',
    //     textAlign: 'center',
    //     justifyContent: 'center',
    //     height: '15%',
    //     marginRight: 10
    // },

    // newsText3: {
    //     width: '30%',
    //     flexDirection: 'row',
    //     textAlign: 'center',
    //     justifyContent: 'center',
    //     height: '15%'
    // },

    button: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        padding: 20
    }
});

export default HomeScr;