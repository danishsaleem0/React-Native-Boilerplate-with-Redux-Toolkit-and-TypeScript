import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding2,
    backgroundColor: COLORS.background,
  },
  container2: {
    flexGrow: 1,
    paddingHorizontal: SIZES.padding2,
    backgroundColor: COLORS.background,
  },
});

export default styles;
