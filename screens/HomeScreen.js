import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert,FlatList,keyExtractor,ListItem } from 'react-native';
import firebase from 'firebase'
import db from 'firebase'
export default class HomeScreen extends React.Component{

    renderItem =({item,i}) =>{
        console.log(item.item_name);
        return(
            <ListItem
            key = {i}
            title = {item.item_name}
            subtitle = {item.description}
            titleStyle ={{color: 'black', fontWeight: 'bold'}}
            rightElement ={
                <TouchableOpacity style = {StyleSheet.button}>
                    <Text style = {{color: '#ffff'}}>Exchange</Text>
                </TouchableOpacity>
    
            }
            bottomDivider
            />
        )
    }
    render(){
        return(
            <FlatList keyExtractor = {this.keyExtractor}
            data = {this.state.allRequests}
            renderItem = {this.renderItem}
            />
                
          
        )
    }
}
const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })