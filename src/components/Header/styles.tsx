import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
    borderBottomWidth: 0.5,
    borderColor: COLORS.strokeColor,
  },

  titleView: {
    flex: 1,
    paddingLeft: SIZES.small,
  },
  centerTitleView: {
    alignItems: 'center',
  },
  button: {
    padding: SIZES.small,
  },
  welcomeText: {
    ...FONTS.light13,
    top: SIZES.small,
    color: COLORS.secondary,
  },
  titleText: {
    ...FONTS.Bold23,
    color: COLORS.black,
  },
  backBtn: {
    borderRadius: SIZES.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionText: {
    ...FONTS.light13,
    color: COLORS.background,
  },
  profileImage: {
    width: SIZES.padding * 2.1,
    height: SIZES.padding * 2.1,
    resizeMode: 'contain',
    borderRadius: SIZES.radius,
    marginHorizontal: SIZES.small,
  },
  inputView: {
    margin: SIZES.padding2,
    borderRadius: SIZES.base * 2,
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.padding2,
    borderWidth: 1,
    borderColor: COLORS.strokeColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 17,
    height: SIZES.padding * 2.3,
  },
  input: {
    ...FONTS.Regular12,
    color: COLORS.black,
    padding: 0,
    height: SIZES.padding * 2.3,
    flex: 1,
  },
});

export default styles;
