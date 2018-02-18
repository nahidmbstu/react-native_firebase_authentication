import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

import firebase from "firebase";

import { Button, Text, Container } from 'native-base';

//local files imports
import Login from "./src/components/Login";
import Logout from "./src/components/Logout";


///main component



export default class App extends Component {

  state = { LoggedIn : false }

  componentWillMount() {

     var config = {
      apiKey: "AIzaSyCwh5lzeJysv1MosTPjwPBSE-j8kdmZ91c",
      authDomain: "quiz-app-70db7.firebaseapp.com",
      databaseURL: "https://quiz-app-70db7.firebaseio.com",
      projectId: "quiz-app-70db7",
      storageBucket: "",
      messagingSenderId: "438194710725"
     }

     firebase.initializeApp(config);

     firebase.auth().onAuthStateChanged(

      (user)=>{

        if(user)
        {
            this.setState({LoggedIn:true})
        }
        else
        {
          this.setState({ LoggedIn: false })
        }
      }
    )
  }

  renderContent(){
    if (this.state.LoggedIn) {
      return <Logout />
      
    } else {
      return <Login />
    }
    
  }

  render() {
    return (
      <Container>
       {this.renderContent()}
      </Container>
      
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
    color: '#333',
  },
  ButtonStyle:{
    marginLeft: 20,
    marginRight: 20,
  }
});
