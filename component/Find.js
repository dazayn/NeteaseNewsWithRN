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

var Find = React.createClass({
    render(){
        return(
            <View style={styles.coutainer}>
                <Text style={styles.welcome}>
                    发现
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

module.exports = Find;


// AppRegistry.registerComponent('NeteaseNews', () => NeteaseNews);


