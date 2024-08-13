import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationStrings from '../NavigationStrings';
import * as Screens from '../../screens';

export type VisitsStackParamList = {
  [NavigationStrings.VISITS]: undefined;
};

const Stack = createStackNavigator<VisitsStackParamList>();

function VisitsStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationStrings.VISITS}>
      <Stack.Screen
        name={NavigationStrings.VISITS}
        component={Screens.Visits}
      />
    </Stack.Navigator>
  );
}

export default VisitsStack;
