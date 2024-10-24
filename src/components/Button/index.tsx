import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './type';
import styles from './styles';

const Button = ({text, onPress, style, textStyle}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.button, style)}
      onPress={onPress}>
      <Text style={StyleSheet.compose(styles.buttonText, textStyle)}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
