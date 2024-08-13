import {StyleProp, ViewStyle} from 'react-native';

interface IData {
  id: string;
  value: string;
  label: string;
}
export interface IDynamicDropDown {
  data: IData[];
  dropdownLabelText: string;
  dropdownStyle?: StyleProp<ViewStyle>;
  dropdownContainerStyle?: StyleProp<ViewStyle>;
  onChange: (value: string) => void;
  isSearhable?: boolean;
  disable?: boolean;
  errorText: string | undefined;
  isError: string | undefined | boolean;

  value: string;
}
