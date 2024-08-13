import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  NoDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...FONTS.Medium18,
  },
  lottieView: {
    height: SIZES.padding * 10,
    width: SIZES.padding * 10,
  },
});

export default styles;
