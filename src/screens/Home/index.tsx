import React, {useCallback} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {MainStackParamList} from '@src/navigation/types';
import {SCREEN_NAME} from '@src/enums';
import {Button, Divider, Screen, Text} from '@src/components';

type Props = NativeStackScreenProps<MainStackParamList, SCREEN_NAME.HOME>;

const navigationButtons = [
  {label: 'About Project', screen: SCREEN_NAME.ABOUT},
  {
    label: 'Section 3 : Intro to App Center \n(Diagnostics & Analytics)',
    screen: SCREEN_NAME.APP_CENTER,
  },
  {label: 'Section 4 : CI (Counter Example)', screen: SCREEN_NAME.COUNTER},
  // You can add more buttons here as needed
];
const Home = ({navigation}: Props) => {
  const handleNavigate = useCallback(
    (screenName: keyof MainStackParamList) => {
      navigation.navigate(screenName);
    },
    [navigation],
  );

  return (
    <Screen>
      <View style={styles.container}>
        <Text variant="title">Welcome to ReactNativeCICD</Text>
        <Divider />
        {navigationButtons.map((button, index) => (
          <Button
            key={index}
            text={button.label}
            onPress={() => handleNavigate(button.screen)}
          />
        ))}
      </View>
    </Screen>
  );
};

export default Home;
