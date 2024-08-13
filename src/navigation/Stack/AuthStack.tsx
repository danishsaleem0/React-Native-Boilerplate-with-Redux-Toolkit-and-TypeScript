import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import NavigationStrings from '../NavigationStrings';
import * as Screens from '../../screens';

export type AuthStackParamList = {
  [NavigationStrings.LOGIN]: undefined;
  [NavigationStrings.SIGN_UP]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationStrings.LOGIN}>
      <AuthStack.Screen
        name={NavigationStrings.LOGIN}
        component={Screens.Login}
      />
      <AuthStack.Screen
        name={NavigationStrings.SIGN_UP}
        component={Screens.Signup}
      />
    </AuthStack.Navigator>
  );
}
