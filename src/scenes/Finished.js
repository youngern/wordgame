/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Story } from '../components';

const Finished = ({ route }) => {
  const { variables } = route.params;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Story templateName="vacation" variables={variables} />
      </SafeAreaView>
    </>
  );
};

export default Finished;
