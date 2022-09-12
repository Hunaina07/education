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
  Image,
} from 'react-native';


 function Lesson({navigation}) {
 
  return (
    <View>
         <Text style = {{fontWeight : "bold" , fontSize : 30 , textAlign : "center" , marginTop : 20}}>Lessons</Text>
    <View>
         <View style = {{flexDirection : "row" , justifyContent : "space-between" , height :100}} >
          <Text onPress={()=>navigation.navigate('Detail')} style  = {styles.cards} >Development</Text>
          <Text onPress={()=>navigation.navigate('Detail')}  style = {styles.cards}>Designing</Text>
        </View>
        <View style = {{flexDirection : "row" , justifyContent : "space-between" , marginTop : 10 ,height :100}}>
          <Text onPress={()=>navigation.navigate('Detail')} style = {styles.cards}>UI/UX</Text>
          <Text onPress={()=>navigation.navigate('Detail')} style = {styles.cards}>Texting</Text>
        </View>
        <View style = {{flexDirection : "row" , justifyContent : "space-between" , marginTop : 10 ,height :100}}>
        <Text onPress={()=>navigation.navigate('Detail')} style = {styles.cards}>Video</Text>
        <Text onPress={()=>navigation.navigate('Detail')} style = {styles.cards}>Coding</Text>
        </View>
        <View style = {{flexDirection : "row" , justifyContent : "space-between" , marginTop : 10 ,height :100}}>
        <Text onPress={()=>navigation.navigate('Detail')} style = {styles.cards}>Video</Text>
        <Text onPress={()=>navigation.navigate('Detail')} style = {styles.cards}>Coding</Text>
        </View>
        <View style = {{flexDirection : "row" , justifyContent : "space-between" , marginTop : 10 ,height :100}}>
        <Text onPress={()=>navigation.navigate('Detail')} style = {styles.cards}>Video</Text>
        <Text onPress={()=>navigation.navigate('Detail')} style = {styles.cards}>Coding</Text>
        </View>
        <TouchableOpacity  style = {styles.navigate}>
                <Text style = {styles.btn}  onPress={()=>navigation.navigate('HomeScreen')}>GO BACK</Text>
                <Text style = {styles.btn} onPress={()=>navigation.navigate('Profile')}>GO SETTING</Text>
              </TouchableOpacity>
    </View>
    </View>
  )}
 
const styles = StyleSheet.create({
  title : {
      fontWeight : "bold"  ,
      fontSize : 20,
   },
   input : {
    backgroundColor : "#eae9e7",
    width : "90%",
    marginHorizontal : 30,
    paddingHorizontal : 10,
}, 
   cards:{
      width : "40%",
      backgroundColor  : "#eae9e7",
     //  flexDirection : "row",
      borderTopColor : "#eee",
      borderTopWidth : 1,
      padding : 40,

   },
   navigate:{
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : 10,
    marginTop : 5,
  },
  btn:{
    fontSize : 20,
    fontWeight : "bold",
    backgroundColor : "red",
    color : "white",
    padding : 10,
  },
})

export default Lesson;
