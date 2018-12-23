'use strict';

const externals = {}


/**
 * Function `generateSentences` takes 2D array of words as input
 * Returns array of all the sentences possible to form using the words
 * It keeps the order of words same in sentence as given in input
 * First row will be first word in the sentence, second row will be second and so on
 * It will generate sentences equals to the number of rows in the 2D array
 */
externals.generateSentences = (wordsList) => {
  if (wordsList === null || wordsList.length === 0) {
    return null;
  }

  // To hold the temporary data
  const sentences = Array(wordsList.length).fill('')

  // Array to hold all the sentences formed.
  let generatedSentences = []

  for (let i=0;i < wordsList[0].length;i++) {
    externals.generateSentencePermutations(wordsList, 0, i, sentences, generatedSentences)
  }

  return generatedSentences;
}

externals.generateSentencePermutations = (wordsList, startIndex, wordIndex, sentences, generateSentences) => {

  sentences[startIndex] = wordsList[startIndex][wordIndex];

  if (startIndex == (wordsList.length - 1)) {
    generateSentences.push(sentences.join(" "));
    return;
  }

  for (let i=0;i<wordsList[startIndex + 1].length;i++) {
    externals.generateSentencePermutations(wordsList, startIndex + 1, i, sentences, generateSentences);
  }
}


module.exports = externals;
