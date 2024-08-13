import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import NavigationStrings from '../NavigationStrings';
import AuthStack from './AuthStack';
import {navigationRef} from './NavigationRef';

export type MainNavigatorStackParamList = {
  [NavigationStrings.AUTH_STACK]: undefined;
};

const Stack = createStackNavigator<MainNavigatorStackParamList>();

export default function MainNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={NavigationStrings.AUTH_STACK}
          component={AuthStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
