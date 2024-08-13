import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  regular14: {
    color: COLORS.iconColor,
    lineHeight: 25,
  },
  commonView: {
    marginVertical: SIZES.small,
  },
  fieldName: {
    color: COLORS.secondary,
  },
});

export default styles;
