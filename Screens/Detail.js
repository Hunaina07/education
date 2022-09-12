import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react';
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

import styles from '../Style';

export default function Detail({navigation}) {
    const [mydata, setmydata] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      console.log(res.data)
      setmydata(res.data)
    })
  }, [])
    
  return (
    <>
      <ScrollView>
        {

          mydata.map((e, i) => {
            return <>

              <TouchableOpacity onPress={() => navigation.navigate('Card', { e: e })}>
{/* <TouchableOpacity> */}
                <View style ={styles.my5}>
                  <View style={[styles.bgWhite, styles.mx1, styles.shadow1]}>
                    <View style={[styles.mx1, styles.my1]}>
                      <Text style={[styles.textBold, styles.fs4]}>TITLE: </Text>
                      <Text style={[styles.fs4]}>{e.title}</Text>
                    </View>
                    <View style={[styles.mt1, styles.mx1, styles.flexRow, styles.alignItemsCenter]}>
                      <Text style={[styles.textBold, styles.fs4]}>ID: </Text>
                      <Text style={[styles.textBold, styles.fs4]}>{e.id}</Text>
                    </View>
                    <View style={[styles.mx1, styles.flexRow, styles.alignItemsCenter]}>
                      <Text style={[styles.textBold, styles.fs4]}>Price: </Text>
                      <Text style={[styles.textBold, styles.fs4]}>{e.price}</Text>
                    </View>
                    <View style={[styles.mx1, styles.flexRow, styles.alignItemsCenter]}>
                      <Text style={[styles.textBold, styles.fs4]}>Category: </Text>
                      <Text style={[styles.fs4]}>{e.category}</Text>
                    </View>

                    <View style={[styles.mx1, styles.flexRow, styles.alignItemsCenter]}>
                      <View style={[styles.flexRow]}>


                        <Text style={[styles.textBold, styles.fs4]}>Rate: </Text>
                        <Text style={[styles.fs4, styles.me2]}>{e.rating.rate}</Text>

                        <Text style={[styles.textBold, styles.fs4]}>Count: </Text>
                        <Text style={[styles.fs4, styles.me2]}>{e.rating.count}</Text>

                      </View>
                    </View>

                    <View style={[styles.mx1, styles.my1]}>
                      <Text style={[styles.textBold, styles.fs4]}>Description: </Text>
                      <Text style={[styles.fs4]}>{e.description}</Text>
                    </View>


                    <View style={[styles.my3,styles.justifyContentCenter,styles.alignItemsCenter]}>
                      <Image
                        source={{ uri: e.image }}
                        style={{width:300,height:400 }}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

            </>
          })

        }
      </ScrollView>
    </>
  );
   
}




// const [mydata, setmydata] = useState([])
//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products').then(res => {
//       console.log(res.data)
//       setmydata(res.data)

//     })
//   }, [])


// export default function Detail() {
//   return (
//     {
//         mydata.map((e,i)=>{
//             return<>
//                 <View>
//                 <Text>{e.id}</Text>
//                 </View>

//             </>
//         })
//     }
//   )}
    

 

// function Detail({navigation}) {

//     const [data, setData] = useState([])

//     useEffect(() => {
//         axios.get('https://phplaravel-704365-2879244.cloudwaysapps.com/api/jawan_pakistan/Designing')
//             .then(res => {
//                 console.log(res.data);
//                 setData(res.data);
//                 console.log(data);
//             })
//     }, [])
//     return (
//         <View>
//             <View>
//                 <Text style = {{fontWeight:"bold" , fontSize  : 30}}>IKEA</Text>
//                 <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eveniet id molestias obcaecati eaque magni. Est tempora minima aliquid asperiores quibusdam. Tempora soluta maiores, incidunt similique odit sint deleniti ut!</Text>
//             </View>
//             <View>
//                 <Text style = {{fontWeight:"bold" , fontSize  : 30}}>IKEA</Text>
//                 <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eveniet id molestias obcaecati eaque magni. Est tempora minima aliquid asperiores quibusdam. Tempora soluta maiores, incidunt similique odit sint deleniti ut!</Text>
//             </View>
//             <View>
//                 <Text style = {{fontWeight:"bold" , fontSize  : 30}}>IKEA</Text>
//                 <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eveniet id molestias obcaecati eaque magni. Est tempora minima aliquid asperiores quibusdam. Tempora soluta maiores, incidunt similique odit sint deleniti ut!</Text>
//             </View>
//             <View>
//                 <Text style = {{fontWeight:"bold" , fontSize  : 30}}>IKEA</Text>
//                 <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eveniet id molestias obcaecati eaque magni. Est tempora minima aliquid asperiores quibusdam. Tempora soluta maiores, incidunt similique odit sint deleniti ut!</Text>
//             </View>
//             <View>
//                 <Text style = {{fontWeight:"bold" , fontSize  : 30}}>IKEA</Text>
//                 <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eveniet id molestias obcaecati eaque magni. Est tempora minima aliquid asperiores quibusdam. Tempora soluta maiores, incidunt similique odit sint deleniti ut!</Text>
//             </View>
//             <View>
//                 <Text style = {{fontWeight:"bold" , fontSize  : 30}}>IKEA</Text>
//                 <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eveniet id molestias obcaecati eaque magni. Est tempora minima aliquid asperiores quibusdam. Tempora soluta maiores, incidunt similique odit sint deleniti ut!</Text>
//             </View>
//             <TouchableOpacity  style = {styles.navigate}>
//                 <Text style = {styles.btn}  onPress={()=>navigation.navigate('Lesson')}>GO BACK</Text>
//                 <Text style = {styles.btn} onPress={()=>navigation.navigate('HomeScreen')}>BACK TO HOME</Text>
//               </TouchableOpacity>
//         </View>
    
//     )
// }
// const  styles = StyleSheet.create({
//     navigate:{
//         flexDirection : 'row',
//         justifyContent : 'space-between',
//         paddingHorizontal : 10,
//       },
//       btn:{
//         fontSize : 20,
//         fontWeight : "bold",
//         backgroundColor : "red",
//         color : "white",
//         padding : 10,
//       },
// })

// export default Detail;





