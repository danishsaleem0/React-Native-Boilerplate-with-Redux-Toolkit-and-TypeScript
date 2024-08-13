import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.base,
    height: SIZES.h40,
  },
  dropdown: {
    height: SIZES.h40,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.background,
    flex: 1,
    paddingHorizontal: SIZES.padding2,
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    ...FONTS.Regular11,
  },
  placeholderStyle: {
    ...FONTS.Regular12,
    color: COLORS.place_holder_color,
  },
  selectedTextStyle: {
    ...FONTS.Regular12,
    color: COLORS.black,
  },

  inputSearchStyle: {
    height: SIZES.padding * 2,
    ...FONTS.Regular12,
    borderRadius: SIZES.medium,
    borderColor: COLORS.borderColor,
  },
  errorText: {
    ...FONTS.Regular10,
    color: 'red',
    bottom: SIZES.small,
  },
});

export default styles;
