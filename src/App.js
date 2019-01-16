import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  state = {};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCldzBeQoIXXJ_6n4yK-KfHETtczCHdaOQ',
      authDomain: 'test-project-b9edd.firebaseapp.com',
      databaseURL: 'https://test-project-b9edd.firebaseio.com',
      projectId: 'test-project-b9edd',
      storageBucket: 'test-project-b9edd.appspot.com',
      messagingSenderId: '223812986460'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
