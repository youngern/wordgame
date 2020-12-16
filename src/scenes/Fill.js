import React, { useEffect, useState } from 'react';
import { getVariables } from '../services/Template';
import { WordList } from '../components';

const Fill = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadVariables = async () => {
      const variables = await getVariables('vacation');
      setData(variables);
    };

    loadVariables();
  }, []);

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
