import { View, Text, StyleSheet,TextInput ,Image} from 'react-native'
import React from 'react'


export default function Searchbar() {
  return (
    <View style={styles.container}>
    <View style={styles.row}>
    <Image  style={{height:25,width:25,opacity:0.5,}}  source={require('./ChatFile/ImageChat/search.png')}   />
       <TextInput  style={styles.input} placeholder='Search' maxLength={10}/>
       
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
paddingVertical:20,
paddingHorizontal:10,

},
input:{
paddingHorizontal:30,
 backgroundColor:'#f0f0f0',
fontSize:15,
height:45,
flex:1
},
row:{
     backgroundColor:'#f0f0f0',
     flexDirection:'row',
     borderRadius:10,
     height:45,
     alignItems:'center',
     paddingHorizontal:10
}


})