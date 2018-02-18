import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';

import firebase from "firebase";

import {
    Container, Header, Content,
    Form, Item, Input, Button,
    Card, CardItem, Body, Text,
    Title
} from 'native-base';


export default class Login extends Component {
    
    state = {
        email: '',
        password:'',
        error:'',
        indicator: null,
    }
    
    onLoginPress(){
        const { email, password }  = this.state;
        this.setState({ error: " " , indicator: true })
       
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.handleLoginPass.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            }).then(this.handleLoginFail.bind(this))
        .catch(()=>{
            this.setState({error: "Authentication Failed"})
        })
    }

    handleLoginPass() {
        this.setState({
            email: '',
            password: '',
            error: " ",
            indicator: false
        })
    }

    handleLoginFail(){
        this.setState({ 
            error: "Authentication Failed",
            indicator: true })
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Welcome !</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input 
                            
                            autoCorrect = {false}
                            value={this.state.email}
                            onChangeText= { email => {this.setState({email})}}
                            placeholder="Username" 
                            autoFocus= {true} />
                        </Item>
                        <Item last>
                            <Input 
                            
                            autoCorrect={false}
                            value= {this.state.password}
                            onChangeText={ password => { this.setState({ password}) }}
                            placeholder="Password" 
                            secureTextEntry={true}/>

                        </Item>
                        <Button 
                        onPress={this.onLoginPress.bind(this)}
                        
                        block style={styles.ButtonStyle}>
                            <Text>Log In</Text>
                        </Button>
                    </Form>

                    <Text style={styles.errorStyle}>
                        {this.state.error}
                    </Text>

                    {

                      (this.state.indicator) ? <ActivityIndicator /> : null

                    }

                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={styles.textContent}>
                                    New To Here ? Please
                </Text>
                                <Button full success  >
                                    <Text>Sign In</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
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
