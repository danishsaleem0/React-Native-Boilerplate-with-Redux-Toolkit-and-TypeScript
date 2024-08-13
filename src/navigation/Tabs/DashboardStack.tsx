import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationStrings from '../NavigationStrings';
import * as Screens from '../../screens';

export type DashboardStackParamList = {
  [NavigationStrings.DASHBOARD]: undefined;
};

const Stack = createStackNavigator<DashboardStackParamList>();

function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationStrings.DASHBOARD}>
      <Stack.Screen
        name={NavigationStrings.DASHBOARD}
        component={Screens.Dashboard}
      />
    </Stack.Navigator>
  );
}

export default DashboardStack;
