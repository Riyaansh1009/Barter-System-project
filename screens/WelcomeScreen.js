import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert,Modal } from 'react-native';
import firebase from 'firebase'


export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailID:'',
            password:'',
            First_Name:'',
            Last_Name:'',
            Address:'',
            Mobile_Number:'',
            username:'',
            confirmPassword:'',
            isModalVisible: false
        }
    }
    shwowModal = ()=>{
        return(
          <Modal animationType = "fade" transparent = {true} visible = {this.state.isModalVisible}>
            <View style = {stylesmodalContainer}>
              <ScrollView> 
                <KeyboardAvoidingView>
                  <Text style = {styles.modalTitle}>
                    Registration
                  </Text>
                  <TextInput style = {styles.formTextInput} placeholder = {"First Name"} maxLength ={12} onChangeText = {(text)=>{this.setState({First_Name: text})}}/>
                  <TextInput style = {styles.formTextInput} placeholder = {"Last Name"} maxLength ={12} onChangeText = {(text)=>{this.setState({Last_Name: text})}}/>
                  <TextInput style = {styles.formTextInput} placeholder = {"Phone Number"} maxLength ={10} keyboardType = {'numeric'} onChangeText = {(text)=>{this.setState({Mobile_Number: text})}}/>
                  <TextInput style = {styles.formTextInput} placeholder = {"Address"} multiline = {true} onChangeText = {(text)=>{this.setState({Address: text})}}/>
                  <TextInput style = {styles.formTextInput} placeholder = {"email"} keyboardType = {'email-address'} onChangeText = {(text)=>{this.setState({email: text})}}/>
                  <TextInput style = {styles.formTextInput} placeholder = {"password"} secureTextEntry = {true} onChangeText = {(text)=>{this.setState({password: text})}}/>
                  <TextInput style = {styles.formTextInput} placeholder = {"Confirm password"} secureTextEntry = {true} onChangeText = {(text)=>{this.setState({confirmPassword: text})}}/>
                  <View style = {styles.modalBackButton}>
                    <TouchableOpacity style = {styles.registerButton} onPress = {()=>{this.signUp(this.state.emailID, this.state.password, this.state.confirmPassword)}}>
                    <Text style = {styles.registerButtonText}> Register</Text>
                    </TouchableOpacity>
                  </View>
                  <View style = {styles.modalBackButton}>
                    <TouchableOpacity style = {styles.canceButton} onPress = {()=>{this.setState({"isModalVisible": false})}}>
                      <Text>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>
                </ScrollView>
            
            </View>
          </Modal>
        )
      }
      signUp = (email,password, confirmPassword) =>{
        if(password!== confirmPassword){
          return Alert.alert("Password does not match")
        }
        else{
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((response)=>{
         db.collection('users').add({
           First_Name:this.state.First_Name,
           Last_Name: this.state.Last_Name,
           Mobile_Number: this.state.Mobile_Number,
           Address:this.state.Address,
      
         })
         return  Alert.alert(
          'User Added Successfully',
          '',
          [
            {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
          ]
      );
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
          });
      }}
      render() {
          return(
            <View style = {styles.container}>
            <View>
              {this.shwowModal()}
            </View>
            </View>
          )
      }
      
}