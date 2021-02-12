import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase'
export default class SignupLoginScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            emailID:'',
            password:'',
        }
    
    
    }
    userLogin = (username,password) =>{
        firebase.auth().signInWithEmailAndPassword(username, password).then(()=>{
            return Alert.alert("Successfully Logged In")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessgae = error.message;
            return Alert.alert(errorMessage)
        })
        
    }
    userSignUp = (username, password) => {
        firebase.auth().createUserWithEmailAndPassword(username, password).then((response)=>{
            return Alert.alert("User Added Successfully")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        });
        
      
    }
    render(){
        return(
            <View>
            <TextInput style = {styles.logInBox} placeholder = "email" placeholderTextColor = "grey" keyboardType = "email-address" onChangeText = {(text)=>{
                this.setState({emailID: text}) 
            }}  />
            <TextInput style = {styles.logInBox} placeholder = "password" placeholderTextColor = "grey" secureTextEntry = {true} onChangeText = {(text)=>{
                this.setState({password: text}) 
            }}  />
            <TouchableOpacity style = {[styles.button, {marginTop:20, marginBottom:20}]} onPress = {()=>{
                this.userLogin(this.state.emailID, this.state.password)
            }}> <Text style = {styles.buttonText}>Log In</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.button}  onPress = {()=>{
                this.signUp(this.state.emailID, this.state.password)
            }}> <Text style = {styles.buttonText}>Sign Up</Text></TouchableOpacity>
        </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    // profileContainer:{
    //   flex:1,
    //   justifyContent:'center',
    //   alignItems:'center',
    // },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    logInBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    // buttonContainer:{
    //   flex:1,
    //   alignItems:'center'
    // }
  })