import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState ,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from "@react-native-firebase/firestore";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Auth from "@react-native-firebase/auth";
import { useNavigation, StackActions, useIsFocused } from '@react-navigation/native'

import { ref, getDownloadURL,} from '@react-native-firebase/storage';
import storage from '@react-native-firebase/storage';
export default function EditiProfile() {
  const [imageUrl, setImageUrl] = useState(undefined);
  const[Dpuri,setDPuri] = useState('');
    const[name,setName] = useState('');
    const[About,setAbout] = useState('');
    const[Phnum,setPhnum] = useState('');
  const [ImagePath,setImagePath] = useState('')

  const isFocuse = useIsFocused();
    const navigation = useNavigation();
    useEffect(async() => {
        getData()
        const func = async () =>{
          storage().ref(ImagePath).getDownloadURL().then((url) => {
            setImageUrl(url);
          })
          
    
        }
        const name =await AsyncStorage.getItem('name');
        const about = await AsyncStorage.getItem('about')
        const num = await AsyncStorage.getItem('Phnum')
        setPhnum(num)
        setAbout(about)
        setName(name)
       
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

const Refresh=async()=>{

    storage().ref(ImagePath).getDownloadURL().then((url) => {
      setImageUrl(url);
    }) 
  setDPUrl()
  getDPUrl()
}
        const pickImageAndUpload=() =>{

          launchImageLibrary({quality:0.5},(fileobj)=>{
const uploadTask =storage().ref().child(`/userprofile/${Date.now()}`).putFile(fileobj.assets[0].uri);
setImagePath(uploadTask._ref.path)

            uploadTask.on('state_changed', (snapshot)=>{


              var progress = (snapshot.bytesTransferred/ snapshot.totalBytes) * 100;
          if(progress == 100){
          alert("Profile Uploaded")
          }
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
       
  return (
    <View style={{flex:1}}>

<View style={{backgroundColor:'white',paddingVertical:10}}>
<View  style={{flexDirection:'row',marginHorizontal:'5%',marginTop:'5%'}}>

<View style={{width:'20%',alignItems:'center'}}>
<TouchableOpacity onPress={()=>{pickImageAndUpload()}}>
    <Image style={{height:60,width:60,borderRadius:30}} 
    source={{uri:Dpuri}}
    />
    </TouchableOpacity>
    <TouchableOpacity>
        <Text style={{color:'blue'}}>Edit</Text>
    </TouchableOpacity>
</View>
<View style={{width:'70%',marginTop:'3%',alignItems:'center'}}>
<Text> Enter your  name and add an optional profile picture</Text>
    
</View>
</View>


<TouchableOpacity 
onPress={()=>{navigation.navigate('User')}}
style={{width:'100%',borderColor:'grey',
borderTopWidth:0.5,borderBottomWidth:0.5,paddingVertical:8,marginTop:'3%'}}>
    <Text style={{fontWeight:'500',fontSize:18,marginHorizontal:10}}>{name}</Text>
</TouchableOpacity>

    </View>

    <View style={{marginTop:'10%'}}>
        <Text  style={{marginLeft:'3%'}} >PHONE NUMBER</Text>
        <View style={{backgroundColor:'white',padding:15,borderColor:'grey',
borderTopWidth:0.5,borderBottomWidth:0.5,marginVertical:10}}>
<Text>{Phnum}</Text>
        </View>
    </View>
    <View style={{marginTop:'10%'}}>
        <Text style={{marginLeft:'3%'}}>About</Text>
        <TouchableOpacity style={{backgroundColor:'white',padding:15,borderColor:'grey',
borderTopWidth:0.5,borderBottomWidth:0.5,marginVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
<Text>{About}</Text>
<Image  
    style={{height:25,width:25,opacity:0.4,}}
    source={  require('../SettingFiles/ImageSetting/right.png')
   } />
       </TouchableOpacity>
       <TouchableOpacity 
       onPress={()=>{ Auth().signOut()  , navigation.dispatch(StackActions.replace("Login"))
      }}
       style={{justifyContent:'center',alignItems:'center',
       backgroundColor:'red',paddingVertical:10,marginHorizontal:'10%',borderRadius:20}}>
        <Text>LogOut</Text>
       </TouchableOpacity>
    </View>
    </View>
  )
}