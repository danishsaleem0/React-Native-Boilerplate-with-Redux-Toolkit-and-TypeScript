import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constant';
import {Icon, Text} from '../index';
import {IIconInputFieldProps} from './types';

const IconInputField = ({
  style,
  placeholder,
  secureText,
  keyboardType,
  defaultValue,
  onFocus,
  inputRef,
  isEdit,
  leftIcon,
  inputStyle,
  rightIcon,
  onPressRightIcon,
  maxLength,
  onSubmitEditing,
  autoCapitalize = 'none',
  multiline,
  scrollEnabled,
  numberOfLines,
  disabled,
  field: {name, onBlur, onChange, value},
  form: {errors, touched, setFieldTouched},
  isFocused,
  setUnfocused,
  rightIconDisabled = false,
}: IIconInputFieldProps) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const onHidePress = (): void => {
    setHidePassword(!hidePassword);
  };
  const hasError = errors[name] && touched[name];

  return (
    <>
      <View
        style={[
          styles.main_view,
          style,
          {
            borderColor: hasError
              ? COLORS.red
              : isFocused
              ? COLORS.oliveGreen
              : COLORS.borderColor,
          },
        ]}>
        {leftIcon && <Icon {...leftIcon} style={styles.icon} />}
        <TextInput
          textAlignVertical="center"
          ref={inputRef}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
            if (setUnfocused) setUnfocused(false);
          }}
          autoCapitalize={autoCapitalize}
          numberOfLines={numberOfLines}
          scrollEnabled={scrollEnabled}
          onChangeText={text => onChange(name)(text)}
          multiline={multiline}
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={secureText && hidePassword}
          style={[styles.input, inputStyle]}
          placeholderTextColor={COLORS.placeHolderColor}
          defaultValue={defaultValue}
          value={value}
          onFocus={onFocus}
          maxLength={maxLength}
          editable={isEdit}
          underlineColorAndroid="transparent"
          blurOnSubmit={false}
          onSubmitEditing={onSubmitEditing}
        />

        {rightIcon && (
          <TouchableOpacity
            disabled={disabled || rightIconDisabled}
            onPress={secureText ? onHidePress : onPressRightIcon}
            activeOpacity={0.5}>
            {secureText && hidePassword ? (
              <Icon {...icons.showPasswordIcon} />
            ) : secureText && !hidePassword ? (
              <Icon {...icons.hidePasswordIcon} />
            ) : (
              <Icon {...rightIcon} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {hasError && <Text style={styles.errorText} text={errors[name]} />}
    </>
  );
};

const styles = StyleSheet.create({
  errorInput: {
    borderColor: COLORS.red,
    borderWidth: 1.5,
  },
  main_view: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    borderRadius: SIZES.base,
    height: SIZES.padding * 2.3,
    marginVertical: SIZES.small,
    borderWidth: 1.5,
    backgroundColor: COLORS.transparent,
  },
  icon: {
    flex: 1,
    width: SIZES.h22,
  },

  input: {
    flex: 1,
    ...FONTS.Regular13,
    color: COLORS.iconColor,
    padding: 0,
    height: SIZES.padding * 2.3,
  },
  errorText: {
    ...FONTS.Regular11,
    color: 'red',
    width: '100%',
  },
  rightIcon: {
    padding: SIZES.padding2,
  },
});

export default IconInputField;
