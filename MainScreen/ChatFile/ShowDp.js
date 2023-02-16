import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ShowDp({route}) {
const navigation = useNavigation();
  const image   = route.params.Dp;
 
  return (
    <View style={{flex:1,}}>
<View style={{height:'25%'}}>
<TouchableOpacity 
     style={{width:"10%",justifyContent:'center',}}
      onPress={()=>{navigation.goBack()}}>

<Image    source={require('./ImageChat/left.png')} style={{width:35,height:35}} />
     </TouchableOpacity>


</View>
      <View style={{marginHorizontal:'5%',
      justifyContent:'center',alignItems:'center',
height:'50%'}}>
<Image 
style={{height:"100%",width:'100%'}}
source={image} />

</View>

    </View>
  )
}