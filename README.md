# ak-phrase.js

[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/ak-phrase.js.svg)](https://github.com/arshadkazmi42/ak-phrase.js)
[![Build Status](https://api.travis-ci.com/arshadkazmi42/ak-phrase.js.svg?branch=master)](https://api.travis-ci.com/arshadkazmi42/ak-phrase.js) [![NPM Downloads](https://img.shields.io/npm/dt/ak-phrase.svg)](https://www.npmjs.com/package/ak-phrase)

This library generates all the permutations of sentences from words in a 2D array.

It follows the word orders in sentence, same as the words order in array column wise.

<a href="https://www.buymeacoffee.com/arshadkazmi42" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
<a href="https://www.patreon.com/bePatron?u=15454240" target="_blank"><img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron!" height="40"></a>

Please consider donating, if you like my work

## Install

```
$ npm install ak-phrasae.js
```

## Usage

```js
const sentenceGenerator = require('ak-phrase.js');

const wordArray = [
    ['eat'],
    ['code', 'commit'],
    ['sleep']
];

const sentences = sentenceGenerator.generateSentences(wordArray);
console.log(sentences);

// Output:
// [ 'eat code sleep', 'eat commit sleep' ]
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/ak-phrase.js/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors
[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/images/0)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/links/0)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/images/1)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/links/1)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/images/2)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/links/2)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/images/3)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/links/3)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/images/4)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/links/4)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/images/5)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/links/5)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/images/6)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/links/6)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/images/7)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-phrase.js/links/7)
