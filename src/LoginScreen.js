import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
    navigation
} from 'react-native';

const Stack = createStackNavigator();

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.user_image_container}>
                    <View style = {styles.user_image}>
                        <Text style={styles.textt}>hello</Text>
                    </View>
{/* 
                    <View style ={styles.top_user_image}>
                        <View style = {styles.user_name}>

                        </View>
                        <View style = {styles.posts}>

                        </View>
                        <View style = {styles.followers}>

                        </View>
                        <View style = {styles.following}>

                        </View>
                    </View> */}


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
    user_image: {
        marginTop: 50,
        
    },
    textt: {
        color: '#f44336',
    }
});

export default LoginScreen;