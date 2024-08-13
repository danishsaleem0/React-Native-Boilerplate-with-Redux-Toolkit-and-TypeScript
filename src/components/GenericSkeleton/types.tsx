import {StyleProp, ViewStyle} from 'react-native';

export interface ISkeletonProps {
  length: number;
  width?: number | '100%';
  height: number;
  containerStyle?: StyleProp<ViewStyle>;
  skeletonStyle?: Record<string, unknown>;
}
