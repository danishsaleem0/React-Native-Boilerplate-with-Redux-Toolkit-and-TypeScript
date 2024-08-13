import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constant';

const styles = StyleSheet.create({
  text: {
    color: COLORS.text_color,
    ...FONTS.Regular14,
  },
});

export default styles;
