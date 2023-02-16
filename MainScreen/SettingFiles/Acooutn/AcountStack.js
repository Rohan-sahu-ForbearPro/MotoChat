import { View, Text,Image,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function AcountStack() {
  return (
    <View style={{flex:1,}} >
      <View style={{marginTop:'10%'}}>
      <TouchableOpacity style={{backgroundColor:'white',
      flexDirection:'row',paddingVertical:13,
}}> 

<View style={{width:'90%',justifyContent:'center',
marginLeft:'3%'
}}>
    <Text style={styles.Txt}>Security Notifications</Text>

 
    </View>

    <View style={{width:'10%',
    alignItems:'center'}}>
     
      <Image  style={{height:20,width:20,
    }} 
     
      source={require('../ImageSetting/right.png')} />
    </View>


  
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:'white',
      flexDirection:'row',paddingVertical:13,
    
}}> 

<View style={{width:'90%',justifyContent:'center',
marginLeft:'3%'
}}>
    <Text style={styles.Txt}>Two-Step Verification</Text>

 
    </View>

    <View style={{width:'10%',
    alignItems:'center'}}>
     
      <Image  style={{height:20,width:20,
    }} 
     
      source={require('../ImageSetting/right.png')} />
    </View>


  
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:'white',
      flexDirection:'row',paddingVertical:13,
     
}}> 

<View style={{width:'90%',justifyContent:'center',
marginLeft:'3%'
}}>
    <Text style={styles.Txt}>Change Number</Text>

 
    </View>

    <View style={{width:'10%',
    alignItems:'center'}}>
     
      <Image  style={{height:20,width:20,
    }} 
     
      source={require('../ImageSetting/right.png')} />
    </View>

  
    </TouchableOpacity>


    </View>
    <View style={{marginTop:'10%'}}>

    <TouchableOpacity style={{backgroundColor:'white',
      flexDirection:'row',paddingVertical:13,
     
}}> 

<View style={{width:'90%',justifyContent:'center',
marginLeft:'3%'
}}>
    <Text style={styles.Txt}>Request Account Info</Text>

 
    </View>

    <View style={{width:'10%',
    alignItems:'center'}}>
     
      <Image  style={{height:20,width:20,
    }} 
     
      source={require('../ImageSetting/right.png')} />
    </View>

  
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:'white',
      flexDirection:'row',paddingVertical:13,
     
}}> 

<View style={{width:'90%',justifyContent:'center',
marginLeft:'3%'
}}>
    <Text style={styles.Txt}>Delete My Account</Text>

 
    </View>

    <View style={{width:'10%',
    alignItems:'center'}}>
     
      <Image  style={{height:20,width:20,
    }} 
     
      source={require('../ImageSetting/right.png')} />
    </View>

  
    </TouchableOpacity>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({

  img:{width:30,height:30,
     borderRadius:5
    },
  
  Txt:{
  
   width:"90%",
  fontSize:18,

  color:'black'

  
  }
  ,
  mycard:{
  flexDirection:'row',
  margin:3,
  padding:4,


  }
  })