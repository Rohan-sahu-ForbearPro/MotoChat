import React from 'react';
import { Text, View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './ChatFile/ChatScreen';
import StatusScreen from './Statusfile/StatusScreen';
import CallScreen from './CallFile/imageCall/CallScreen';
import SettingScreen from './SettingFiles/SettingScreen';
import ChatStack from './ChatFile/ChatScreen';
import SettingStack from './SettingFiles/SettingStack';

const Tab = createBottomTabNavigator();

const TabNavigations =()=> {
  return (

      <Tab.Navigator>
        
        <Tab.Screen
          name="Chats"
          component={ChatStack}
         
          options={{
            headerShown:false,
            tabBarBadge: 20,
            tabBarIcon: ({ color }) => (
              <Image
                style={{height:25,width:25}}
                source={require('./image/chat.png')                  
                }/>
           ), 
                
          }}   
        />
        <Tab.Screen name="Status" component={StatusScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{height:30,width:30}}
              source={require('./image/status.png')                  
              }/>
         ), 
         
              
        }}  />
         <Tab.Screen name="Calls" component={CallScreen}  



          options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={{height:25,width:25}}
                source={require('./image/telephone.png')                  
                }/>
           ), 
                
          }} 
           
         />
          <Tab.Screen name="Setting " component={SettingStack}
                
        options={{ headerShown:false,
          tabBarIcon: ({ color }) => (
            <Image
              style={{height:25,width:25}}
              source={require('./image/settings.png')                  
              }/>
         ), 
              
        }}
      />
         
       
      </Tab.Navigator>
   
  );
}
export default  TabNavigations ;