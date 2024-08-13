import {ReactNode} from 'react';
import {LayoutChangeEvent, StyleProp, ViewStyle} from 'react-native';

export interface IContainerProps {
  children: ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
  isPadding?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
}
