import React from 'react';
import 'react-native-gesture-handler';

import {useColorScheme} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import Routes from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DarkTheme}>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
