import React, {Fragment, ReactElement} from 'react';
import styles from './styles';
import {TextInput, View} from 'react-native';
import {COLORS} from '../../constant';
import {Text} from '..';
import {IInputFieldProps} from './types';

export default function InputField({
  placeholder,
  keyboardType,
  defaultValue,
  inputRef,
  isEdit,
  inputStyle,
  onFocus,
  maxLength,
  onSubmitEditing,
  autoCapitalize = 'none',
  multiline,
  scrollEnabled,
  numberOfLines,
  field: {name, onBlur, onChange, value},
  form: {errors, touched, setFieldTouched},
  isFocused,
  setUnfocused,
}: IInputFieldProps): ReactElement {
  const hasError = errors[name] && touched[name];

  return (
    <Fragment>
      <TextInput
        textAlignVertical="center"
        ref={inputRef}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
          if (setUnfocused) setUnfocused(false);
        }}
        onChangeText={text => onChange(name)(text)}
        autoCapitalize={autoCapitalize}
        numberOfLines={numberOfLines}
        scrollEnabled={scrollEnabled}
        multiline={multiline}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={[
          styles.input,
          inputStyle,
          {
            borderColor: hasError
              ? COLORS.red // Change this to your actual error color
              : isFocused
              ? COLORS.olive_green
              : COLORS.borderColor,
          },
        ]}
        placeholderTextColor={COLORS.place_holder_color}
        defaultValue={defaultValue}
        value={value}
        onFocus={onFocus}
        maxLength={maxLength}
        editable={isEdit}
        underlineColorAndroid="transparent"
        blurOnSubmit={false}
        onSubmitEditing={onSubmitEditing}
      />

      {hasError && <Text style={styles.errorText} text={errors[name]} />}
    </Fragment>
  );
}
