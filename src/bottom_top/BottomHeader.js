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
import Camera from '../camera.page';
import GalleryPage from '../gallery';
import Setting from '../setting';
import Profile from '../profile';
import Header from '../bottom_top/Header';
import Home from '../home';
const BottomHeader = () => {
    return (
        <View style ={styles.container}>
            <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
        }}
        />
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

const styles = StyleSheet.create({
    bottom:{
        flexDirection:"row",
        justifyContent: 'space-between',
        paddingEnd: 20,
        paddingStart: 20,
        paddingBottom: 40,
        paddingTop: 10,
        alignItems:'center',
    },
});

export default BottomHeader;