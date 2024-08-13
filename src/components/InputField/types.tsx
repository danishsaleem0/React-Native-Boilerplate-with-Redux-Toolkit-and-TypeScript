import {
  StyleProp,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TextInput,
} from 'react-native';
import {RefObject} from 'react';

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

export interface IInputFieldProps {
  hidePassword?: boolean;
  style?: StyleProp<ViewStyle>;
  placeholder: string;
  keyboardType?: TextInputProps['keyboardType'];
  defaultValue?: string;
  onFocus?: () => void;
  inputRef?: RefObject<TextInput> | null;
  isEdit?: boolean;
  inputStyle?: StyleProp<TextStyle>;
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
}
