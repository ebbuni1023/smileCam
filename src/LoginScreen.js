import React from 'react';

import * as firebase from 'firebase';
//import firebase from 'firebase/app';
import { View,Text, StyleSheet, } from 'react-native';

import {Container, Content, Header, Form, Input, Button,Item, Label} from 'native-base';


const firebaseConfig = {
  apiKey: "AIzaSyB28_2AxuPqCGPhWPGU5aMCYdjuqIB1KWw",
  authDomain: "smilecam-e2f68.firebaseapp.com",
  projectId: "smilecam-e2f68",
  storageBucket: "smilecam-e2f68.appspot.com",
  messagingSenderId: "137804997093",
  appId: "1:137804997093:web:6d9007e5087d8765610f0c"
};
// Initialize Firebase
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig); 
}

class LoginScreen extends React.Component {
    constructor(props){
      super(props)

      this.state = ({
        email: '',
        password: ''
      })
    }
    signUpUser = (email, password) => {
      try {
          if (this.state.password.length < 6) {
            alert("Please enter atleast 6 characters")
            return;
          }
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      }
      catch(error){
        console.log(error.toString())
      }
    }
    loginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function (user){
                console.log(user)
            })
        }
        catch(error){
          console.log(error.toString())
        }
    }
    render() {
        return (
            <Container style={styles.container}>
              <Form>
                <Item floatingLabel>
                  <Label>
                    Email 
                  </Label>
                  <Input
                     autoCorrect={false}
                     autoCapitalize="none" 
                     onChangeText = {(email) =>this.setState({email})}
                      />
                 
                </Item>

                <Item floatingLabel>
                  <Label>
                    Password
                  </Label>
                  <Input
                    secureTextEntry={true}
                     autoCorrect={false}
                     autoCapitalize="none" 
                     onChangeText = {(password) =>this.setState({password})}
                      />
                 
                </Item>
                <Button style={styles.loginButton} full rounded success onPress={()=>this.loginUser(this.state.email, this.state.password)} >
                  <Text style={{color: 'white'}}>Login</Text>
                </Button>
                <Button style={styles.loginButton} full primary rounded onPress={()=> this.signUpUser(this.state.emai, this.state.password)}>
                  <Text style={{color: 'white'}}>Sign Up</Text>
                </Button>
              </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        
      
    },
    loginButton: {
      marginTop: 30,
      alignSelf: 'center',
      width: '100%'
    }
    
});

export default LoginScreen;