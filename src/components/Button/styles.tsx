import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  btn: {
    height: SIZES.padding * 2.3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: SIZES.radius * 2,
    backgroundColor: COLORS.secondary,
    marginVertical: SIZES.small,
  },
  text: {
    color: COLORS.background,
    ...FONTS.Medium14,
  },
  emptyView: {
    width: SIZES.h20,
  },
});

export default styles;
