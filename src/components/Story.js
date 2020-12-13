/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getTemplate } from '../services/Template';

import { capitalize } from '../utils';

const Story = ({ templateName, variables }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const loadTemplate = async () => {
      const assigned = await getTemplate(templateName, variables);
      setText(assigned);
    };

    loadTemplate();
  }, [variables, templateName]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{capitalize(templateName)}</Text>
          <Text style={styles.sectionDescription}>{text}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default Story;
