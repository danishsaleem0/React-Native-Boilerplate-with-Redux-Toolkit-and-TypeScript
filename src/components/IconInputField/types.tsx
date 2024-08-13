import {
  StyleProp,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TextInput,
} from 'react-native';
import {RefObject} from 'react';

interface IconProps {
  name: string;
  type: string;
  color?: string;
  size?: number;
}

interface FieldProps {
  name: string;
  onBlur: (field: string) => void;
  onChange: (field: string) => (value: string) => void;
  value: string;
}

interface FormProps {
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  setFieldTouched: (field: string, touched?: boolean) => void;
}

export interface IIconInputFieldProps {
  style?: StyleProp<ViewStyle>;
  placeholder: string;
  secureText?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  defaultValue?: string;
  onFocus?: () => void;
  inputRef?: RefObject<TextInput> | null;
  isEdit?: boolean;
  leftIcon?: IconProps;
  inputStyle?: StyleProp<TextStyle>;
  rightIcon?: IconProps;
  onPressRightIcon?: () => void;
  maxLength?: number;
  onSubmitEditing?: TextInputProps['onSubmitEditing'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  multiline?: boolean;
  scrollEnabled?: boolean;
  numberOfLines?: number;
  disabled?: boolean;
  field: FieldProps;
  form: FormProps;
  isFocused: boolean;
  setUnfocused?: React.Dispatch<React.SetStateAction<boolean>>;
  rightIconDisabled?: boolean;
}
