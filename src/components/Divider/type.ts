import {StyleProp, ViewStyle} from 'react-native';

type DividerOrientation = 'vertical' | 'horizontal';

export type DividerProps = {
  orientation?: DividerOrientation;
  thickness?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};
