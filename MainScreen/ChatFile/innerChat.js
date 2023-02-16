import { View, Text, Image, TouchableOpacity,FlatList, SafeAreaView, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import ChatInput from './ChatInput';
import Chatroom from './Chatrom';


export default function innerChat({route}) {

 
  const name = route.params.name;
  const img = route.params.img;
 const navigation = useNavigation();



 const [messages, setMessages] = useState([]);

 useEffect(() => {
   setMessages([
     {
       _id: 1,
       text: 'Hello developer',
       createdAt: new Date(),
       user: {
         _id: 2,
         name: 'React Native',
         avatar: 'https://placeimg.com/140/140/any',
       },
     },
   ])
 }, [])

 const onSend = (messages = []) => {
   setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
 }


  return (
    <View style={{flex:1,}}>


     <View style={{flexDirection:'row',
     justifyContent:'space-between',
     backgroundColor:'white',height:'8%',marginTop:'1%'}}> 
   
   
     <TouchableOpacity 
     style={{width:"10%",justifyContent:'center'}} 
     onPress={()=>{navigation.goBack()}}>

<Image    source={require('./ImageChat/left.png')} style={{width:35,height:35}} />
     </TouchableOpacity>
<View style={{flexDirection:'row',width:'70%',alignItems:'center'}}>
<TouchableOpacity
  onPress={()=>{  navigation.navigate('showDp',{Dp:img})
}} 
>
<Image 
style={{height:45,width:45,borderRadius:22.5,marginHorizontal:'3%'}}
source={img}  />
</TouchableOpacity>

<TouchableOpacity 
style={{width:'80%'}}
onPress={()=>{navigation.navigate('userInfo',{name:name,Dp:img})}}>
<Text style={{fontWeight:'600',fontSize:18}}>{name}</Text>
<Text>online</Text>
</TouchableOpacity>
</View>
<TouchableOpacity style={{width:"10%",justifyContent:'center'}}>


  <Image 
  
style={{height:25,width:25,opacity:0.5,alignSelf:'center'}}

  source={require('./ImageChat/video-camera.png')}  />
</TouchableOpacity>
<TouchableOpacity style={{width:"10%",justifyContent:'center'}}>


  <Image 
  
style={{height:20,width:20,opacity:0.5,alignSelf:'center'}}

  source={require('./ImageChat/phone-call.png')}  />
</TouchableOpacity>
     </View>

    <ImageBackground source={require('./ImageChat/BG.png')}
 > 

<View   style={{height:'82%'}}>

    </View>
  
    <View style={{height:'14%',}}>
    <ChatInput />
    </View>
    </ImageBackground>
     </View>

  )
}  

