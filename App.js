/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Finished from './src/scenes/Finished';
import Fill from './src/scenes/Fill';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mab Libs">
        <Stack.Screen name="Finished" component={Finished} />
        <Stack.Screen name="Mab Libs" component={Fill} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
