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
    ListView,
    TouchableOpacity
}from 'react-native';


var Dimensions = require('Dimensions');
var widthRight = (Dimensions.get('window').width) - 110;

var NewsDetail = require('../component/NewsDetail');

//导入json数据
var LocalData = require('../LocalData.json');

var Home = React.createClass({

    getDefaultProps(){
        return {
            url_api:"http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=3&prog=LMA1&passport=&devId=wOT4KEuiWbGMPNAfO7OA6ftwNsVFz0kurmHvZ8XuoPAvLRLBDP%2BysxYwz0MC0Q6l&offset=0&size=20&version=14.1&spever=false&net=wifi&lat=TI34W8auQfF3bgwo1twU%2FQ%3D%3D&lon=v2%2FQA8RDlDD%2BtZHq4VGVqg%3D%3D&ts=1471591215&sign=%2B%2F6QIgZBTjKVdDHp9NucJIiqWxbmUjwAvr6nQmv%2F1j148ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore",
            key_word:'T1348647853363'
        }
    },

    getInitialState(){
        return {
            //头部数据源
            headerDataArr:[],
            //cell数据源
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2) => ri !== r2
            })
        }
    },


    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        )
    },

    //cell设置
    renderRow(rowData){
      return(
       <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.pushNewsDetail(rowData)}}>
           <View style={styles.cellViewStyle}>
               {/*左边*/}
               <Image source={{uri:rowData.imgsrc}} style={styles.imgStyle}/>
               {/*右边*/}
               <View style={styles.rightViewStyle}>
                   <Text style={styles.topTitleStyle}>{rowData.title}</Text>
                   <Text style={styles.subTitleStyle}>{rowData.digset}</Text>
                   <Text style={styles.flowTitleStyle}>{rowData.replyCount}跟帖</Text>
               </View>
           </View>
       </TouchableOpacity>
      );
    },

    //跳转新闻详情页
    pushNewsDetail(rowData){
        this.props.navigator.push({
            component:NewsDetail,
            title:rowData.title,
            passProps:{rowData}
        })
    },

    //请求数据
    componentDidMount(){
        this.loadedDataFromNet();
    },
    loadedDataFromNet(){
        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=>{

                //拿数据
                var jsonData = responseData[this.props.key_word];
                //网络加载
                this.dealWithData(jsonData)
            })
            .catch((error)=>{
                if (error){
                    // debugger;
                    //拿数据
                    var jsonData = LocalData[this.props.key_word];
                    this.dealWithData(jsonData)
                }
            })
    },

    dealWithData(jsonData){

        //定义临时数据
        var headerArr = [],listDataArr = [];
        for(var i=0; i<jsonData.length;i++) {
            var data = jsonData[i];

            if (data.hasAD == 1) {
                headerArr = data.ads;
            } else {
                listDataArr.push(data);
            }
            // listDataArr.push(data)
        }
        //更新
        this.setState({
            //头部数据源
            headerDataArr:headerArr,
            //cell数据源
            dataSource:this.state.dataSource.cloneWithRows(listDataArr)
        });
    }
});



const styles = StyleSheet.create({
    cellViewStyle:{
        flexDirection:'row',
        // alignItems:'center',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,

    },
    imgStyle:{
        width:90,
        height:90
    },
    topTitleStyle:{
        fontSize:16,
        marginBottom:5

    },
    subTitleStyle:{
        color:'green'
    },
    flowTitleStyle:{
        position:'absolute',
        right:10,
        bottom:10
    },
    rightViewStyle:{
        width:widthRight,
        marginLeft:8,
        // right:8

    }
});

module.exports = Home;


// AppRegistry.registerComponent('NeteaseNews', () => NeteaseNews);

