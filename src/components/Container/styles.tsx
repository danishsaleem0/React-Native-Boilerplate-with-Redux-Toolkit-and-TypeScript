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
  imageBackground: {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    top: 0,
    width: SIZES.width,
    height: SIZES.height + SIZES.padding * 3,
    opacity: 0.7,
  },
});

export default styles;
