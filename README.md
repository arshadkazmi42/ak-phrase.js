# ak-phrase

[![Build](https://github.com/arshadkazmi42/ak-phrase.js/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/ak-phrase.js/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/ak-phrase.js.svg)](https://www.npmjs.com/package/ak-phrase.js)
[![NPM Downloads](https://img.shields.io/npm/dt/ak-phrase.js.svg)](https://www.npmjs.com/package/ak-phrase.js)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/ak-phrase.js.svg)](https://github.com/arshadkazmi42/ak-phrase.js)
[![LICENSE](https://img.shields.io/npm/l/ak-phrase.js.svg)](https://github.com/arshadkazmi42/ak-phrase.js/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/ak-phrase.js.svg)](https://github.com/arshadkazmi42/ak-phrase.js/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/ak-phrase.js.svg)](https://github.com/arshadkazmi42/ak-phrase.js/commits/master)

This library generates all the permutations of sentences using the words supplied in a 2D array.

It follows the word's order in a sentence, which is the same as the word's column order in an array.

## Install

```
npm install ak-phrase
```

or

```
yarn add ak-phrase
```

## Usage

```js
const generateSentences = require('ak-phrase');

const wordArray = [
    ['eat'], 
    ['code', 'commit'], 
    ['sleep']
];

const sentences = generateSentences(wordArray);
console.log(sentences);

// Output:
// [ 'eat code sleep', 'eat commit sleep' ]
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/ak-phrase.js/issues/new).

Read our contributing [guide](CONTRIBUTING.md) to get started with contributing to the codebase.

## Contributors

Thank you to all the contributors who have helped us in making this project better 🙌

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a><a href="https://github.com/roshanadh"><img src="https://github.com/roshanadh.png" width="30" /></a><a href="https://github.com/cdrani"><img src="https://github.com/cdrani.png" width="30" /></a><a href="https://github.com/devguru876"><img src="https://github.com/devguru876.png" width="30" /></a><a href="https://github.com/marieram"><img src="https://github.com/marieram.png" width="30" /></a><a href="https://github.com/MubbyGN"><img src="https://github.com/MubbyGN.png" width="30" /></a><a href="https://github.com/TiKebek"><img src="https://github.com/TiKebek.png" width="30" /></a><a href="https://github.com/rbirchtree"><img src="https://github.com/rbirchtree.png" width="30" /></a><a href="https://github.com/1point7point4"><img src="https://github.com/1point7point4.png" width="30" /></a><a href="https://github.com/AlvinValdez"><img src="https://github.com/AlvinValdez.png" width="30" /></a><a href="https://github.com/Aneal-Sharma"><img src="https://github.com/Aneal-Sharma.png" width="30" /></a><a href="https://github.com/infinytum"><img src="https://github.com/infinytum.png" width="30" /></a><a href="https://github.com/jtertil"><img src="https://github.com/jtertil.png" width="30" /></a>
