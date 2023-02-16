import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';

const  Chatroom =({item}) =>{
  return (
    <View style={styles.container}>
    <View style={styles.messageBox}>

   <Text style={{fontSize:16,fontWeight:'600'}}>{item.msg}</Text>
   </View>
   </View>
  )
}
const styles = StyleSheet.create({

    container:{ 
padding:10
    },
messageBox:{
    backgroundColor:'#DCF8C5',
    marginLeft:50,
    borderRadius:5,
    padding:10
}
})
 
export default Chatroom;