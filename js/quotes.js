/*
 * An array containing quotes with the structure:
 *    text: The quote,
 *    source: who said the quote,
 *    citation: where the quote appeard or was published, null if unknown,
 *    date: when the quote occured or was published, null if unknown,
 *    tags: an array of categories the quote fits into.
 *    id: number that should match the index in the array (0-indexed).
 */
var quotes = [
  {
    text: 'Happiness can be found at the darkest of times if only one remembers to turn on the light.',
    source: 'Albus Dumbledore',
    citation: 'Harry Potter and the Prisoner of Azkaban',
    date: '1999',
    tags: ['inspiration', 'fiction', 'literature'],
    id: 0
  },

  {
    text: 'It is a well known fact that those people who most want to rule people are ipso facto the least suited to do it. Anyone who is capable of getting themselves made president should on no account be allowed to do the job.',
    source: 'Douglas Adams',
    citation: 'The Restaurant on the Edge of the Universe',
    date: '1980',
    tags: ['wit', 'humor', 'literature', 'politics'],
    id: 1
  },

  {
    text: 'Clothes make the man. Naked people have little or no influence over society.',
    source: 'Mark Twain',
    citation: 'More Maxims of Mark',
    date: '1927',
    tags: ['wit', 'humor', 'literature'],
    id: 2
    },

  {
    text: 'Not everything that can be counted counts, and not everything that counts can be counted.',
    source: 'Albert Einstein',
    citation: null,
    date: null,
    tags: ['wit', 'science', 'philosophy'],
    id: 3
  },

  {
    text: 'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
    source: 'Bertrand Russel',
    citation: null,
    date: null,
    tags: ['wit', 'philosophy'],
    id: 4
  }
];
