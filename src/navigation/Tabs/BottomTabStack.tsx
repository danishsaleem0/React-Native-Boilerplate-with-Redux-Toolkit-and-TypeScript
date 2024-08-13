import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {Text} from '../../components';
import {tabScreens} from '../../config';
import {COLORS} from '../../constant';
import NavigationStrings from '../NavigationStrings';
import styles from './styles';

const Tab = createBottomTabNavigator();

const TabBarCustomButton: React.FC<TouchableOpacityProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.btn}>
      {children}
    </TouchableOpacity>
  );
};

function BottomTabStack() {
  return (
    <Tab.Navigator
      initialRouteName={NavigationStrings.DASHBOARD_STACK}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: (): null => null,
      }}>
      {tabScreens?.map(item => (
        <Tab.Screen
          name={item?.name}
          component={item?.component}
          key={item?.id}
          options={{
            title: item?.title,
            tabBarIcon: ({focused}) => (
              <View style={styles.view}>
                <Image
                  resizeMode="contain"
                  source={focused ? item?.activeIcon : item?.inActiveIcon}
                  tintColor={focused ? COLORS.secondary : '#484C52'}
                  style={styles.icon}
                />

                <Text
                  style={
                    focused ? styles.tabTextActive : styles.tabTextInActive
                  }
                  text={item?.title}
                />
              </View>
            ),
            tabBarButton: (props: TouchableOpacityProps) => (
              <TabBarCustomButton {...props} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabStack;
