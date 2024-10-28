import React from 'react';
import {TextInput as BaseInput, StyleSheet, View} from 'react-native';
import {ITextInputProps} from './type';
import Text from '../Text';
import styles from './styles';

const TextInput = ({
  label,
  disabled,
  value,
  keyboardType = 'default',
  isSecureText,
  style: inputStyle,
  labelStyle,
  style: inputContainerStyle,
  accessibilityTextInputLabel,
  required,
  ...rest
}: ITextInputProps) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.labelContainer}
        accessible={true}
        accessibilityLabel={accessibilityTextInputLabel}>
        {required && label && <Text>*</Text>}
        {label && <Text style={labelStyle}>{label}</Text>}
      </View>
      <View>
        <View style={[styles.inputContainer, inputContainerStyle]}>
          <BaseInput
            value={value}
            style={StyleSheet.compose(styles.input, inputStyle)}
            editable={!disabled}
            keyboardType={keyboardType}
            secureTextEntry={isSecureText}
            {...rest}
          />
        </View>
      </View>
    </View>
  );
};
export default TextInput;
