import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import update from 'immutability-helper';
import Input from './Input';

const Footer = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Narrate!</Text>
    </TouchableOpacity>
  );
};

const WordList = ({ onFinish, data }) => {
  const [list, setList] = useState(data);

  useEffect(() => {
    setList(data);
  }, [data]);

  const onChangeText = (key) => (val) => {
    setList(update(list, { [key]: { value: { $set: val } } }));
  };

  return (
    <FlatList
      data={list}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Input
          accessibilityLabel="answer input"
          accessibilityHint="input"
          label={item.type}
          defaultValue={item.value}
          onChangeText={onChangeText(index)}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={
        <Footer
          onPress={() => {
            onFinish(list);
          }}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },

  separator: {
    height: 5,
    backgroundColor: 'transparent',
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

export default WordList;
