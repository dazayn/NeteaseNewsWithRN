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

var Message = React.createClass({
    render(){
        return(
            <View style={styles.coutainer}>
                <Text style={styles.welcome}>
                    消息
                </Text>
            </View>
        )
    }
});



const styles = StyleSheet.create({
    coutainer:{
        flex:1,
        backgroundColor:'black'

    },
    welcome:{

    }
});

module.exports = Message;


// AppRegistry.registerComponent('NeteaseNews', () => NeteaseNews);


