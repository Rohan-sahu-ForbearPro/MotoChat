import React from 'react';
import {  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './Chat';
import innerChat from './innerChat';
import ShowDp from './ShowDp';




const ChatStack = () => {

    const Stack = createNativeStackNavigator();

  return (



 <Stack.Navigator  >

<Stack.Screen name="Chat" component={Chat} options={{
  headerShown:false

}} />


 
    </Stack.Navigator>

 

  );
}
export default ChatStack;