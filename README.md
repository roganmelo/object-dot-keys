# object-dot-keys

🌳 Create an array of key paths from an object.

<a href="https://nodei.co/npm/object-dot-keys/">
  <img src="https://nodei.co/npm/object-dot-keys.png?downloads=true">
</a>

[![NPM version](https://badge.fury.io/js/object-dot-keys.png)](http://badge.fury.io/js/object-dot-keys)
[![Build Status](https://travis-ci.org/roganmelo/object-dot-keys.svg?branch=master)](https://travis-ci.org/roganmelo/object-dot-keys)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/roganmelo/object-dot-keys/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-10.15.x-brightgreen.svg?style=flat-square)](https://github.com/roganmelo/fn-spy/blob/master/package.json#L50)

### API
`import setByDot from 'object-dot-keys';`

`setByDot({}, 'path', 'value');`


### Usage

```js
  import setByDot from 'object-dot-keys';

  const obj = {
    a: { b: 'c' },
    b: [{ c: 'a' }]
  };

  setByDot(obj, 'a.b', 'a') // { a: { b: 'a' }, b: [{ c: 'a' }] }
  setByDot(obj, 'a', 'c');  // { a: 'c', b: [{ c: 'a' }] }
  setByDot(obj, 'a.b.c', 'b');  // { a: { b: 'a', c: 'b' }, b: [{ c: 'a' }] }
  setByDot(obj);  // { a: { b: 'a' }, b: [{ c: 'a' }] }
```
