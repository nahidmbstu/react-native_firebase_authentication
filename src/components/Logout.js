import React, { Component } from 'react';
import {

    StyleSheet,
    View,
    ActivityIndicator,
    
} from 'react-native';

import firebase from "firebase";

import {
    Container, Header, Text,
    Content, Body, Title, Button} from 'native-base';


export default class Logout extends Component {


    render() {
        return ( 
            <View>
                    <Button 

                    onPress = {()=>{firebase.auth().signOut();}}
                    
                    full success  >
                        <Text>Log Out</Text>
                    </Button>
            </View>
                           
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9ebee',

    },
    welcome: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: '#333',
        fontWeight: "200",
    },
    textContent: {
        fontSize: 24,
        color: "blue",
    },
    ButtonStyle: {
        margin: 20,
    },
    errorStyle: {
        fontSize: 24,
        color: "red",
    },
});
