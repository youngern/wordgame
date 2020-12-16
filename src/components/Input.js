import React from 'react';
import { StyleSheet } from 'react-native';
import { Kaede as TextInput } from 'react-native-textinput-effects';

const safeToString = (value) => (value ? value.toString() : '');

const Input = ({ label, defaultValue, onChangeText, ...rest }) => (
  <TextInput
    label={label}
    onChangeText={onChangeText}
    defaultValue={safeToString(defaultValue)}
    labelStyle={styles.label}
    {...rest}
  />
);

export default Input;

const styles = StyleSheet.create({
  label: {
    backgroundColor: '#ffa90a',
    color: '#fff',
  },
});
