import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation,useIsFocused } from '@react-navigation/native'
import { useState } from 'react';
import firestore from "@react-native-firebase/firestore"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from  '@react-native-firebase/storage';
export default function UserData() {

  const isFocuse = useIsFocused();
  const navigation = useNavigation();
const [Name,setName] = useState('');
const [About,setAbout] = useState('');
const[uid,setuid] = useState('');
const[number,setnumber] = useState('');
const [imageUrl, setImageUrl] = useState(undefined);
const[Dpuri,setDPuri] = useState('');
const [ImagePath,setImagePath] = useState('')


useEffect(async() => {

  const NUm = await AsyncStorage.getItem('Phnum');
  setnumber(NUm);
  getData()
  const func = async () =>{
    storage().ref(ImagePath).getDownloadURL().then((url) => {
      setImageUrl(url);
    })
    

  }
 
setDPUrl()
getDPUrl()
  },[isFocuse]);
  

const setDPUrl = async()=>{

await AsyncStorage.setItem('DP',imageUrl)

}
const getDPUrl = async()=>{

const Dp = await AsyncStorage.getItem('DP');


setDPuri(Dp)

}

  const pickImageAndUpload=() =>{
    launchImageLibrary({quality:0.5},(fileobj)=>{
const uploadTask =storage().ref().child(`/userprofile/${Date.now()}`).putFile(fileobj.assets[0].uri);
setImagePath(uploadTask._ref.path)

      uploadTask.on('state_changed', (snapshot)=>{


        var progress = (snapshot.bytesTransferred/ snapshot.totalBytes) * 100;
    if(progress == 100)
    alert("Profile Uploaded")
        
      },
      
     async (error)=>{
    alert('upload faild')
      },
      ()=>{
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
 
      setImageUrl(downloadURL)

    });
      } 
      );
    })
  }

const getData = async()=>{
 const Uid = await AsyncStorage.getItem('Id');
 setuid(Uid);
 try{
const data = await firestore().collection('User').doc(uid).get();

setName(data._data.firstName)
setAbout(data._data.about)
setPhnum(data._data.Number)
 }catch(e){ 
   console.log(e)
 }
}
const userData={
  id:uid,
  firstName:Name,
 about:About,
 Number:number

}
const setUserData = async ()=>{
  await AsyncStorage.setItem('name',Name);
 await AsyncStorage.setItem('about',About);
  try{
 const response = await firestore().collection("User").doc(uid).set(userData)
navigation.navigate('MainScreen')
}catch(e){
console.log(e)
}

}

  return (
    <View style={{flex:1}}>
      <View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:'2%'}}>
      <Text style={{color:'blue',}}></Text>
      <TouchableOpacity  onPress={()=>{navigation.navigate('MainScreen')}}>
      <Text style={{color:'blue',justifyContent:'space-between'}}>Skip</Text>
      </TouchableOpacity>
      </View>
     <View style={{justifyContent:'center',alignItems:'center',
     height:'30%',}}>
      <TouchableOpacity onPress={()=>{pickImageAndUpload()}} >
      <Image source={{uri:Dpuri} } 
      style={{height:120,width:120,borderRadius:60}} />
      </TouchableOpacity>
      <Text style={{marginTop:'5%'}}>Change profile</Text>
     </View>
     <View style={{height:'70%',marginHorizontal:'5%',marginTop:'5%'}}>
      <View>
      <Text style={{fontSize:18}}>Name</Text>
      <View style={{backgroundColor:'white',marginVertical:10,borderRadius:10,paddingHorizontal:10}}>
      <TextInput  placeholder='Enter Name'
      value={Name}
      onChangeText={txt=>{setName(txt)}}
      />
      </View>
      </View>
      <View>
      <Text style={{fontSize:18}}>About</Text>
      <View style={{backgroundColor:'white',marginVertical:10,borderRadius:10,paddingHorizontal:10}}>
      <TextInput  placeholder='About You'
       value={About}
       onChangeText={txt=>{setAbout(txt)}}
      />
      </View>
      <TouchableOpacity
      onPress={()=>{setUserData()}}
      style={{alignSelf:'center',marginTop:'5%',backgroundColor:'#7bb7c9',
    paddingVertical:10,borderRadius:10,width:'60%',alignItems:'center'
    }}>
        <Text style={{color:'white'}}>Continuse</Text>
      </TouchableOpacity>
      </View>
     </View>

    </View>
  )
}