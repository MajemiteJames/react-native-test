import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import {Provider} from 'react-redux';
import {store} from './redux/store';

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import BooksList from './components/Movies';


export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
  }
}

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  Movies: {
    screen: BooksList
  }
},{
    initialRouteName: "Home",
     contentOptions: {
        activeTintColor: '#e91e63'
     }
  });

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



