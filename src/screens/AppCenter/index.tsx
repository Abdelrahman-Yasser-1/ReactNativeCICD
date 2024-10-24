import React from 'react';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {MainStackParamList} from '@src/navigation/types';
import {SCREEN_NAME} from '@src/enums';
import {View} from 'react-native';
import {Button, Divider, Screen, Text} from '@src/components';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import styles from './styles';

type Props = NativeStackScreenProps<MainStackParamList, SCREEN_NAME.APP_CENTER>;

const AppCenter = ({}: Props) => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text variant="title">Simulate a Crash</Text>
        <Text variant="info">
          Use this option to simulate a crash and test how the app handles it.
          This is useful for debugging crash reporting mechanisms.
        </Text>

        <Button
          text="Fours App Crashing"
          onPress={() => {
            // Simulating a crash using AppCenter's `Crashes.generateTestCrash` function
            Crashes.generateTestCrash();
            // Alternatively, crash by throwing an error:
            // throw new Error('Intentional App Crash');
          }}
        />
        <Divider />
        <Text variant="title">Tracking Event</Text>
        <Text variant="info">
          Track key user interactions such as button clicks and screen
          navigation. The data is sent to AppCenter for further analysis to help
          enhance app performance and improve the overall user experience.
        </Text>
        <Button
          text="Trigger Event X"
          onPress={() => {
            Analytics.trackEvent(
              'Event X triggered successfully',
              // Send any information with event to help in tracking and improve the overall user experience.s
              {
                Internet: 'Cellular',
                GPS: 'on',
              },
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default AppCenter;
