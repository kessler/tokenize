const tokenize = require('../tokenize')
const assert = require('assert')

describe('tokenize', () => {
	it('takes raw text and transforms it to tokens', () => {
		let tokens = tokenize('a b  c')
		assert(tokens.length === 3)
	})

	it('commas', () => {
		let tokens = tokenize('a,b,  c,d')
		asExpected(['a', ',', 'b', ',', 'c', ',', 'd'], tokens)
	})

	it('normal brackets', () => {
		let tokens = tokenize('a (b  c)')
		asExpected(['a', '(', 'b', 'c', ')'], tokens)
	})

	it('square brackets', () => {
		let tokens = tokenize('a (b [] c)')
		asExpected(['a', '(', 'b', '[', ']', 'c', ')'], tokens)
	})

	it('double quotes glob everything until tokenizer hits double quotes again', () => {
		let tokens = tokenize('"a (b [] c)" "')
		asExpected(['"', 'a (b [] c)', '"', '"'], tokens)
	})

	it('quotes glob everything until tokenizer hits quotes again', () => {
		let tokens = tokenize('\'a (b [] c)\' \'')
		asExpected(['\'', 'a (b [] c)', '\'', '\''], tokens)
	})

	function asExpected(expected, tokens) {
		assert(Array.isArray(expected))
		assert(Array.isArray(tokens))
		assert(tokens.length === expected.length)
		tokens.forEach((el, index) => {
			assert(el.content === expected[index])
		})
	}
})