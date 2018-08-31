/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,StatusBar,TouchableOpacity} from 'react-native';
import {createDrawerNavigator,DrawerActions} from 'react-navigation';

class DrawerComponent extends Component{
    render(){
        return (
            <View style={{flex:1,backgroundColor:"#2a7a3d",justifyContent: "center",alignItems: "center"}}>
                <Text style={{fontSize: 20,color:"#fff",textAlign: "center"}}>This is Drawer</Text>
            </View>
        )
    }
}

class Home extends Component<Props>{
  render(){
      return <TouchableOpacity onPress={()=>{
        this.props.navigation.dispatch(DrawerActions.openDrawer())
      }} style={{flex:1,paddingTop: 20,backgroundColor:"#fff",justifyContent: "center",alignItems: "center"}}><Text style={{fontSize:20,textAlign: "center"}}>Click anywhere to To Open</Text></TouchableOpacity>
  }
}

const DrawerNav = createDrawerNavigator({
    Home:{screen:Home}
},{
    contentComponent:({nav})=>{
        return (
            <DrawerComponent />
        )
    }
});

export default class App extends Component<Props> {
  render() {
    return (
        <View style={{flex:1,backgroundColor: "#fff"}}>
            <StatusBar translucent={true} barStyle={"dark-content"} backgroundColor={"transparent"} />
            <DrawerNav />
        </View>
    )
  }
}
