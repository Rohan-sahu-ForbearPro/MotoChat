
import { View, Text,TouchableOpacity,Image, ImageBackground,ScrollView,TextInput, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Searchbar from '../Searchbar';

const StatusScreen = () =>{

  return (

    <ImageBackground source={require('../image/ing.jpg')} style={{flex:1,}}>
      <ScrollView>
<View style={{ marginVertical:'1%'}}>
<TouchableOpacity >
 <Text style={{color:"white"}}> Privacy</Text>
 </TouchableOpacity>
 </View>


<Searchbar />


  <TouchableOpacity 
  style={{flexDirection:'row',alignItems:'center',
backgroundColor:'#e1e9fa' 
,padding:5,
justifyContent:'space-around'
}}>

  <View style={{}}>
<Image source={require('./ImageStatus/img3.jpeg')} 

style={{height: 60,width:60,
borderRadius:30,backgroundColor:'green',}} />
</View>


<View  style={{marginLeft:5,width:'60%',
  marginRightL:10,}}>
  <Text style={{fontSize:18,fontWeight:'600'}}>My Status</Text>
  <Text style={{opacity:0.5}}>Add to my status</Text>
</View>


<View style={{flexDirection:'row',
marginHorizontal:5,width:'20%',alignItems:'center',justifyContent:'center'
}}>
  <TouchableOpacity style={{marginRight:'15%'}}>
<Image source={require('./ImageStatus/camera.png')}
 style={{width:25,height:25,opacity:0.5
}} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('./ImageStatus/pen.png')}
 style={{width:23,height:23,opacity:0.5
}} />
</TouchableOpacity>
</View>




</TouchableOpacity>

  <View style={{marginVertical:10 ,}}>
 <Text style={{ color:'white',fontWeight:'500'}}>RECENT UPDATES</Text>
</View>
<View style={{
backgroundColor:'#f0f0f0'}}>


<FlatList  
data={DATA2}

renderItem={({item}) =><RenderCard item={item} />}
/>
        
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default StatusScreen ;


  
  
  






























  const RenderCard =({item})=>{
return(
  <TouchableOpacity style={{backgroundColor:'white'}}>
    <View style={styles.mycard}>
      <View style={{width:'20%',alignItems:'center'}}>
<Image source={item.src} style={styles.img} />
</View>
<View style={{marginLeft:'2%',

width:'80%',flexDirection:'row'}}>
<View style={{width:'82%',justifyContent:'center'}}>
    <Text style={styles.Txt}> {item.title}</Text>
    <Text style={{fontSize:14,opacity:10}}>10h ago</Text>
    </View>

</View>
    </View>
    </TouchableOpacity>

)
}





const styles = StyleSheet.create({

  img:{width:60,height:60,
      borderRadius:30,backgroundColor:'green',
   borderColor:'#4287f5',borderWidth:2,

    },
  
  Txt:{
   fontWeight:'600',
   width:"90%",
  fontSize:18,
  
  }
  ,
  mycard:{
  flexDirection:'row',
  margin:3,
  padding:4,
 
  justifyContent:'space-between'
  }
  })




  const DATA2= [
    
    { 

      src:require('../ChatFile/ImageChat/dp1.jpeg'),
      hrs: new Date().getTime() ,
      title:'Roahan sahu ',
      Description:"Can you sharew",
  
        
    },


    { 

      hrs: new Date().getTime() ,
      title:'Raju barde ',
      Description:"Can you sharew",
  
        src:require('../ChatFile/ImageChat/dp2.jpeg'),
        
    },
    { 

      hrs: new Date().getTime() ,
      title:'GaganDeep ',
      Description:"Can you sharew",
  
        src:require('../ChatFile/ImageChat/dp3.jpeg'),
        
    },
    { 

      hrs: new Date().getTime() ,
      title:'vasim',
      Description:"Can you sharew",
  
        src:require('../ChatFile/ImageChat/dp4.jpeg'),
        
    },
    { 

      hrs: new Date().getTime() ,
      title:'Ajay ',
      Description:"Can you sharew",
  
        src:require('../ChatFile/ImageChat/dp5.jpeg'),
        
    },
    { 
   
      hrs: new Date().getTime() ,
      title:'vishal ',
      Description:"Can you sharew",
  
        src:require('../ChatFile/ImageChat/dp6.jpeg'),
        
    },
    { 
 
      hrs: new Date().getTime() ,
      title:'Roahan sahu ',
      Description:"Can you sharew",
  
        src:require('../ChatFile/ImageChat/dp7.jpeg'),
        
    },
    { 

      hrs: new Date().getTime() ,
      title:'Roahan sahu ',
      Description:"Can you sharew",
  
        src:require('../ChatFile/ImageChat/dp8.jpeg'),
        
    },
    { 
   
      hrs: new Date().getTime() ,
      title:'Roahan sahu ',
      Description:"Can you sharew",
  
        src:require('../ChatFile/ImageChat/dp9.jpeg'),
        
    },
    { 
   
      hrs: new Date().getTime() ,
      title:'Roahan sahu ',
      Description:"Can you sharew",
  
        src:require('../ChatFile/ImageChat/dp9.jpeg'),
        
    },{ 
   
      hrs: new Date().getTime() ,
      title:'Roahan sahu ',
      Description:"Can you sharew",
  
        src:require('../ChatFile/ImageChat/dp9.jpeg'),
        
    },
   
   

  
    
  
];