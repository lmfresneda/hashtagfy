# hashtagfy
[![npm](https://img.shields.io/npm/v/hashtagfy.svg?style=flat-square)](https://www.npmjs.com/package/hashtagfy) [![npm](https://img.shields.io/npm/dw/hashtagfy.svg?style=flat-square)](https://www.npmjs.com/package/hashtagfy) ![Love](https://img.shields.io/badge/love-max-brightgreen.svg?style=flat-square) [![Travis](https://img.shields.io/travis/lmfresneda/hashtagfy.svg?style=flat-square)](https://travis-ci.org/lmfresneda/hashtagfy)

Convert any text to #hashtag

## How to use

```javascript
const hashtagfy = require('hashtagfy')

const hashtag1 = hashtagfy('Any text');
// hashtag1 == '#AnyText'

const hashtag2 = hashtagfy('Similar-text_more');
// hashtag2 == '#SimilarTextMore'

const hashtag3 = hashtagfy('And the last', { capitalize: false });
// hashtag3 == '#andthelast'
```

NOTE: The `capitalize` option is optional. Is `true` by default.

## Run test

```
$ npm install && npm test
```

## License

MIT © [lmfresneda](https://github.com/lmfresneda)