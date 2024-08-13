import {StyleProp, ViewStyle} from 'react-native';

interface Data {
  id: string | number;
  value: string;
  label: string;
}
export interface IDynamicDropDown {
  data: Data[];
  dropdownLabelText: string;
  dropdownStyle?: StyleProp<ViewStyle>;
  dropdownContainerStyle?: StyleProp<ViewStyle>;
  onChange: (value: Data) => void;
  isSearhable?: boolean;
  disable?: boolean;
  errorText: string;
  isError: string;
  value: Data;
}
