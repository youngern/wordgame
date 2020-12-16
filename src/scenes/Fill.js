import React, { useEffect, useState } from 'react';
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

  console.log('variables', data);

  return (
    <WordList
      data={data}
      onFinish={(variables) => {
        navigation.navigate('Finished', { variables });
      }}
    />
  );
};

export default Fill;
