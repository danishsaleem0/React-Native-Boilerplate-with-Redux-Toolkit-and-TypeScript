import {StyleProp, TextStyle, ViewStyle} from 'react-native';

interface IconProps {
  name: string;
  type: string;
  color?: string;
  size?: number;
}

export interface IHeaderProps {
  title?: string;
  isBack?: boolean;
  backBtnStyle?: StyleProp<ViewStyle>;
  onGoBack?: () => void;
  rightIcon?: IconProps;
  rightIconPress?: () => void;
  leftIcon?: IconProps;
  leftIconPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}
