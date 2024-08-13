import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constant';

const styles = StyleSheet.create({
  text: {
    color: COLORS.textColor,
    ...FONTS.Regular14,
  },
});

export default styles;
