import React from "react";
import { StyleSheet, Text, View,Image} from "react-native";
import LoginBtn from "../components/LoginBtn";
import OrSeparator from "../components/OrSeparator";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/FontAwesome'; 
import SocialBtn from '../components/SocialBtn'
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import { Stack, TextInput, IconButton,Button } from "@react-native-material/core";
 import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {Vibration} from 'react-native-web';

export default function LoginScreen( {navigation} ) {
    return (
    
        <View style={styles.container}>
        <Text style={styles.hello}>Welcome Back</Text>
        <Text style={styles.appTitle}>To Haam</Text>

        <Text style={styles.codebelow}>Hello There,Sign in To Continue!</Text>

        <TextInput
        variant="outlined"
        color="#ff8c00"
        style={{width:'80%',marginHorizontal:10,}}
      label="Enter your full name"
      leading={props => <Icon name="account" {...props} />}
    />
        
       
          <TextInput
            variant="outlined"
            color="#ff8c00"
        style={{width:'80%',marginHorizontal:10,margin:1}}
      label="Enter your email address"
      leading={props => <Icon name="email" {...props} />}/>


<TextInput
            variant="outlined"
            color="#ff8c00"
        style={{width:'80%',marginHorizontal:10,margin:1}}
      label="Enter your phone number"
      leading={props => <Icon name="phone" {...props} />}/>




<TextInput
            variant="outlined"
            color="#ff8c00"
        style={{width:'80%',marginHorizontal:10,margin:1}}
      label="Enter your password"
      leading={props => <Icon name="lock" {...props} />}/>





          
          <View style={styles.inputArea}>
        <LoginBtn title="LOGIN" onPress={() => navigation.navigate('Register')} />
        <Text style={styles.codeabove}>or continue with social account</Text>
        </View>
        
         
          <Button
          style={{width:300,marginBottom:10,height:45,justifyContent:'center'}}
        
      variant="outlined"
      title="sign in with google"
      color='#000'
      image={{ uri: "" }}
       leading={props => <Icon name="google" {...props} />}
       Image source={require("../assets/google-logo-9808.png")}  
        />


        <Button
         style={{width:300,height:45,justifyContent:'center'}}
      variant="outlined"
      title="sign in with facebook"
      color='#000'
      image={{ uri: "" }}
      leading={props => <Icon name="facebook" {...props} />}
      
      
        
        />
        <View>
        <Image
          
        />
          <Text style = {{marginTop:20,alignContent:'center'}}>
            dont have an account? sign in
          </Text>
        </View>



        <View style={styles.signupArea}>
          <OrSeparator />
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
 hello:{
  fontWeight: 'bold',
  fontFamily: 'Roboto',
  fontSize: 27,
  marginTop:200,
  color: '#000',

 },
  container: {
    image:'../assets/haam logo.png',
    backgroundColor: '#fff',
    maxHeight: '100%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  google:{marginBottom:20,

  },
  codeabove:{
    fontWeight: 'bold', color: '#a5a5a5',textAlign:'center',marginTop:10,marginBottom:10
  },
   codebelow:{
     fontWeight: 'bold', color: '#a5a5a5',textAlign:'center',marginTop:30,marginBottom:10   
    },
  appTitle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 27,
    
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E1D9D1',
    height: 50,
    marginBottom: 10,
    marginTop: 10,
    minWidth: '80%',
    borderRadius: 15,
    color: 'black',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width:300 
    
    
  
  },
  inputArea: {display:'flex',flexDirection:'column',justifyContent:'center'
  
  },
  signupArea: {
    marginTop: 10,
  },
});