import {StyleSheet} from 'react-native';

const styles = (thickness: number, color: string) => {
  return StyleSheet.create({
    vertical: {
      width: thickness,
      height: '100%',
      backgroundColor: color,
    },
    horizontal: {
      width: '100%',
      height: thickness,
      backgroundColor: color,
    },
  });
};

export default styles;
