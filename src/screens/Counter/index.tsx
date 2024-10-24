import React, {useCallback, useState} from 'react';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {MainStackParamList} from '@src/navigation/types';
import {SCREEN_NAME} from '@src/enums';
import {View} from 'react-native';
import {Button, Screen, Text} from '@src/components';
import styles from './styles';

type Props = NativeStackScreenProps<MainStackParamList, SCREEN_NAME.COUNTER>;

const Counter = ({}: Props) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter(prev => prev - 1);
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <Text variant="title">Counter</Text>
        <Text>
          Practice for <Text variant="subTitle">Section 4 : CI</Text>
        </Text>
        <View style={styles.counterContainer}>
          <Button text="-" onPress={handleDecrement} />
          <Text variant="title">{counter.toString()}</Text>
          <Button text="+" onPress={handleIncrement} />
        </View>
      </View>
    </Screen>
  );
};
export default Counter;
