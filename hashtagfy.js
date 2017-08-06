'use strict';

const pascalCase = require('pascal-case');

/**
 * Convert any text to #hashtag
 * @param  {String} text      Any string to hashtagfy
 * @param  {Object} [options] Optional options
 * @return {String}           Hashtag
 */
function hashtagfy(text, options) {
	if(text == null) return '';

	if(!options) options = { capitalize: true };

	const pascalized = pascalCase(text);

	if(!options.capitalize) return `#${pascalized.toLowerCase()}`;
	else return `#${pascalized}`;
}

module.exports = hashtagfy;