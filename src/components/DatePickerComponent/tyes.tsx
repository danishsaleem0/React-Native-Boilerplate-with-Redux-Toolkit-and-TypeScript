import {StyleProp, ViewStyle} from 'react-native';

interface IconProps {
  name: string;
  type: string;
  color?: string;
  size?: number;
}

export interface IDatePickerProps {
  style?: StyleProp<ViewStyle>;
  onPickerPress: () => void;
  text: string;
  values: Date;
  error: string;
  touched: string;
  selected: boolean;
  rightIcon?: IconProps;
}
