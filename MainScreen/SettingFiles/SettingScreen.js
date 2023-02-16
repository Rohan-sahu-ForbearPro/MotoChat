
import { View, Text,TouchableOpacity,Image, ImageBackground,FlatList,StyleSheet } from 'react-native'
import React ,{useEffect,useState}from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore";

import AsyncStorage from '@react-native-async-storage/async-storage';
const  SettingScreen = () =>{

  const[Dpuri,setDPuri] = useState('');
  const[name,setName] = useState('');
  const[About,setAbout] = useState('');
  const isFocuse = useIsFocused();
  const navigation = useNavigation();

  useEffect( async() => {
    const name = await AsyncStorage.getItem('name');
const about = await AsyncStorage.getItem('about');
setAbout(about)
setName(name)
   getData()
   },);
   
const getData = async()=>{
  const Uid = await AsyncStorage.getItem('Id');
  const dp = await AsyncStorage.getItem("DP")
  setDPuri(dp)
  setuid(Uid);
  try{
const data = await firestore().collection('User').doc(uid).get();

setName(data._data.firstName)
setAbout(data._data.about)
  }catch(e){ 
    console.log(e)
  }
}
  return (
    <ImageBackground source={require('../image/ing.jpg')} style={{flex:1}}>
    
    <TouchableOpacity
     onPress={()=>{ navigation.navigate('EditProfile')}}
   
    
    style={{flexDirection:'row',marginTop:'3%',alignItems:'center',
backgroundColor:'white' ,width:'100%',justifyContent:'space-between',
height: hp('10%'),}}>

  <View style={{width:'18%',alignItems:'center'}}>
<Image source={{uri:Dpuri}}

style={{height: 60,width:60,
borderRadius:30,backgroundColor:'green',}} />
</View>


<View  style={{width:'82%',paddingBottom:6, borderBottomWidth:0.2}}>
  <Text style={{fontSize:18,fontWeight:'600'}}>{name}</Text>
  <Text style={{color:'grey',fontSize:18}}>{About}</Text>
</View>

</TouchableOpacity>

<View style={{height:hp('92%',) , marginTop:'5%'}}>

<FlatList data={DATA2}
        scrollEnabled={false}
           renderItem={({item}) =><RenderCard item={item} />}
          //  keyExtractor={(item) => item.id}
                 /> 

</View>


</ImageBackground>



  )
}
const DATA2= [
    

  {
    img1:require('./ImageSetting/star.jpeg'),
    title:'Starred Messages ',
    navi:'Starred_Message'
  },
  {
    img1:require('./ImageSetting/ac.jpeg'),
    title:'Account',
    navi:'Account'
  },
  {
    img1:require('./ImageSetting/lock.jpeg'),
    title:'Privacy ',
    navi:'Privacy'
  },

  {
    img1:require('./ImageSetting/msg.jpeg'),
    title:'Chats',
    navi:'Chats'
    
  },
  {
    img1:require('./ImageSetting/notif.jpeg'),
    title:'Notification',
    navi:'Notification'
    
  },
  {
    img1:require('./ImageSetting/storage.jpeg'),
    title:'Storage and Data',
    navi:'Storage_Data'
    
  },
  {
    img1:require('./ImageSetting/Info.jpeg'),
    title:'Help ',
    navi:'Help'
  },
  {
    img1:require('./ImageSetting/Tell.png'),
    title:'Tell a Friend',
    navi:'Tell_friend'
  },
  
];

export default   SettingScreen ;



const RenderCard =({item})=>{

  const navigation =useNavigation();
  return(
    <TouchableOpacity 
    onPress={()=>{ navigation.navigate(item.navi)}}
    style={{backgroundColor:'white',marginVertical:'1%',
    height: hp('7%'),}}>

      <View style={styles.mycard}>
        <View style={{width:'10%',alignItems:'center',justifyContent:'center',
        height:hp('5%')}}>
  <Image source={item.img1} style={styles.img} />
  </View>
  <View style={{marginLeft:'2%',

  width:'80%',flexDirection:'row'}}>
  <View style={{width:'80%',justifyContent:'center',paddingBottom:6,height:hp('5%')}}>
      <Text style={styles.Txt}> {item.title}</Text>
      </View>
  </View>
  <View style={{width:'10%',height:hp('5%'),justifyContent:'center'}}>
    <Image  
    style={{height:25,width:25,opacity:0.4,}}
    source={  require('./ImageSetting/right.png')
   } />
 
   

  </View>
      </View>
      </TouchableOpacity>
  
  )
  }
  


const styles = StyleSheet.create({

  img:{width:30,height:30,
     borderRadius:5
    },
  
  Txt:{
   fontWeight:'400',
   width:"90%",
  fontSize:16,

  
  }
  ,
  mycard:{
  flexDirection:'row',
  margin:3,
  padding:4,
  justifyContent:'space-between',

  }
  })