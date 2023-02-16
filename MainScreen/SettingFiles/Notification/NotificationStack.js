import { View, Text } from 'react-native'
import React,{useEffect,useState} from 'react'
import firestore from '@react-native-firebase/firestore';
export default function NotificationStack() {

  const [data , setdata] = useState(null)
  useEffect(()=>{

getData();

  },[])


  const getData = async()=>{
  try{
const data =    await firestore().collection('MotoChat').doc("uLlUoP73t2xXPzqu0cai").get();
setdata(data._data); 

}catch(e){
    console.log(e)
  }
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Name= {data?data.Name:'loading....'}</Text>
      <Text>LastName ={data?data.Last:'loading....'}</Text>
      <Text>Age={data?data.Age:'loading....'}</Text>
    </View>
  )
}