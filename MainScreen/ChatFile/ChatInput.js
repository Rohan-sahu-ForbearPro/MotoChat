import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Platform } from 'react-native'
import React, { useState } from 'react'

export default function ChatInput() {
    const [message,setMessage] = useState('');


  return (
    <View style={styles.container}>
      
<View style={styles.innercontainer}>
    
    <View style={styles.inputandmicro}>

        <TouchableOpacity style={styles.emojiBtn1}>

<Image 
style={{height:20,width:20}}
source={require('./ImageChat/smile.png')} />
        </TouchableOpacity>


        <TextInput
        placeholder='Type something...'
        placeholderTextColor={'grey'}
        style={styles.input}
        onChangeText={text=>{setMessage(text)}}
        />



         <TouchableOpacity style={styles.rightbtn}>
<Image 
style={{height:25,width:25}}
source={require('./ImageChat/attach-file.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightbtn}>
        <Image 
style={{height:20,width:20}}
source={require('./ImageChat/camera.png')} />
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.sendbtn}>
            {message? <Image style={{height:20,width:20}}
source={require('./ImageChat/paper-plane.png')} /> :<Image style={{height:20,width:20}}source={require('./ImageChat/microphone.png')
} />
            }
        </TouchableOpacity>
        </View>


    </View>
  )
}

const styles = StyleSheet.create({
container:{
    justifyContent:'center',
    backgroundColor:'white'
},
innercontainer:{
paddingHorizontal:10,
marginHorizontal:10,
justifyContent:'space-between',
flexDirection:'row',
paddingVertical:10
}
,
inputandmicro:{
    flexDirection:'row',
    backgroundColor:'#f0f0f0',
    flex:3,
    marginRight:10,
    paddingVertical:Platform.OS == 'ios' ? 10:0,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'space-between'
}
,
input:{
    backgroundColor:'transparent',
    paddingLeft:20,
    color: "#000",
    flex:3,
    alignSelf:'center',
    maxHeight:100,
    fontSize:15
},
rightbtn:{
    justifyContent:'center',
    alignItems:'center',
    paddingRight:15,
    paddingLeft:10,
    borderLeftWidth:1,
    borderLeftColor:"#fff"
},
emojiBtn1:{
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:10,
    
},
sendbtn:{
    backgroundColor:"#003153",
    borderRadius:50,
    height:50,
    width:50,
    alignItems:'center',
    justifyContent:'center'
}
})