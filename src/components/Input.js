import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ type, value, onChangeText, defaultValue, ...rest }) => (
  <TextInput
    style={styles.item}
    placeholder={type}
    onChangeText={onChangeText}
    defaultValue={value.toString()}
    {...rest}
  />
);

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#ffa90a',
    justifyContent: 'center',
    padding: 5,
    height: 50,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
