import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
import Login from './Login';

function Signup({navigation}) {
  return (
    <View style = {styles.main}>
  <Text style = {styles.heading}>SIGNUP</Text>
  <TextInput style = {styles.input} placeholder = "Enter Name"/>
  <TextInput style = {styles.input} placeholder = "Enter Email"/>
  <TextInput style = {styles.input} placeholder = "Enter Password"/>
<TouchableOpacity >
 <Text style = {styles.button} onPress =  {()=> navigation.navigate('Login')}>SIGNUP</Text>
</TouchableOpacity>
</View>
  )
}

const styles = StyleSheet.create({
    input:{
      marginTop : 20 ,
      width : "90%",
      backgroundColor:"#eae9e7",
      fontSize : 20,
      paddingHorizontal : 15,
      borderRadius : 8,
      marginBottom : 20
    
    },
    container:{
      flex : 1,
      textAlign:"center",
      justifyContent:"center",
    },
    heading : {
          fontWeight : "bold",
           color : "#000",
           fontSize : 20,
           textAlign : "center"
  
    },
    button :{
      color : "white",
      width : "40%",
      backgroundColor:"#6b5b95",
      fontSize : 20,
      paddingHorizontal : 15,
      borderRadius : 8,
      marginBottom : 20,
      alignItems : "center",
      textAlign:"center",
      marginHorizontal : 70,
      padding : 10,
  
    },
   main :{
        flex : 1,
      alignItems : "center",
      justifyContent : "center",
   }
  })
  

export default  Signup;


