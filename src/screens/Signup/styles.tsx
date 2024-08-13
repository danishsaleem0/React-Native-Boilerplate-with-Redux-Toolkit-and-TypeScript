import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  boldText30: {
    ...FONTS.Bold30,
    color: COLORS.secondary,
    paddingVertical: SIZES.padding,
  },
  mediumText25: {
    color: COLORS.black,
    ...FONTS.Medium25,
    paddingVertical: SIZES.padding2,
    paddingLeft: SIZES.small,
  },
  mediumText12: {
    color: COLORS.black,
    ...FONTS.Medium12,
  },
  buttonStyle: {
    marginTop: SIZES.padding,
    marginBottom: SIZES.medium,
  },
  commonView: {
    marginVertical: SIZES.small,
  },
  fieldName: {
    color: COLORS.secondary,
  },
  regularText14: {
    ...FONTS.Regular14,
  },
  boldText14: {...FONTS.Bold14, color: COLORS.secondary},
  input: {
    ...FONTS.Regular13,
    padding: 0,
    color: COLORS.iconColor,
    paddingHorizontal: SIZES.padding2,
    borderRadius: SIZES.base,
    height: SIZES.padding * 2.3,
    marginVertical: SIZES.small,
    borderWidth: 1.5,
    backgroundColor: COLORS.transparent,
  },
  errorText: {
    ...FONTS.Regular11,
    color: 'red',
  },
  regularText13: {
    ...FONTS.Regular13,
    color: COLORS.strokeColor,
  },
  boldText13: {
    ...FONTS.Bold13,
    color: COLORS.strokeColor,
  },
  paddingVertical: {
    paddingBottom: SIZES.base * 2,
    paddingTop: SIZES.base,
  },
  regularText12: {
    ...FONTS.Regular12,
    color: '#6985B2',
  },
});

export default styles;
