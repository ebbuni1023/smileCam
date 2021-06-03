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

const Header = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.top_container}>
                <View style={styles.top_button1}>
                    <TouchableHighlight onPress={() => navigation.navigate('Setting')}>
                        <FontAwesome
                            name="bars"
                            style={{
                                color: 'black',
                                fontSize: 25
                            }}/>
                    </TouchableHighlight>
                </View>
 
                <View style={styles.top_button2}>
                    <TouchableHighlight onPress={() => navigation.navigate('Camera')}>
                        <FontAwesome
                            name="comments"
                            style={{
                                color: 'black',
                                fontSize: 25
                            }}/>
                    </TouchableHighlight>
                </View>
            </View>             
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    
    top_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '7%',
        backgroundColor: 'yellow',
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
});

export default Header;