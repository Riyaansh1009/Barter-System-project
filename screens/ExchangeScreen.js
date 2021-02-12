import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase'
import db from 'firebase'
export default class ExchangeScreen extends React.Component{


  addItem =(item,description) =>{
      var userName = this.state.userName;
    db.collection("exchange requests").add({
        "username": userName,
        "itemname": itemName,
        "description": description,
    })
    this.setState({
        itemName: '',
        description: ''
    })
    return Alert.alert(
        "Item ready to exchange",
        '',
        [
            {text: Ok, onPress: ()=>{
                this.props.navigation.navigate('HomeScreen')
            }}
        ]
    );

  }
  

    constructor(){
        super();
        this.state = {
            emailID:'',
            password:'',
        }
    
    
    }
render(){
    return(
       
            <View>
               {/* <MyHeader title = "Exchange"/> */}
                <KeyboardAvoidingView style = {styles.keyboardStyle}>
                    <TextInput style = {styles.formTextInput} placeholder = "Item Name"  onChangeText = {(text)=>{this.setState({bookName:text})}} value = {this.state.bookName}/>
                    <TextInput style = {[styles.formTextInput, {height:300}]} placeholder = "Description"  onChangeText = {(text)=>{this.setState({reason:text})}} value = {this.state.reason} multiline numberOfLines = {8}/>
                    <TouchableOpacity style = {styles.button} onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}>
                        <Text> Request </Text>
<Text>{this.state.userID}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
            
        
        )
        
    
}

}