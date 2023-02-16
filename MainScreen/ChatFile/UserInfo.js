import { View, Text ,Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function UserInfo({route}) {
    const navigation = useNavigation();
    const image   = route.params.Dp;
    const name = route.params.name;
  return (
    <View style={{flex:1,}}>
         <ScrollView>
        <View style={{height:hp('5%'),
       
        alignItems:'center',justifyContent:'space-between',
        flexDirection:'row'}}>
<TouchableOpacity   style={{width:"10%",flexDirection:'row',alignItems:'center'
}} onPress={()=>{navigation.goBack()}}>

<Image    source={require('./ImageChat/left.png')} style={{width:35,height:35}} />

    
    <Text style={{color:'#3e63b5',fontSize:18}}>Back</Text>
    </TouchableOpacity>

    <View style={{alignSelf:'center'}}>
        <Text style={{fontSize:18,fontWeight:'600'}}>Contact info</Text>
    </View>
    <TouchableOpacity style={{width:"10%"}}>
        <Text style={{fontSize:14,fontWeight:'500',color:'#3e63b5',}}>Edit</Text>
        </TouchableOpacity>
</View>

<View style={{alignItems:'center',height: hp('25%')
,justifyContent:'center'}}>

      <Image  style={{height:120,width:120,borderRadius:60,
   
        borderWidth:4,borderColor:'#719af5'}}  source={image}/>
      <Text style={{fontSize:22,fontWeight:'800',marginVertical:'2%'}}>{name}</Text>
     <Text style={{color:'grey',fontSize:18,}}>+91 7828690192</Text>
      </View>

      <View style={{height: hp('10%'),
    justifyContent:'space-evenly',
      flexDirection:'row'}}>

<TouchableOpacity style={styles.card}>
    <Image 
    style={{height:25,width:25,marginVertical:6,opacity:0.5}}
    source={require('../image/telephone.png')}/>
    <Text style={{ color:"#3e63b5"}}>audio</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.card}>
<Image 
    style={{height:25,width:25,opacity:0.5,marginVertical:6}}
    source={require('./ImageChat/video-camera.png')}/>
    <Text style={{ color:"#3e63b5"}}>video</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.card}>
<Image 
    style={{height:25,width:25,opacity:0.5,marginVertical:6}}
    source={require('./ImageChat/image.png')}/>
  <Text style={{ color:"#3e63b5"}}>image</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.card}>
<Image 
    style={{height:25,width:25,marginVertical:6,opacity:0.5}}
    source={require('./ImageChat/search.png')}/>
    <Text style={{ color:"#3e63b5"}}>search</Text>
</TouchableOpacity>
      </View>

      <View style={styles.statusCard}>
        <Text style={{height:'65%'}}> अखिल भारतीय विद्यार्थी परिषद (एबीवीपी या विद्यार्थी परिषद) एक भारतीय छात्र संगठन है।</Text>
      <Text style={{marginTop:'2%',opacity:0.5}}>15 Sep 2022</Text>
      </View>

      <View style={styles.mediaCard}>
      <TouchableOpacity style={{flexDirection:'row',
      height:'50%',borderBottomWidth:0.2,borderBottomColor:'grey',
    alignItems:'center',justifyContent:'space-between'}}>
        <Image 
    style={{height:25,width:25,borderRadius:3,marginVertical:6}}
    source={require('./ImageChat/media.jpeg')}/>
<Text style={{width:'80%',}}>Media, Link, and Docs</Text>
<Image 
    style={{height:25,width:25,opacity:0.5,marginVertical:6}}
    source={require('./ImageChat/right.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',
      alignItems:'center',justifyContent:'space-between',
      height:'50%',}}>
            <Image 
    style={{height:25,width:25,borderRadius:5 ,marginVertical:6}}
    source={require('./ImageChat/star.jpeg')}/>
<Text style={{width:'80%'}}>Starred Messages</Text>
<Image 
    style={{height:25,width:25,opacity:0.5,marginVertical:6}}
    source={require('./ImageChat/right.png')}/>
      </TouchableOpacity>
      </View>





      {/* 3 card     */}



      <View style={styles.card3Div}>
      <TouchableOpacity style={{flexDirection:'row',
      height:'33%',borderBottomWidth:0.2,borderBottomColor:'grey',
    alignItems:'center',justifyContent:'space-between'}}>
        <Image 
    style={{height:25,width:25,borderRadius:3,marginVertical:6}}
    source={require('./ImageChat/Mutes.jpeg')}/>
<Text style={{width:'80%'}}>Mute</Text>
<Image 
    style={{height:25,width:25,opacity:0.5,marginVertical:6}}
    source={require('./ImageChat/right.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',borderBottomWidth:0.2,borderBottomColor:'grey',
      alignItems:'center',justifyContent:'space-between',
      height:'33%',}}>
            <Image 
    style={{height:25,width:25,borderRadius:5 ,marginVertical:6}}
    source={require('./ImageChat/wall.jpeg')}/>
<Text style={{width:'80%'}}>Wallpaper & Sound</Text>
<Image 
    style={{height:25,width:25,opacity:0.5,marginVertical:6}}
    source={require('./ImageChat/right.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',
      alignItems:'center',justifyContent:'space-between',
      height:'33%',}}>
            <Image 
    style={{height:25,width:25,borderRadius:5 ,marginVertical:6}}
    source={require('./ImageChat/dow.jpeg')}/>
<Text style={{width:'80%'}}>Save to Camera Roll</Text>
<Image 
    style={{height:25,width:25,opacity:0.5,marginVertical:6}}
    source={require('./ImageChat/right.png')}/>
      </TouchableOpacity>
      </View>


      {/*         2 lar card    */}
      <View style={styles.card3Div}>
      <TouchableOpacity style={{flexDirection:'row',
      height:'33%',borderBottomWidth:0.2,borderBottomColor:'grey',
    alignItems:'center',justifyContent:'space-between'}}>
        <Image 
    style={{height:25,width:25,borderRadius:3,marginVertical:6}}
    source={require('./ImageChat/Mutes.jpeg')}/>
<Text style={{width:'80%'}}>Disappearing Messages</Text>
<Image 
    style={{height:25,width:25,opacity:0.5,marginVertical:6}}
    source={require('./ImageChat/right.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',borderBottomWidth:0.2,borderBottomColor:'grey',
      alignItems:'center',justifyContent:'space-between',
      height:'67%',}}>
            <Image 
    style={{height:25,width:25,borderRadius:5 ,marginVertical:6}}
    source={require('./ImageChat/lock.jpeg')}/>
    <View style={{width:'80%'}}>
<Text style={{}}>Encyption</Text>
<Text style={{fontSize:10 ,opacity:0.8}}>Messages and calls are end-to-end encypted.</Text>
<Text style={{fontSize:10 ,opacity:0.8}}>Tab to verify.</Text>
</View>
<Image 
    style={{height:25,width:25,opacity:0.5,marginVertical:6}}
    source={require('./ImageChat/right.png')}/>
      </TouchableOpacity>
   
      </View>
      {/* single card  */}

      <View style={styles.SinglCard}>
      <TouchableOpacity style={{flexDirection:'row',
    alignItems:'center',justifyContent:'space-between'}}>
        <Image 
    style={{height:25,width:25,borderRadius:5,marginVertical:6}}
    source={require('./ImageChat/can.jpeg')}/>
<Text style={{width:'80%',  
}}>Contact Details</Text>
<Image 
    style={{height:25,width:25,opacity:0.5,marginVertical:6}}
    source={require('./ImageChat/right.png')}/>
      </TouchableOpacity>
      </View>
     </ScrollView>
    </View>
  )
}

const  styles = StyleSheet.create({

    card: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white',
        borderRadius: 8,
        height:hp('8%'),
        width: '18%',
        marginVertical: 10,
  
      shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    },

    statusCard:{
        marginTop:'2%',
        padding:5,
        borderRadius: 8,
        height:hp('10%'),
     marginHorizontal:'2%',
     backgroundColor: 'white',
        shadowProp: {
           
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
    },
   mediaCard:{marginTop:'2%',

        padding:5,
        borderRadius: 8,
        height:hp('12%'),
     marginHorizontal:'2%',
     backgroundColor: 'white',
        shadowProp: {
           
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
    },

    card3Div:{
        marginTop:'2%',
        padding:5,
        borderRadius: 8,
        height:hp('15%'),
     marginHorizontal:'2%',
     backgroundColor: 'white',
        shadowProp: {
           
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
    },
    SinglCard:{

        marginTop:'2%',
        padding:5,
        borderRadius: 8,
        height:hp('6%'),
     marginHorizontal:'2%',
     backgroundColor: 'white',
        shadowProp: {
           
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
    }
    })