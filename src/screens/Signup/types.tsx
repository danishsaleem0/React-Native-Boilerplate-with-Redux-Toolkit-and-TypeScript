import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigation/Stack/AuthStack';
import NavigationStrings from '../../navigation/NavigationStrings';
import {TextInputMask, TextInputMaskMethods} from 'react-native-masked-text';

export interface ISignUpProps {
  navigation: StackNavigationProp<
    AuthStackParamList,
    NavigationStrings.SIGN_UP
  >;
}
export type InputMask = TextInputMask & TextInputMaskMethods;

export interface ISignUpFormValues {
  fullName: string;
  cnic: string;
  employeeID: string;
  email: string;
  password: string;
  confirmPassword: string;
}
