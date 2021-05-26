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
import { abs } from 'react-native-reanimated';

function Setting({navigation}) {
    return (
        <View style={styles.container}>

        </View>
    );

}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({

});

export default Setting;