import React, {PropsWithChildren} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';

const Screen = ({children}: PropsWithChildren) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default Screen;
