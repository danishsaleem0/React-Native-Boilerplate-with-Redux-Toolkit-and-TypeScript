import {StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.base * 2,
  },
  boldText16: {...FONTS.Bold17, color: COLORS.primary},
  mainView: {
    alignItems: 'center',
    paddingVertical: SIZES.base * 3,
    backgroundColor: COLORS.background,
    borderRadius: SIZES.padding + 5,
  },
  lottieView: {
    width: '100%',
    height: SIZES.padding * 7,
  },
});

export default styles;
