import React from 'react';
import {
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const Footer = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Read Story</Text>
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
        <TextInput
          style={styles.item}
          placeholder={item.type}
          onChangeText={onChangeText(index)}
          defaultValue={item.value.toString()}
        />
      )}
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
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
