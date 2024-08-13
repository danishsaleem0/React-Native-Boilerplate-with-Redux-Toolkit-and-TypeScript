import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  input: {
    ...FONTS.Regular13,
    color: COLORS.iconColor,
    padding: 0,
    height: SIZES.padding * 2.3,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.transparent,
    paddingHorizontal: SIZES.padding2,
    borderWidth: 1.5,
    marginVertical: SIZES.small,
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  errorText: {
    ...FONTS.Regular11,
    color: 'red',
    width: '100%',
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default styles;
