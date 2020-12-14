export default {
  body: `
    A vacation is when you take a trip to some {{ words[0].value }} place
    with your {{ words[1].value }} family. Usually you go to some place
    that is near a/an {{ words[2].value }} or up on a/an {{ words[3].value }}.
    A good vacation place is one where you can ride {{ words[4].value }}
    or play {{ words[5].value }} or go hunting for {{ words[6].value }}. I like
    to spend my time {{ words[7].value }} or {{ words[8].value }}.
    When parents go on a vacation, they spend their time eating
    three {{ words[9].value }} a day, and fathers play golf, and mothers
    sit around {{ words[10].value }}. Last summer, my little brother
    fell in a/an {{ words[11].value }} and got poison {{ words[12].value }} all
    over his {{ words[13].value }}. My family is going to go to (the)
    {{ words[14].value }}, and I will practice {{ words[15].value }}. Parents
    need vacations more than kids because parents are always very
    {{ words[16].value }} and because they have to work {{ words[17].value }}
    hours every day all year making enough {{ words[18].value }} to pay
    for the vacation.
  `,
  variables: [
    {
      type: 'adjective',
      value: 'beautiful',
    },
    {
      type: 'adjective',
      value: 'whole',
    },
    {
      type: 'noun',
      value: 'hill',
    },
    {
      type: 'noun',
      value: 'mound',
    },
    {
      type: 'noun',
      plural: true,
      value: 'games',
    },
    {
      type: 'noun',
      category: 'game',
      value: 'cups',
    },
    {
      type: 'noun',
      plural: true,
      value: 'cups',
    },
    {
      type: 'gerund',
      value: 'skiing',
    },
    {
      type: 'gerund',
      value: 'golfing',
    },
    {
      type: 'noun',
      plural: true,
      value: 'goats',
    },
    {
      type: 'gerund',
      value: 'knitting',
    },
    {
      type: 'noun',
      value: 'vat',
    },
    {
      type: 'noun',
      category: 'plant',
      value: 'poison ivy',
    },
    {
      type: 'noun',
      category: 'part of body',
      value: 'kneecap',
    },
    {
      type: 'pronoun',
      category: 'place',
      value: 'New Hampshire',
    },
    {
      type: 'gerund',
      value: 'playing',
    },
    {
      type: 'adjective',
      value: null,
    },
    {
      type: 'number',
      value: 1,
    },
    {
      plural: true,
      type: 'noun',
      value: 'fish',
    },
  ],
};
