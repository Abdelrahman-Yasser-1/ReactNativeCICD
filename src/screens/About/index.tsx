import React, {useCallback} from 'react';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {MainStackParamList} from '@src/navigation/types';
import {SCREEN_NAME} from '@src/enums';
import {Linking, View} from 'react-native';
import {Button, Screen, Text} from '@src/components';
import styles from './styles';

type Props = NativeStackScreenProps<MainStackParamList, SCREEN_NAME.ABOUT>;

const About = ({}: Props) => {
  const handleAccessCoursePress = useCallback(() => {
    Linking.openURL(
      'https://www.udemy.com/course/continuous-integration-and-continuous-delivery-for-react-native/?couponCode=MTST7102224B2',
    );
  }, []);
  return (
    <Screen>
      <View style={styles.container}>
        <Text variant="title">About This Project</Text>

        <Text>
          This project serves as a practical application for the{' '}
          <Text variant="subTitle">Master CI/CD for React Native</Text> course
          on Udemy, designed to equip you with essential skills in Continuous
          Integration and Continuous Delivery.
        </Text>
        <Button text="Access Course" onPress={handleAccessCoursePress} />
      </View>
    </Screen>
  );
};

export default About;
