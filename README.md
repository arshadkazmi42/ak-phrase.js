# ak-phrase.js

This library generates all the permutations of sentences from words in a 2D array.

It follows the word orders in sentence, same as the words order in array column wise.

## Usage

```js
const sentenceGenerator = require('ak-phrase.js');

const wordArray = [
    ['eat'],
    ['code', 'commit'],
    ['sleep']
];

const sentences = setenceGenerator.generateSentences(wordArray);
console.log(sentences);

// Output:
// [ 'eat code sleep', 'eat commit sleep' ]
```