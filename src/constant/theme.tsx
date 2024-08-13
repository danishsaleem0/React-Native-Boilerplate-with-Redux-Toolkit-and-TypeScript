import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#E9F332',
  secondary: '#3CB779',
  text_color: '#16232D',
  secondary_text_color: '#303855',
  transparent: 'transparent',
  place_holder_color: 'rgba(31,31,31,0.4)',
  black: '#000000',
  red: '#EE4C44',
  grey: 'gray',
  card_background: '#F6FBF9',
  background: '#FFFFFF',
  borderColor: '#D9D9D9',
  strokeColor: '#C6C6C6',
  shadowColor: 'rgba(35,35,35,0.8)',
  darkShadowColor: 'rgba(35,35,35,0.9)',
  olive_green: '#A9C23F',
};

export const SIZES = {
  // global sizes
  small: RFValue(5),
  base: RFValue(8),
  medium: RFValue(10),
  large: RFValue(18),
  radius: RFValue(30),
  padding: RFValue(20),
  padding2: RFValue(12),

  // font sizes
  h8: 8,
  h9: 9,
  h9_5: 9.5,
  h10: 10,
  h11: 11,
  h12: 12,
  h13: 13,
  h14: 14,
  h15: 15,
  h16: 16,
  h17: 17,
  h18: 18,
  h19: 19,
  h20: 20,
  h21: 21,
  h22: 22,
  h23: 23,
  h24: 24,
  h25: 25,
  h26: 26,
  h27: 27,
  h28: 28,
  h30: 30,
  h32: 32,
  h33: 33,
  h35: 35,
  h40: 40,
  h45: 45,
  h48: 48,
  h50: 50,
  h52: 52,
  h55: 55,
  h60: 60,
  h65: 65,
  h70: 70,
  h72: 72,
  // app dimensions
  width,
  height,
};

export const FONTS = {
  ExtraBold09: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h9),
  },
  Bold40: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h40),
  },
  Bold35: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h35),
  },
  Bold30: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h30),
  },
  Bold28: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h28),
  },
  Bold25: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h25),
  },
  Bold24: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h24),
  },
  Bold23: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h23),
  },
  Bold22: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h22),
  },
  Bold20: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h20),
  },
  Bold19: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h19),
  },
  Bold18: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h18),
  },

  Bold17: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h17),
  },
  Bold16: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h16),
  },
  Bold15: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h15),
  },
  Bold14: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h14),
  },
  Bold13: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h13),
  },

  Bold12: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h12),
  },
  Bold11: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h11),
  },

  Bold10: {
    fontFamily: 'Gabarito-Bold',
    fontSize: RFValue(SIZES.h10),
  },

  Medium25: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h25),
  },
  Medium23: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h23),
  },
  Medium20: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h20),
  },
  Medium19: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h19),
  },
  Medium18: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h18),
  },
  Medium16: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h16),
  },
  Medium15: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h15),
  },
  Medium14: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h14),
  },
  Medium13: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h13),
  },
  Medium12: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h12),
  },
  Medium11: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h11),
  },
  Medium10: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h10),
  },
  Medium9: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h9),
  },
  Medium8: {
    fontFamily: 'Gabarito-Medium',
    fontSize: RFValue(SIZES.h8),
  },
  Regular17: {
    fontFamily: 'Gabarito-Regular',
    fontSize: RFValue(SIZES.h17),
  },
  Regular16: {
    fontFamily: 'Gabarito-Regular',
    fontSize: RFValue(SIZES.h16),
  },
  Regular15: {
    fontFamily: 'Gabarito-Regular',
    fontSize: RFValue(SIZES.h15),
  },
  Regular14: {
    fontFamily: 'Gabarito-Regular',
    fontSize: RFValue(SIZES.h14),
  },
  Regular13: {
    fontFamily: 'Gabarito-Regular',
    fontSize: RFValue(SIZES.h13),
  },
  Regular12: {
    fontFamily: 'Gabarito-Regular',
    fontSize: RFValue(SIZES.h12),
  },
  Regular11: {
    fontFamily: 'Gabarito-Regular',
    fontSize: RFValue(SIZES.h11),
  },
  Regular10: {
    fontFamily: 'Gabarito-Regular',
    fontSize: RFValue(SIZES.h10),
  },
  Regular09: {
    fontFamily: 'Gabarito-Regular',
    fontSize: RFValue(SIZES.h9),
  },
  light15: {
    fontFamily: 'Gabarito-Black',
    fontSize: RFValue(SIZES.h15),
  },
  light14: {
    fontFamily: 'Gabarito-Black',
    fontSize: RFValue(SIZES.h14),
  },
  light13: {
    fontFamily: 'Gabarito-Black',
    fontSize: RFValue(SIZES.h13),
  },
  light12: {
    fontFamily: 'Gabarito-Black',
    fontSize: RFValue(SIZES.h12),
  },
  light11: {
    fontFamily: 'Gabarito-Black',
    fontSize: RFValue(SIZES.h11),
  },
  light10: {
    fontFamily: 'Gabarito-Black',
    fontSize: RFValue(SIZES.h10),
  },
  light9: {
    fontFamily: 'Gabarito-Black',
    fontSize: RFValue(SIZES.h9),
  },
};

const appTheme = {FONTS, SIZES, COLORS};

export default appTheme;
