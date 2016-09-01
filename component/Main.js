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
    TabBarIOS,
    NavigatorIOS
}from 'react-native';

//引入控制器
var Home = require('../component/Home');
var Find = require('../component/Find');
var Message = require('../component/Message');
var Mine = require('../component/Mine');

var Main = React.createClass({

    //初始化方法
    getInitialState(){
        return{
            //默认首页被选中
            selectedItem:'NNhome'
        }
    },


    render(){
        return(
            <TabBarIOS
                tintColor = "orange"
            >
                {/*首页*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_home')}
                    title = '首页'
                    selected = {this.state.selectedItem == 'NNhome'}
                    onPress={()=>{this.setState({selectedItem:'NNhome'})}}
                >
                    <NavigatorIOS
                        style = {{flex:1}}
                        initialRoute = {
                            {
                                component:Home,
                                title:'主页'
                            }
                        }

                    />
                </TabBarIOS.Item>


                {/*发现*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_discover')}
                    title = '发现'
                    selected = {this.state.selectedItem == 'NNfind'}
                    onPress={()=>{this.setState({selectedItem:'NNfind'})}}
                >
                    <NavigatorIOS
                        style = {{flex:1}}
                        initialRoute = {
                        {
                            component:Find,
                            title:'发现'
                        }
                        }

                    />
                </TabBarIOS.Item>


                {/*消息*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_message_center')}
                    title = '消息'
                    selected = {this.state.selectedItem == 'NNmessage'}
                    onPress={()=>{this.setState({selectedItem:'NNmessage'})}}

                >
                    <NavigatorIOS
                        style = {{flex:1}}
                        initialRoute = {
                        {
                            component:Message,
                            title:'消息'
                        }
                        }

                    />
                </TabBarIOS.Item>


                {/*我的*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_profile')}
                    title = '我的'
                    selected = {this.state.selectedItem == 'NNmine'}
                    onPress={()=>{this.setState({selectedItem:'NNmine'})}}
                >
                    <NavigatorIOS
                        style = {{flex:1}}
                        initialRoute = {
                        {
                            component:Mine,
                            title:'我的'
                        }
                        }

                    />
                </TabBarIOS.Item>

            </TabBarIOS>
        )
    }
});



const styles = StyleSheet.create({

});

module.exports = Main;


// AppRegistry.registerComponent('NeteaseNews', () => NeteaseNews);

