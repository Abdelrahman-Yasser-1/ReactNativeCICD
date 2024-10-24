import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {TextProps} from './type';
import styles from './styles';

const Text = ({children, variant = 'default', style}: TextProps) => {
  return (
    <RNText style={StyleSheet.compose(styles(variant).text, style)}>
      {children}
    </RNText>
  );
};

export default Text;
