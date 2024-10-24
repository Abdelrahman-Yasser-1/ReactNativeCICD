import {PropsWithChildren} from 'react';
import {TextProps as RNTextProps} from 'react-native';

export type TextVariants = 'default' | 'title' | 'subTitle' | 'info';

export interface TextProps extends PropsWithChildren {
  style?: RNTextProps['style'];
  variant?: TextVariants;
}
