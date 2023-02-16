import { View, Text } from 'react-native'

import database from '@react-native-firebase/database';
import React, { useState,useEffect } from 'react';


export default function HelpStack() {
  
  const [Data , setData] = useState(null)
  useEffect(()=>{

getData();

  },[])


  const getData = async()=>{
  try{

    const data = await database().ref('user/1').once('value')
setData(data.val())

  }catch(e){
    console.log(e)
  }
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     
  
    </View>
  )
}