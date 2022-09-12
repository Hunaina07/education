import { flexbox, style } from '@mui/system';
import React from 'react'
import Person from 'react-native-vector-icons/MaterialIcons'
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
  Image,
} from 'react-native';

export default function Profile() {
  return (
    <View>
      <View style = {styles.color}>
         <Text><Person style = {{color :"#667292"  }} name = "person" size = {90}></Person></Text>
         <Text style = {{    fontSize: 30, fontWeight : "bold"}}>Profile</Text>
      </View>
<View style = {styles.container}>
  <Text style = {styles.main}>General</Text>
  <Text style = {styles.main}>Personal Payments</Text>
  <Text style = {styles.main}>Personal Payments</Text>
  <Text style = {styles.main}>Personal Payments</Text>
  <Text style = {styles.main}>Settings</Text>
  <Text style = {styles.main}>Edit profile</Text>
  <Text style = {styles.main}>Edit profile</Text>
  </View>
  </View>
  )
}
const styles = StyleSheet.create({
    main:{
      color : "white",
      paddingHorizontal : 20,
      flexDirection : 'column',
      justifyContent : "space-between",
      fontSize: 30,
      width : "100%",
      backgroundColor : "#667292",
      paddingHorizontal : 30,
      paddingVertical : 40,
     
    },
    // container :{
    //   marginTop : 200,
    // },
   color : {
    marginHorizontal  : 130,
   

   }

})
