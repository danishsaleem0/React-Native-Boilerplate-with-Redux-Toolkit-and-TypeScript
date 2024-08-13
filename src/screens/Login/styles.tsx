import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  logoStyle: {
    width: '80%',
    height: undefined,
    aspectRatio: 130 / 76,
    resizeMode: 'contain',
  },
  headerView: {
    paddingTop: SIZES.padding * 4,
    paddingBottom: SIZES.padding * 2,
  },
  commonView: {
    marginVertical: SIZES.small,
  },
  fieldName: {
    color: COLORS.secondary,
  },
  forgotButton: {
    alignSelf: 'flex-end',
  },
  mediumText14: {
    ...FONTS.Medium14,
    color: COLORS.iconColor,
    paddingVertical: SIZES.padding2,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.iconColor,
  },
  regularText14: {
    ...FONTS.Regular14,
  },

  boldText14: {...FONTS.Bold14, color: COLORS.secondary},
});

export default styles;
