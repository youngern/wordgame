import React, { useEffect, useState } from 'react';
import update from 'immutability-helper';
import { getVariables } from '../services/Template';
import WordList from '../components/WordList';

const Fill = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadVariables = async () => {
      const variables = await getVariables('vacation');
      setData(variables);
    };

    loadVariables();
  }, []);

  const onUpdate = (key, val) =>
    setData(update(data, { [key]: { value: { $set: val } } }));

  return (
    <WordList
      data={data}
      onFinish={(variables) => {
        navigation.navigate('Finished', { variables });
      }}
      onUpdate={onUpdate}
    />
  );
};

export default Fill;
