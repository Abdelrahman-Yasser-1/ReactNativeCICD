import React, {useEffect} from 'react';
import Providers from '../Providers';
import MainNavigator from '../Navigation/mainStack';
import Crashes from 'appcenter-crashes';
import {Alert} from 'react-native';

function App(): React.JSX.Element {
  useEffect(() => {
    async function checkCrash() {
      const didCrash = await Crashes.hasCrashedInLastSession();

      if (didCrash) {
        Alert.alert(
          'Oops! It looks like the app crashed last time.',
          'We apologize for the inconvenience and are working on a fix.',
        );
      }
    }
    checkCrash();
  }, []);
  return (
    <Providers>
      <MainNavigator />
    </Providers>
  );
}

export default App;
