import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {MainStackParamList} from '@src/navigation/types';
import {SCREEN_NAME} from '@src/enums';
import {Button, Divider, Screen, Text, TextInput} from '@src/components';

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

  const [inputValue, setInputValue] = useState<string>('');
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
        <Divider />
        <Text variant="title">Section 5: Continuous Quality (CQ)</Text>
        <Text variant="info">
          I added this at home screen not in separated screen because of UI
          testing problem in xcode and Android Studio
        </Text>
        <TextInput
          placeholder="Enter your name"
          value={inputValue}
          onChangeText={setInputValue}
        />
        {inputValue && <Text>{`Welcome to CICD, ${inputValue}`}</Text>}
        <Divider />
      </View>
    </Screen>
  );
};
export default Home;
