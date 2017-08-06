'use strict'

require('mocha');
const assert = require('assert');
const hashtagfy = require('./hashtagfy');

describe('hashtagfy', () => {
	const text1 = 'This text is hashtagfied';
	it(text1, () => {
		const text = hashtagfy(text1);
		assert.equal(text, '#ThisTextIsHashtagfied', `'${text}' is not equal '#ThisTextIsHashtagfied'`);
	});

	const text2 = 'This-text-is_hashtagfied';
	it(text2, () => {
		const text = hashtagfy(text2);
		assert.equal(text, '#ThisTextIsHashtagfied', `'${text}' is not equal '#ThisTextIsHashtagfied'`);
	});

	const text3 = 'This text is hashtagfied lowercase';
	it(text3, () => {
		const text = hashtagfy(text3, { capitalized: false });
		assert.equal(text, '#thistextishashtagfiedlowercase', `'${text}' is not equal '#thistextishashtagfiedlowercase'`);
	});

	const text4 = 'This-text-is_hashtagfied lowercase';
	it(text4, () => {
		const text = hashtagfy(text4, { capitalized: false });
		assert.equal(text, '#thistextishashtagfiedlowercase', `'${text}' is not equal '#thistextishashtagfiedlowercase'`);
	});

});