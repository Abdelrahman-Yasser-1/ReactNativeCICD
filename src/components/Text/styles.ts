import {StyleSheet, TextStyle} from 'react-native';
import {TextVariants} from './type';

const variants: Record<TextVariants, TextStyle> = {
  default: {
    fontSize: 20,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#024CAA',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#024CAA',
  },
  info: {
    fontSize: 18,
    fontWeight: '400',
    color: '#758694',
    textAlign: 'center',
  },
};

const styles = (variant: TextVariants) =>
  StyleSheet.create({
    text: {
      ...variants[variant],
    },
  });
export default styles;
