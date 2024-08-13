import React, {Fragment, ReactElement, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS} from '../../constant';
import {Text} from '..';
import {IDynamicDropDown} from './types';

export default function DynamicDropDown({
  data,
  dropdownLabelText,
  dropdownStyle,
  dropdownContainerStyle,
  onChange,
  value,
  isSearhable = true,
  disable,
  isError,
  errorText,
}: IDynamicDropDown): ReactElement {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <Fragment>
      <View style={[styles.container, dropdownContainerStyle]}>
        <Dropdown
          disable={disable}
          style={[
            styles.dropdown,
            isFocus
              ? {borderColor: COLORS.olive_green, borderWidth: 1}
              : isError != '' && {borderColor: 'red', borderWidth: 1},

            dropdownStyle,
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search={isSearhable}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={`Select ${dropdownLabelText || ''}`}
          searchPlaceholder={`Search ${dropdownLabelText || ''}`}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setIsFocus(false);
            if (onChange) {
              onChange(item);
            }
          }}
        />
      </View>
      {isError && <Text style={styles.errorText} text={errorText} />}
    </Fragment>
  );
}
