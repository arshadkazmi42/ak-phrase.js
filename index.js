const generateSentencePermutations = (
  wordsList,
  startIndex,
  wordIndex,
  sentences,
  generatedSentencesArr,
) => {
  /* eslint-disable no-param-reassign */
  sentences[startIndex] = wordsList[startIndex][wordIndex];

  if (startIndex === wordsList.length - 1) {
    generatedSentencesArr.push(sentences.join(' '));
    return;
  }

  wordsList.slice(startIndex + 1).forEach((_, i) => {
    generateSentencePermutations(
      wordsList,
      startIndex + 1,
      i,
      sentences,
      generatedSentencesArr,
    );
  });
};

/**
 * Function `generateSentences` takes 2D array of words as input
 * Returns array of all the sentences possible to form using the words
 * It keeps the order of words same in sentence as given in input
 * First row will be first word in the sentence, second row will be second and so on
 * It will generate sentences equals to the number of rows in the 2D array
 */
const generateSentences = (wordsList) => {
  if (wordsList === null || !wordsList.length) {
    return null;
  }

  // To hold the temporary data
  const sentences = Array(wordsList.length);

  // Array to hold all the sentences formed.
  const generatedSentencesArr = [];

  wordsList[0].forEach((_, i) => {
    generateSentencePermutations(
      wordsList,
      0,
      i,
      sentences,
      generatedSentencesArr,
    );
  });

  return generatedSentencesArr;
};

module.exports = generateSentences;
