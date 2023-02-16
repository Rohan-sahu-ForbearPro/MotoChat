import { View, Text } from 'react-native'
import React from 'react'
import MainStack from './MainScreen/StackMain'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (

      <NavigationContainer>


      <MainStack />
      </NavigationContainer>
  
  )
}