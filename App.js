import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
import React  from 'react';
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
import Detail from './Screens/Detail'
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Splash from './Screens/Splash';
import HomeScreen from './Screens/HomeScreen';
import Profile from './Screens/Profile';
import Lesson from './Screens/Lesson';

const App  = () => {
  return (

   
   <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Lesson" component={Lesson} />
    </Stack.Navigator>
    </NavigationContainer> 

  

  );
};



export default App;
