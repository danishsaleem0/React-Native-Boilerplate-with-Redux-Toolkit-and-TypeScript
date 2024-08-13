import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigation/Stack/AuthStack';
import NavigationStrings from '../../navigation/NavigationStrings';

export interface ILoginProps {
  navigation: StackNavigationProp<AuthStackParamList, NavigationStrings.LOGIN>;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}
