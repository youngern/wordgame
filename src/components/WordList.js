import React from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import Input from './Input';

const Footer = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Narrate!</Text>
    </TouchableOpacity>
  );
};

const WordList = ({ onFinish, onUpdate, data }) => {
  const onChangeText = (key) => (val) => onUpdate(key, val);

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Input
          type={item.type}
          defaultValue={item.value}
          onChangeText={onChangeText(index)}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={
        <Footer
          onPress={() => {
            onFinish(data);
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
