import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DividerProps} from './type';
import styles from './styles';

const Divider = ({
  orientation = 'horizontal',
  thickness = 0.5,
  color = '#024CAA',
  style,
}: DividerProps) => {
  const createdStyle = styles(thickness, color);

  return (
    <View
      style={StyleSheet.compose(
        orientation === 'horizontal'
          ? createdStyle.horizontal
          : createdStyle.vertical,
        style,
      )}
    />
  );
};

export default Divider;
