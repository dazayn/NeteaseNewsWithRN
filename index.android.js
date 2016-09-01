/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Text
}from 'react-native';


var Main = require('./component/Main');


var NeteaseNews = React.createClass({
  render(){
    return(
        <Main />
    )
  }
});



const styles = StyleSheet.create({
  coutainer:{
  }
});


AppRegistry.registerComponent('NeteaseNews', () => NeteaseNews);
