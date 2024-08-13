import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.background,
    height: SIZES.padding * 3.2,
    borderTopLeftRadius: SIZES.padding * 3 - SIZES.small,
    borderTopRightRadius: SIZES.padding * 3 - SIZES.small,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  tabTextActive: {
    ...FONTS.Bold11,
    color: COLORS.secondary,
    marginTop: SIZES.small,
  },
  tabTextInActive: {
    ...FONTS.Bold11,
    color: '#484C52',
    marginTop: SIZES.small,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: SIZES.padding * 3.2,
    paddingHorizontal: SIZES.small,
    width: '33.33%',
  },
  icon: {
    width: SIZES.large,
    height: SIZES.large,
  },
  icon2: {
    width: SIZES.padding * 2.2,
    height: SIZES.padding * 2.2,
  },

  iconView: {
    width: SIZES.padding * 3.2,
    height: SIZES.padding * 3.2,
    borderRadius: SIZES.radius * 2,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
