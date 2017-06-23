'use strict';
const assert = require('assert');

module.exports = (unsureArray, validArray) => {
	assert(Array.isArray(unsureArray) && Array.isArray(validArray), 'Expected array as inputs');

	// Returns item if not valid
	const checkValid = item => validArray.indexOf(item) !== -1;
	// returns false if array contains an invalid value
	return unsureArray.reduce((acc, item) => (acc === false) ? false : checkValid(item), true);
};
