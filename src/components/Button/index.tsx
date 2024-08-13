import React, {ReactElement} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '..';
import styles from './styles';
import {IButtonProps} from './types';
import {COLORS} from '../../constant';

export default function Button({
  text,
  textStyle,
  onPress,
  disabled,
  style,
}: IButtonProps): ReactElement {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={[
        styles.btn,
        disabled && {backgroundColor: COLORS.disabledColor},
        style,
      ]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]} text={text} />
    </TouchableOpacity>
  );
}
