
import React, { useEffect, useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image,Text , ImageBackground,StyleSheet,View,ScrollView,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Searchbar from '../Searchbar';


const DATA2= [
    
      { 

        src:require('./ImageChat/dp1.jpeg'),
        hrs: new Date().getTime() ,
        title:'Roahan sahu 1',
        Description:"Can you sharew",
    
          
      },

  
      { 
 
        hrs: new Date().getTime() ,
        title:'Raju barde ',
        Description:"Can you sharew",
    
          src:require('./ImageChat/dp2.jpeg'),
          
      },
      { 
 
        hrs: new Date().getTime() ,
        title:'GaganDeep ',
        Description:"Can you sharew",
    
          src:require('./ImageChat/dp3.jpeg'),
          
      },
      { 
  
        hrs: new Date().getTime() ,
        title:'vasim',
        Description:"Can you sharew",
    
          src:require('./ImageChat/dp4.jpeg'),
          
      },
      { 
 
        hrs: new Date().getTime() ,
        title:'Ajay ',
        Description:"Can you sharew",
    
          src:require('./ImageChat/dp5.jpeg'),
          
      },
      { 
     
        hrs: new Date().getTime() ,
        title:'vishal ',
        Description:"Can you sharew",
    
          src:require('./ImageChat/dp6.jpeg'),
          
      },
      { 
   
        hrs: new Date().getTime() ,
        title:'Roahan sahu ',
        Description:"Can you sharew",
    
          src:require('./ImageChat/dp7.jpeg'),
          
      },
      { 
  
        hrs: new Date().getTime() ,
        title:'Roahan sahu ',
        Description:"Can you sharew",
    
          src:require('./ImageChat/dp8.jpeg'),
          
      },
      { 
     
        hrs: new Date().getTime() ,
        title:'Roahan sahu ',
        Description:"Can you sharew",
    
          src:require('./ImageChat/dp9.jpeg'),
          
      },
     
     

    
      
    
  ];

export default function Chat() {
const [showImg , setImg] = useState('');
  const navigation = useNavigation();
 const userInfo =({item})=>{


  navigation.navigate('innerChat',{name:item.title,img:item.src})
 }


  const RenderCard =({item})=>{
return(
  <TouchableOpacity  style={{
    marginVertical:1,
    paddingVertical:7,backgroundColor:'white'}} onPress={()=>{
   userInfo({item})
     }}    >
    <View style={styles.mycard}>

      <TouchableOpacity 
    onPress={()=>{ navigation.navigate('showDp') }}
      style={{ paddingHorizontal:15,
  alignItems:'center'}} >
<Image source={item.src} style={styles.img} />
</TouchableOpacity>
<View style={{
borderBottomWidth:0.2,width:'80%',alignItems:'center',
justifyContent:'space-between',
marginRight:10,
flexDirection:'row'}}>
<View style={{}}>
    <Text style={styles.Txt}> {item.title}</Text>
    <Text style={{fontSize:14,opacity:0.5}}>782869091:{item.Description}</Text>
    </View>


<View style={{}}>
  <Text style={{opacity:0.5}}>3:12 PM</Text>

  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Image  source={require('./ImageChat/mute.png')}
   style={{width:18,height:18,opacity:0.3,marginTop:'13%',left:30}}/>
</View>

</View>


</View>
    </View>
    </TouchableOpacity>

)
}






return (





  <ImageBackground source={require('../image/ing.jpg')}
   style={{flex:1}}>
<ScrollView>

<View style={{ 

  height: hp('8%'),borderBottomWidth:0.2,
}}>
<View style={{flexDirection:'row',paddingVertical:2,
justifyContent:'space-between'

}}>
<View  style={{width:'77%',marginLeft:'3%',marginTop:10,paddingTop:10}}>
      <TouchableOpacity >
      <Text style={{color:'#1b86bf',fontSize:16,color:'white'}}>Edit</Text>
      </TouchableOpacity>
      </View>

      <View style={{justifyContent:'center',width:'10%',paddingVertical:5}}> 
      <TouchableOpacity >
      <Image  style={{height:25,width:25 ,opacity:0.6}}  source={require('./ImageChat/camera.png')}   />
      </TouchableOpacity>
      </View>

      <View style={{justifyContent:'center',width:"10%",paddingVertical:5}}> 
      <TouchableOpacity >
      <Image  style={{height:25,width:25 , opacity:0.6}}  source={require('./ImageChat/editing.png')}   />
      </TouchableOpacity>
      </View>

      </View>


</View>


<Searchbar />

  

<View style={{ }}>

        
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

const styles = StyleSheet.create({

  img:{width:60,height:60,
      borderRadius:30,backgroundColor:'green',
   
    },
  
  Txt:{
   
   fontWeight:'600',
   
  fontSize:18,
  
  }
  ,
  mycard:{
  flexDirection:'row',
  justifyContent:'space-evenly'
  }
  })