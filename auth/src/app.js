import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA5lYnnkGU9ayKo7NxTnCPAyoTdRTwHrWw',
      authDomain: 'auth-b1f54.firebaseapp.com',
      databaseURL: 'https://auth-b1f54.firebaseio.com',
      projectId: 'auth-b1f54',
      storageBucket: 'auth-b1f54.appspot.com',
      messagingSenderId: '639894756325'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
