# arr-u-legit [![Build Status](https://travis-ci.org/brh55/arr-u-legit.svg?branch=master)](https://travis-ci.org/brh55/arr-u-legit) [![Coverage Status](https://coveralls.io/repos/github/brh55/arr-u-legit/badge.svg?branch=master)](https://coveralls.io/github/brh55/arr-u-legit?branch=master)

> Strict compare an unsure array against a set of valid values to check if it's legit


## Install

```
$ npm install --save arr-u-legit
```


## Usage

```js
const legit = require('arr-u-legit');

legit(['apple', 'banana'], ['apple', 'banana', 'orange']); // => true

legit(['apple', 'banana', 'pineapple'], ['apple', 'banana', 'orange']); // => false
```


## API

### legit(unsureArray, validOptions)

#### unsureArray

Type: `array`

The unsure array in question.

#### validOptions

Type: `array`<br>

A set of valid options to compare against.

## License

MIT © [Brandon Him](https://github.com/brh55/arr-u-legit)
