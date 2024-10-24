import React from 'react';
import {MainStackParamList} from './types';
import {SCREEN_NAME} from '@src/enums';
import {About, AppCenter, Counter, Home} from '@src/screens';
import {createStackNavigator} from '@react-navigation/stack';

const MainStack = createStackNavigator<MainStackParamList>();

const screenOptions = {
  headerShown: true,
};

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={screenOptions}
      initialRouteName={SCREEN_NAME.HOME}>
      <MainStack.Screen name={SCREEN_NAME.HOME} component={Home} />
      <MainStack.Screen name={SCREEN_NAME.ABOUT} component={About} />
      <MainStack.Screen name={SCREEN_NAME.APP_CENTER} component={AppCenter} />
      <MainStack.Screen name={SCREEN_NAME.COUNTER} component={Counter} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
