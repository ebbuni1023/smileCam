import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
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
function LoginApp() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    if (!user) {
      return (
        <View>
          <Text>Login</Text>
        </View>
      );
    }
  
    return (
      <View>
        <Text>Welcome {user.email}</Text>
      </View>
    );
  }
class LoginScreen extends React.Component {
    createUser = () => {
        auth()
  .createUserWithEmailAndPassword('bryanchau1@gmail.com', 'isthisapassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    }
    logout = () => {
        auth()
  .signOut()
  .then(() => console.log('User signed out!'));
    } 
    render() {
        return (
            <View style={styles.container}> 
            <LoginApp/>
            <Button title="Create User" onPress={this.createUser}/>
            <Button title="Log out" onPress={this.logout}/>
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