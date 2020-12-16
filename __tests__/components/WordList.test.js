import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import WordList from '../../src/components/WordList';

test('form submits two answers', () => {
  const data = [
    {
      type: 'noun',
      value: 'fire',
    },
    {
      type: 'noun',
    },
  ];

  const onFinish = jest.fn();

  const { getAllByA11yLabel, getByText } = render(
    <WordList data={data} onFinish={onFinish} />,
  );

  const answerInputs = getAllByA11yLabel('answer input');
  fireEvent.changeText(answerInputs[0], 'bear');
  fireEvent.changeText(answerInputs[1], 'tiger');
  fireEvent.press(getByText('Narrate!'));

  expect(onFinish).toBeCalledWith([
    {
      type: 'noun',
      value: 'bear',
    },
    {
      type: 'noun',
      value: 'tiger',
    },
  ]);
});
