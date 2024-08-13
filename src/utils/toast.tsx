import React from 'react';
import {
  BaseToast,
  ErrorToast,
  InfoToast,
  ToastProps,
} from 'react-native-toast-message';
import {COLORS, FONTS, SIZES, icons} from '../constant';

import {StyleSheet, View} from 'react-native';
import {Icon} from '../components';

const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      text1NumberOfLines={2}
      text2NumberOfLines={2}
      {...props}
      renderTrailingIcon={() => (
        <View style={styles.view}>
          <Icon {...icons.successIcon} />
        </View>
      )}
      style={[
        styles.container,
        {
          borderLeftColor: COLORS.oliveGreen,
          borderColor: COLORS.oliveGreen,
        },
      ]}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
    />
  ),

  error: (props: ToastProps) => (
    <ErrorToast
      text1NumberOfLines={2}
      text2NumberOfLines={2}
      {...props}
      renderTrailingIcon={() => (
        <View style={styles.view}>
          <Icon {...icons.errorIcon} />
        </View>
      )}
      style={[
        styles.container,
        {
          borderLeftColor: COLORS.red,
          borderColor: COLORS.red,
        },
      ]}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
    />
  ),

  info: (props: ToastProps) => (
    <InfoToast
      text1NumberOfLines={2}
      text2NumberOfLines={2}
      {...props}
      renderTrailingIcon={() => (
        <View style={styles.view}>
          <Icon {...icons.infoIcon2} />
        </View>
      )}
      style={[
        styles.container,
        {
          borderLeftColor: COLORS.textColor,
          borderColor: COLORS.textColor,
        },
      ]}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
    />
  ),
};

export default toastConfig;
const styles = StyleSheet.create({
  container: {
    borderLeftWidth: SIZES.base,
    backgroundColor: '#28282B',
    height: SIZES.padding * 3.2,
    borderWidth: 2,
    zIndex: -1,
  },
  contentContainerStyle: {
    paddingHorizontal: SIZES.base * 2 - 1,
    borderRadius: SIZES.small,
  },
  text1Style: {
    ...FONTS.Regular10,
    color: COLORS.background,
  },
  text2Style: {
    ...FONTS.Regular09,
    color: COLORS.background,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: SIZES.padding,
  },
});
