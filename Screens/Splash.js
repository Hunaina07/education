import React from "react";
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

 function Splash({navigation}) {
  return (
   
   <View  style = {styles.container}>
  <TouchableOpacity >
   <Text style = {styles.button}  onPress =  {()=> navigation.navigate('Signup')}>GET STARTED</Text>
  </TouchableOpacity>
  </View>
 
 
  )
}
const styles = StyleSheet.create({
  button:{
    width : "40%",
    color : "white",
    backgroundColor : "#dac292",
    borderRadius : 10,
    padding : 20,
    marginTop : 300,
    textAlign : "center",
    marginHorizontal : 110,
    justifyContent : "center",
   },
    container : {
      backgroundColor :"#b9936c",
      flex : 1,
    }
})
export default  Splash;