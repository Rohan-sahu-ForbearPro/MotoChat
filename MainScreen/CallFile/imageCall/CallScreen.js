

import { View, Text,TouchableOpacity,Image,ImageBackground ,FlatList,ScrollView,TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Searchbar from '../../Searchbar';

const CallScreen = () =>{


  return (
<ImageBackground source={require('../../image/ing.jpg')} style={{flex:1,}}>
      <ScrollView>
      <View style={{
}}>

<Searchbar />
</View>
    

<View style={{flex:1,marginTop:'5%',}}>

        
 <FlatList data={DATA2}
        scrollEnabled={false}
           renderItem={({item}) =><RenderCard item={item} />}
          //  keyExtractor={(item) => item.id}
                 /> 

    </View>

    </ScrollView>
    </ImageBackground>
  )
}


  const RenderCard =({item})=>{
return(
  <TouchableOpacity style={{backgroundColor:'white',
  justifyContent:'space-around'}}>
    <View style={styles.mycard}>
      <View style={{alignItems:'center',
      justifyContent:'center'}}>
<Image source={item.src} style={styles.img} />
</View>
<View style={{width:"90%",
borderBottomWidth:1,borderColor:'grey',paddingVertical:8,
flexDirection:'row'}}>

<View style={{width:'65%',justifyContent:'center',marginLeft:10
}}>
    <Text style={styles.Txt}> {item.title}</Text>
    <Text style={{fontSize:14,opacity:0.5,marginTop:'2%'}}>
 <Image source={item.miss} style={{height:15,width:15,}} /> {item.Description}</Text>
    </View>

    <View style={{flexDirection:'row',width:'35%',
    alignItems:'center'}}>
      <Text>{item.day}</Text>
      <Image  style={{height:20,width:20,marginHorizontal:'4%'}} source={require('../imageCall/information.png')} />
    </View>

</View>
    </View>
    </TouchableOpacity>

)
}







const DATA2= [
    

  {
    id:3,
    hrs: new Date().getHours() ,
    title:'Emilia Green ',
    Description:"Outgoing",
   miss:require('../imageCall/phone-call.png'),
    src:require('../imageCall/img3.jpeg'),
    day:'Yesterday'
      
  },
  {
    id:3,
    hrs: new Date().getHours() ,
    title:'Lucky Green ',
    Description:"Incoming",
    miss:require('../imageCall/phone-call.png'),
    src:require('../imageCall/img3.jpeg'),
    day:'Sunday' 
  },
  {
    id:3,
    hrs: new Date().getHours() ,
    title:'Raju Green ',
    Description:"Missed",
miss:require('../imageCall/video-camera.png'),
    src:require('../imageCall/img3.jpeg'),
    day:'Today'
  },
];



const styles = StyleSheet.create({

  img:{width:50,height:50,
      borderRadius:25,backgroundColor:'green'

,marginLeft:10
    },
  
  Txt:{
   fontWeight:'600',
   width:"90%",
  fontSize:18,
  
  }
  ,
  mycard:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginVertical:'2%'
  }
  })


export default  CallScreen ;