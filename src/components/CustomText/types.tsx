import {ReactNode} from 'react';
import {LayoutChangeEvent, StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ITextProps {
  text: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  onLayout?: (event: LayoutChangeEvent) => void;
  children?: ReactNode;
}
