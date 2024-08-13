import {ComponentType, ReactElement, ReactNode} from 'react';
import {ImageSourcePropType} from 'react-native';

export interface IUserRoles {
  id: string;
  label: string;
  value: string;
}
export interface ITabItem {
  id: string;
  name: string;
  component: ComponentType;
  title: string;
  activeIcon: ImageSourcePropType;
  inActiveIcon: ImageSourcePropType;
}
