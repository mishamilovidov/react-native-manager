import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
