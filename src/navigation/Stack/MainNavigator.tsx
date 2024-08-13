import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import NavigationStrings from '../NavigationStrings';
import AuthStack from './AuthStack';
import {navigationRef} from './NavigationRef';
import BottomTabStack from '../Tabs/BottomTabStack';
import useAuthSelector from '../../redux/selectors/useAuthSelector';

export type MainNavigatorStackParamList = {
  [NavigationStrings.AUTH_STACK]: undefined;
  [NavigationStrings.MAIN_STACK]: undefined;
};

const Stack = createStackNavigator<MainNavigatorStackParamList>();

export default function MainNavigator() {
  const {accessToken, isLoggedIn} = useAuthSelector();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedIn && !accessToken ? (
          <Stack.Screen
            name={NavigationStrings.AUTH_STACK}
            component={AuthStack}
          />
        ) : (
          <Stack.Screen
            name={NavigationStrings.MAIN_STACK}
            component={BottomTabStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
