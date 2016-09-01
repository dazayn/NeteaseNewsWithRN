
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
    Text,
    WebView
}from 'react-native';

var NewsDetail = React.createClass({

    getInitialState(){
        return{
            detailData:''
        }
    },

    render(){
        return(
            <WebView
                automaticallyAdjustContentInsets={true}
                style={styles.webView}
                source={{html:this.state.detailData,baseUrl:''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />
        )
    },
    componentDidMount(){
        var url_api = 'http://c.3g.163.com/nc/arcticle/' + this.props.rowData.docid + '/full.html';
        fetch(url_api)
            .then((response) => response.json())
            .then((responseData) => {
                var allData = responseData[this.props.rowData.docid];
                var bodyHtml = allData['body'];
                this.setState({
                    detailData:bodyHtml
                })
            })
            .catch((error) => {
                alert('请求失败');
            })
    }
});



const styles = StyleSheet.create({
    coutainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',


    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10

    }
});

module.exports = NewsDetail;


// AppRegistry.registerComponent('NeteaseNews', () => NeteaseNews);



