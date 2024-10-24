import {TextProps, TouchableOpacityProps} from 'react-native';

export type ButtonProps = {
  text: string;
  onPress: TouchableOpacityProps['onPress'];
  style?: TouchableOpacityProps['style'];
  textStyle?: TextProps['style'];
};
