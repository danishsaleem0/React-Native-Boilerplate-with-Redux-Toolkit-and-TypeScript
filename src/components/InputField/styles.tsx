import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  input: {
    ...FONTS.Regular12,
    color: COLORS.black,
    padding: 0,
    height: SIZES.padding * 2.1,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.padding2,
    borderWidth: 1,
    marginVertical: SIZES.small,
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  errorText: {
    ...FONTS.Regular10,
    color: 'red',
    width: '100%',
  },

  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default styles;
