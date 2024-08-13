import {StyleSheet} from 'react-native';
import {FONTS, SIZES, COLORS} from '../../constant';

const styles = StyleSheet.create({
  pickerButton: {
    height: SIZES.h40,
    borderRadius: SIZES.small,
    borderColor: COLORS.borderColor,
    paddingHorizontal: SIZES.padding2,
    borderWidth: 1,
    justifyContent: 'space-between',
    marginVertical: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerText: {
    ...FONTS.Regular11,
    color: COLORS.place_holder_color,
  },
  pickerSelectedText: {
    ...FONTS.Regular11,
    color: COLORS.black,
  },
  errorText: {
    ...FONTS.Regular10,
    color: COLORS.red,
  },
});
export default styles;
