import React, {Fragment, ReactElement} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {dateformatter} from '../../utils/helper';
import {Icon, Text} from '..';
import styles from './styles';
import {IDatePickerProps} from './tyes';

export default function DatePickerComponent({
  values,
  text,
  selected,
  error,
  touched,
  onPickerPress,
  rightIcon,
  style,
}: IDatePickerProps): ReactElement {
  return (
    <Fragment>
      <TouchableOpacity
        style={[
          styles.pickerButton,
          style,
          error != '' && touched != '' && {borderColor: 'red'},
        ]}
        activeOpacity={0.8}
        onPress={onPickerPress}>
        <Text
          text={selected ? dateformatter.MM_DD_YYYY(values) : text}
          style={selected ? styles.pickerSelectedText : styles.pickerText}
        />
        {rightIcon && <Icon {...rightIcon} />}
      </TouchableOpacity>

      {error && touched && <Text text={error} style={styles.errorText} />}
    </Fragment>
  );
}
