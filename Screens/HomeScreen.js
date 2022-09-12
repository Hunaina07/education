import React from 'react'
   import { useState , useEffect } from 'react';
  import { NavigationContainer } from '@react-navigation/native';
   import axios from 'axios';
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
        import Icon from 'react-native-vector-icons/Ionicons'

 function HomeScreen({navigation}) {
          return (
           
            <View>
              <View style = {styles.icon}>
                <Text><Icon style = {{color : '#4040a1'}} name = "card-outline" size={60}/></Text>
                <Text><Icon style = {{color : '#4040a1'}} name = "card-outline" size={60}/></Text>
                <Text><Icon style = {{color : '#4040a1'}} name = "card-outline" size={60}/></Text>
                <Text><Icon  style = {{color : '#4040a1'}} name = "card-outline" size={60}/></Text>
              </View>
              <View style = {styles.text}>
                <Text style = {styles.mainIcon}>Coding</Text>
                <Text style = {styles.mainIcon}>Coding</Text>
                <Text style = {styles.mainIcon}>Coding</Text>
                <Text style = {styles.mainIcon}>Coding</Text>
              </View>
              <View style = {styles.icon}>
                <Text><Icon style = {{color : '#4040a1'}} name = "card-outline" size={60}/></Text>
                <Text><Icon style = {{color : '#4040a1'}} name = "card-outline" size={60}/></Text>
                <Text><Icon style = {{color : '#4040a1'}} name = "card-outline" size={60}/></Text>
                <Text><Icon style = {{color : '#4040a1'}} name = "card-outline" size={60}/></Text>
              </View>
              <View style = {styles.text}>
                <Text style = {styles.mainIcon}>Coding</Text>
                <Text style = {styles.mainIcon}>Coding</Text>
                <Text style = {styles.mainIcon}>Coding</Text>
                <Text style = {styles.mainIcon}>Coding</Text>
              </View>
           
            <View>
              <Text style = {{fontWeight : 'bold',fontSize : 30 , textAlign : "center" , marginTop : 5 }}>Categories</Text>
            </View>
           <View>
              <TouchableOpacity style = {styles.line}>
              <Text style = {styles.cards} onPress={()=>navigation.navigate('Lesson')}>Designing</Text>
              <Text style = {styles.cards}  onPress={()=>navigation.navigate('Lesson')}>Development</Text>
              <Text  style = {styles.cards} onPress={()=>navigation.navigate('Lesson')}>Designing</Text>
              <Text style = {styles.cards}  onPress={()=>navigation.navigate('Lesson')}>Designing</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.line}>
              <Text style = {styles.cards}  onPress={()=>navigation.navigate('Lesson')}>Designing</Text>
              <Text style = {styles.cards}  onPress={()=>navigation.navigate('Lesson')}>Development</Text>
              <Text style = {styles.cards}  onPress={()=>navigation.navigate('Lesson')}>Designing</Text>
              <Text style = {styles.cards}  onPress={()=>navigation.navigate('Lesson')}>Designing</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.line}>
              <Text style = {styles.cards}  onPress={()=>navigation.navigate('Lesson')}>Designing</Text>
              <Text style = {styles.cards}  onPress={()=>navigation.navigate('Lesson')}>Development</Text>
              <Text style = {styles.cards}  onPress={()=>navigation.navigate('Lesson')}>Designing</Text>
              <Text  style = {styles.cards} onPress={()=>navigation.navigate('Lesson')}>Designing</Text>
              </TouchableOpacity>
              <TouchableOpacity  style = {styles.navigate}>
                <Text style = {styles.btn}  onPress={()=>navigation.navigate('Splash')}>GO BACK</Text>
                <Text style = {styles.btn} onPress={()=>navigation.navigate('Profile')}>GO To Settings</Text>
              </TouchableOpacity>
            </View>
            </View>
          
          )
 }

        const styles = StyleSheet.create({
            icon:{
              flexDirection : 'row',
               justifyContent : 'space-between',
               marginHorizontal : 20,
               marginVertical : 25,
              
            },
            text:{
             flexDirection : 'row',
             justifyContent : "space-between",
         
            },
            mainIcon :{
              fontWeight : 'bold',
              fontSize : 20,
            },
            navigate:{
              flexDirection : 'row',
              justifyContent : 'space-between',
              paddingHorizontal : 10,
              marginTop :5,
            },
            btn:{
              fontSize : 20,
              fontWeight : "bold",
              backgroundColor : "red",
              color : "white",
              padding : 10,
            },
           line :{
                flexDirection : 'row',
                justifyContent : 'space-between',
               height :64,
               marginTop : 40,
            
           },
           cards:{
            width : "22%",
            backgroundColor  : "#eae9e7",
           //  flexDirection : "row",
            borderTopColor : "#eee",
            textAlign:"center",
            backgroundColor : "#80ced6",
            color :"white",
           },
            
        })
        export default HomeScreen;