import React from 'react'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessageScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />} screenOptions={{headerShown:false}}>
    <Drawer.Screen component={HomeScreen} name='Home' options={{
      drawerIcon: ({color}) => (
        <Ionicons name='home-outline' size={22} color={color}/>
      )
    }}/>
    <Drawer.Screen component={ProfileScreen} name='Profile' options={{
      drawerIcon: ({color}) => (
        <Ionicons name='person-outline' size={22} color={color}/>
      )
    }}/>
    <Drawer.Screen component={MessagesScreen} name='Messages'options={{
      drawerIcon: ({color}) => (
        <Ionicons name='chatbox-ellipses-outline' size={22} color={color}/>
      )
    }}/>
    <Drawer.Screen component={MomentsScreen} name='Moments'options={{
      drawerIcon: ({color}) => (
        <Ionicons name='timer-outline' size={22} color={color}/>
      )
    }}/>
    <Drawer.Screen component={SettingsScreen} name='Settings'options={{
      drawerIcon: ({color}) => (
        <Ionicons name='settings-outline' size={22} color={color}/>
      )
    }}/>
  </Drawer.Navigator>
  )
}

export default AuthStack
