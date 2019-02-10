# object-dot-keys

🌳 Create an array of key paths from an object.

<a href="https://nodei.co/npm/object-dot-keys/">
  <img src="https://nodei.co/npm/object-dot-keys.png?downloads=true">
</a>

[![NPM version](https://badge.fury.io/js/object-dot-keys.png)](http://badge.fury.io/js/object-dot-keys)
[![Build Status](https://travis-ci.org/roganmelo/object-dot-keys.svg?branch=master)](https://travis-ci.org/roganmelo/object-dot-keys)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/roganmelo/object-dot-keys/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-10.15.x-brightgreen.svg?style=flat-square)](https://github.com/roganmelo/fn-spy/blob/master/package.json#L50)

### API
`import objectDotKeys from 'object-dot-keys';`

`objectDotKeys({}, 'separator');`


### Usage

```js
  import objectDotKeys from 'object-dot-keys';

  const obj = {
    a: { b: 'c' },
    b: [{ c: 'a' }, { c: 'b' }, { c: 'c' }]
  };

  objectDotKeys(obj) // ['a.b', 'b.0.c', 'b.1.c', 'b.2.c']
  objectDotKeys(obj, { separator: '_' });  // ['a_b', 'b_0_c', 'b_1_c', 'b_2_c']
  objectDotKeys(obj, { array: false });  // ['a.b', 'b']
```
