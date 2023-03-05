import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Prescription from '../Screens/Prescription';
import ProfileDoctor from '../Screens/ProfileDoctor';

const stack=createStackNavigator();


export default function Root() {
    return (
      <stack.Navigator initialRouteName='Home'>
          <stack.Screen component={Home} name="Home"/>
          <stack.Screen component={Prescription} name="Prescription"/>
          <stack.Screen component={ProfileDoctor} name="ProfileDoctor"/>
      </stack.Navigator>
    )
  
}