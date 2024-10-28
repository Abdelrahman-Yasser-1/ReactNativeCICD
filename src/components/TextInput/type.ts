import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface ITextInputProps extends TextInputProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  isSecureText?: boolean;
  labelStyle?: TextStyle;
  accessibilityTextInputLabel?: string;
  style?: ViewStyle;
}
