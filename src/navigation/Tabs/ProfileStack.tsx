import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationStrings from '../NavigationStrings';
import * as Screens from '../../screens';

export type ProfileStackParamList = {
  [NavigationStrings.PROFILE]: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationStrings.PROFILE}>
      <Stack.Screen
        name={NavigationStrings.PROFILE}
        component={Screens.Profile}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
