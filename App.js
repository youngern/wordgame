/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import codePush from 'react-native-code-push';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { Finished, Fill } from './src/scenes';

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

export default codePush(App);
