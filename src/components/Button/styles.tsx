import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  btn: {
    height: SIZES.padding * 2.1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginVertical: SIZES.small,
  },

  text: {
    color: COLORS.background,
    ...FONTS.Bold14,
  },
  emptyView: {
    width: SIZES.h20,
  },
});

export default styles;
