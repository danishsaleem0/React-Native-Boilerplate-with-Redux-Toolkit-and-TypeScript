import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  view: {
    backgroundColor: COLORS.background,
    padding: SIZES.padding2,
    borderTopLeftRadius: SIZES.base * 3,
    borderTopRightRadius: SIZES.base * 3,
    overflow: 'hidden',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...FONTS.Regular12,
    color: COLORS.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingLeft: SIZES.small,
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
