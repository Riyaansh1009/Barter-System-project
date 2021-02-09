import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppTabNavigator} from './AppTab';
import SideBar from './SideBar';
import { createDrawerNavigator } from 'react-navigation-drawer';
import UpdateScreen from '../screens/UpdatingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';


export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:WelcomeScreen},
   
    Setting: {screen: UpdateScreen}


}, 
{
    contentComponent: SideBar
},
{
    intialRouteName: 'Home'
})
