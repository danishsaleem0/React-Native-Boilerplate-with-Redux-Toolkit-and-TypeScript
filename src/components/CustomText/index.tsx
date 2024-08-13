import React, {ReactElement} from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {ITextProps} from './types';

function CustomText({
  style,
  text,
  numberOfLines,
  onLayout,
  children,
}: ITextProps): ReactElement {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.text, style]}
      onLayout={onLayout}>
      {text}
      {children}
    </Text>
  );
}

export default CustomText;
