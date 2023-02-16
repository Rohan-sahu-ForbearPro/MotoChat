import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, } from 'react';
import Auth from "@react-native-firebase/auth";
import { useNavigation, StackActions, useIsFocused } from '@react-navigation/native';

const SplashScreen = () => {
  const isFocuse = useIsFocused();
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(async () => {
      const unsubcibe =  await Auth().onAuthStateChanged((user) => {
          console.log(user) 
        const isUser = user !== null ? "MainScreen"  : "Login"
    
        navigation.dispatch(StackActions.replace(isUser))
      },[isFocuse])
      unsubcibe()



    }, 3000);
  }, [])



  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <ActivityIndicator size={50} />
      <Text>Loading....</Text>
    </View>
  )
}

export default SplashScreen