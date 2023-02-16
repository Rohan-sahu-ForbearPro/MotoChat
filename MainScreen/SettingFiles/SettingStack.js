import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingScreen from './SettingScreen';
import StartedStack from './StartedMes/StartedStack'
import AcountStack from './Acooutn/AcountStack';
import PrivacyStack from './privacy/PrivacyStack';
import ChatsStackSett from './ChatsStackSett/ChatStack';
import NotificationStack from './Notification/NotificationStack';
import StorageStack from './StartedMes/StartedStack';
import HelpStack from './Help/HelpStack';
import TellFriend from './TellFriend/TellFriend';
import EditiProfile from '../EditiProfile/EditiProfile';
export default function SettingStack() {


    const Stack = createNativeStackNavigator();
    
  return (
   <Stack.Navigator>
<Stack.Screen name='Setting'  component={SettingScreen} />
<Stack.Screen name='EditProfile'  component={EditiProfile} />
<Stack.Screen name='Starred_Message'  component={StartedStack} />
<Stack.Screen name='Account'  component={AcountStack}

/>
<Stack.Screen name='Privacy'  component={PrivacyStack} />
<Stack.Screen name='Chats'  component={ChatsStackSett} />
<Stack.Screen name='Notification'  component={NotificationStack} />
<Stack.Screen name='Storage_Data'  component={StorageStack} />
<Stack.Screen name='Help'  component={HelpStack} />
<Stack.Screen name='Tell_friend'  component={TellFriend} />

   </Stack.Navigator>
  )
}