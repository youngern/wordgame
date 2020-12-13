export default {
  template: `
    A vacation is when you take a trip to some {{ word0 }} place
    with your {{ word1 }} family. Usually you go to some place
    that is near a/an {{ word2 }} or up on a/an {{ word3 }}.
    A good vacation place is one where you can ride {{ word4 }}
    or play {{ word5 }} or go hunting for {{ word6 }} . I like
    to spend my time {{ word7 }} or {{ word8 }}.
    When parents go on a vacation, they spend their time eating
    three {{ word9 }} a day, and fathers play golf, and mothers
    sit around {{ word10 }}. Last summer, my little brother
    fell in a/an {{ word11 }} and got poison {{ word12 }} all
    over his {{ word13 }}. My family is going to go to (the)
    {{ word14 }}, and I will practice {{ word15 }}. Parents
    need vacations more than kids because parents are always very
    {{ word16 }} and because they have to work {{ word17 }}
    hours every day all year making enough {{ word18 }} to pay
    for the vacation.
  `,
  variables: [
    {
      key: 'word0',
      type: 'adjective',
      value: 'beautiful',
    },
    {
      key: 'word1',
      type: 'adjective',
      value: 'whole',
    },
    {
      key: 'word2',
      type: 'noun',
      value: 'hill',
    },
    {
      key: 'word3',
      type: 'noun',
      value: 'mound',
    },
    {
      key: 'word4',
      type: 'noun',
      plural: true,
      value: 'games',
    },
    {
      key: 'word5',
      type: 'noun',
      category: 'game',
      value: 'cups',
    },
    {
      key: 'word6',
      type: 'noun',
      plural: true,
      value: 'cups',
    },
    {
      key: 'word7',
      type: 'gerund',
      value: 'skiing',
    },
    {
      key: 'word8',
      type: 'gerund',
      value: 'golfing',
    },
    {
      key: 'word9',
      type: 'noun',
      plural: true,
      value: 'goats',
    },
    {
      key: 'word10',
      type: 'gerund',
      value: 'knitting',
    },
    {
      key: 'word11',
      type: 'noun',
      value: 'vat',
    },
    {
      key: 'word12',
      type: 'noun',
      category: 'plant',
      value: 'poison ivy',
    },
    {
      key: 'word13',
      type: 'noun',
      category: 'part of body',
      value: 'kneecap',
    },
    {
      key: 'word14',
      type: 'pronoun',
      category: 'place',
      value: 'New Hampshire',
    },
    {
      key: 'word15',
      type: 'gerund',
      value: 'playing',
    },
    {
      key: 'word16',
      type: 'adjective',
      value: 'busy',
    },
    {
      key: 'word17',
      type: 'number',
      value: 1,
    },
    {
      key: 'word18',
      plural: true,
      type: 'noun',
      value: 'fish',
    },
  ],
};
