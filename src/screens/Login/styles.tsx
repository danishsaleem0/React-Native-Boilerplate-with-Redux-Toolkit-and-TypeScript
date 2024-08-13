import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
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
});

export default styles;
