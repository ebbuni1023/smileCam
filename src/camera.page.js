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
import LoginScreen from './LoginScreen';

class CameraPage extends React.Component {
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
                    <Text>CameraPage</Text>
                    <Text>HERE WILL BE ANY PARAGRAH</Text>
                </View>
                <View style={styles.newsText}>
                    <Text>Hello, Welcome to our Smile App</Text>
                    <Text>HERE WILL BE ANY PARAGRAH</Text>
                </View>

                <View style={styles.button1}>
                    <Button title="click me" onPress={() => navigation.navigate('CameraPage')}/>
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

    button1:{
        marginTop: 50,
        flexDirection: 'column',
        width: '100%',
        height: '20%',
        backgroundColor: 'white',
    }
});

export default CameraPage;