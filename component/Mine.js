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

var Mine = React.createClass({
    render(){
        return(
            <View style={styles.coutainer}>
                <Text style={styles.welcome}>
                    我的
                </Text>
            </View>
        )
    }
});



const styles = StyleSheet.create({
    coutainer:{
    },
    welcome:{

    }
});

module.exports = Mine;


// AppRegistry.registerComponent('NeteaseNews', () => NeteaseNews);



