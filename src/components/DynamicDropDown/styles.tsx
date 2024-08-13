import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.small,
    height: SIZES.padding * 2.3,
  },
  dropdown: {
    height: SIZES.padding * 2.3,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.transparent,
    flex: 1,
    paddingHorizontal: SIZES.padding2,
    borderWidth: 1.5,
    borderColor: COLORS.borderColor,
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
    color: COLORS.placeHolderColor,
  },
  selectedTextStyle: {
    ...FONTS.Regular12,
    color: COLORS.black,
  },

  inputSearchStyle: {
    height: SIZES.padding * 2,
    ...FONTS.Regular12,
    borderRadius: SIZES.base,
    borderColor: COLORS.borderColor,
  },
  errorText: {
    ...FONTS.Regular11,
    color: 'red',
    bottom: SIZES.small,
  },
});

export default styles;
