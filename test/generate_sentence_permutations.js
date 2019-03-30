const { expect } = require('chai');

const generateSentences = require('../index');

describe('Generating all permutation of sentences', () => {
  it('should return all the generate phrases', async () => {
    const wordList = [
      ['eat'],
      ['code', 'commit'],
      ['sleep']
    ];
    const sentences = generateSentences(wordList);
    expect(sentences).to.deep.equal([ 'eat code sleep', 'eat commit sleep' ]);
  });

  it('should return empty list', async () => {
    const wordList = [];
    const sentences = generateSentences(wordList);
    expect(sentences).to.equal(null);
  });

  it('should return empty list for null input', async () => {
    const wordList = null;
    const sentences = generateSentences(wordList);
    expect(sentences).to.equal(null);
  });
});
