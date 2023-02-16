import React from 'react';
import {  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login';
import TabNavigations from './TabNavigation';
import innerChat from './ChatFile/innerChat';
import ShowDp from './ChatFile/ShowDp';
import UserInfo from './ChatFile/UserInfo';
import UserData from './UserData.js';
import SplashScreen from './SplashScreen';





const MainStack = () => {

    const Stack = createNativeStackNavigator();

  return (



 <Stack.Navigator screenOptions={{
  headerShown: false
}}   >

<Stack.Screen name="SplashScreen" component={SplashScreen} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="User" component={UserData} />
<Stack.Screen name="MainScreen" component={TabNavigations} />
<Stack.Screen name="userInfo" component={UserInfo} />

<Stack.Screen name="innerChat" component={innerChat} options={{
headerShown:false
 

}} />

<Stack.Screen name="showDp" component={ShowDp} options={{

}} />
    </Stack.Navigator>

 

  );
}
export default MainStack;