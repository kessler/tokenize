# tokenize

**personal tokenize util**

## example

`npm i -S @kessler/tokenize`

```js
const tokenize = require('@kessler/tokenize')

let tokens1 = tokenize('text')

// with non default tokenization rules
const rules = {
    tokenChars: ['(', ')', ',', '[', ']'],
    globbingChars:  ['"', '\''],
    separators: [' ']
}

let tokens2 = tokenize('(text) "asd" blabla', rules)
```

## license

[MIT](http://opensource.org/licenses/MIT) © Yaniv Kessler
