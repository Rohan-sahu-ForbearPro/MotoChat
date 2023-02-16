import { View, Text, Alert, TouchableOpacity,ImageBackground, TextInput} from 'react-native'
import React, { useState ,useEffect} from 'react'
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from '@react-navigation/core';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LoginScreen() { 
 const [phoneNumber , setPhoneNumber] = useState('');
 const [ConfirmOtp , setConfirmOtp] = useState('');
 const [ConData , setConfirmData] = useState('');
 const [Showinput , setShowinput] = useState(true);
const navigation = useNavigation();



const sendOtp = async ()=>{
  try{
  
  await AsyncStorage.setItem('Phnum',phoneNumber)
const mobileNum = '+91'+phoneNumber;

setShowinput(false)
  const respons = await auth().signInWithPhoneNumber(mobileNum)
 
  setConfirmData(respons)
alert('Otp Send Successfull')


}catch(e){
console.log(e)
}

}

const confirmOtp = async()=>{

try{

  const respon =  await ConData.confirm(ConfirmOtp);
  await AsyncStorage.setItem('Id',respon.user.uid)
  if(respon)
 navigation.navigate('User')


}catch(e){
  alert("Otp Is Wrong")
console.log(e)
}

}



  return (
    <ImageBackground source={require('./image/ing.jpg')} style={{flex:1,
    }}>

      <View style={{alignItems:'center' ,width:'100%',marginTop:'15%'}}>  

      <Text style={{fontWeight:'500',fontSize:22,color:'white'}}>Phone Number</Text>

      </View>

      <View style={{marginTop:'10%',width:"72%",alignItems:'center',alignSelf:'center'}}> 
        <Text style={{fontSize:16,color:'white'}}> Please </Text>
        <Text style={{fontSize:16,color:'white'}}> Enter your  phone number</Text>
        </View>
{Showinput && <>
  <View style={{alignSelf:'center',backgroundColor:'white',
        marginTop:"15%" ,width:'70%',
  borderRadius:10,paddingVertical:5,
    paddingHorizontal:10}}>
          <TextInput  value={phoneNumber}
        onChangeText={txt =>setPhoneNumber(txt)}
        maxLength={10}
        style={{fontSize:14,fontWeight:'600',}}
        placeholder='Phone Number' keyboardType='number-pad'
        />

        </View>

        <TouchableOpacity
        
        onPress={() =>{
   
   if(phoneNumber.length < 10) {
  alert('Mobile Number Must 10 Digit');
   }
   else{
    sendOtp()
   }
  }

}
        
        style={{marginTop:'15%',marginHorizontal:"30%",
         backgroundColor:'#223d78',borderRadius:10,
         alignItems:'center',justifyContent:'center',
        paddingVertical:15}}>
<Text style={{color:'white',fontSize:18,fontWeight:'500'}}>Get Otp</Text>

        </TouchableOpacity>
        </>
        }
        {!Showinput && <>
        <View style={{alignItems:'center',marginTop:'5%'}}>
          <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Otp Successfully Send  to  Mobile Number</Text>
          <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>+91-{phoneNumber}</Text>
          </View>
        <View style={{alignSelf:'center',backgroundColor:'white',
       marginTop:'5%' ,width:'50%',
  borderRadius:10,paddingVertical:5,
    paddingHorizontal:10}}>
          <TextInput  value={ConfirmOtp}
        onChangeText={txt =>setConfirmOtp(txt)}
        style={{fontSize:14,fontWeight:'600',}}
        placeholder='Enter Otp' keyboardType='number-pad'
        maxLength={6}
        />

        </View>

        <TouchableOpacity
        
        onPress={ () =>  setShowinput(true)}
        
        style={{marginTop:'5%',width:'70%',alignSelf:'center',
       borderRadius:10,
         alignItems:'center',justifyContent:'center',
        paddingVertical:5}}>
<Text style={{color:'white',fontSize:18,fontWeight:'500'}}>Click Change Mobile Number</Text>

        </TouchableOpacity>
        <TouchableOpacity
        
    onPress={() =>{
   
      if(ConfirmOtp.length < 6) {
     alert('enter 6 digit otp');
      }
      else{
        confirmOtp()
      }
     }
   
   }
        
        style={{marginTop:'5%',marginHorizontal:"30%",
         backgroundColor:'#223d78',borderRadius:10,
         alignItems:'center',justifyContent:'center',
        paddingVertical:15}}>
<Text style={{color:'white',fontSize:18,fontWeight:'500'}}>Submit</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{ navigation.navigate('User')}}>
          <Text>skip</Text>
        </TouchableOpacity>
        </>
}
    </ImageBackground >
  )
}
