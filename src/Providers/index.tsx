import {NavigationContainer} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Providers = ({children}: PropsWithChildren) => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavigationContainer>{children}</NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Providers;
