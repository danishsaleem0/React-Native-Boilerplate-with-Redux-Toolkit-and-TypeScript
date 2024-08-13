import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface IButtonProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  disabled?: boolean;
}
