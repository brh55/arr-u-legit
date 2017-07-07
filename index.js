'use strict';
const assert = require('assert');

module.exports = (unsureArray, validArray, showItems) => {
	assert(Array.isArray(unsureArray) && Array.isArray(validArray), 'Expected array as inputs');
	showItems = showItems || false;

	// Returns item if not valid
	const isValid = item => validArray.indexOf(item) !== -1;
	// Returns false if array contains an invalid value
	const invalidKeys = unsureArray.reduce((acc, item) => (isValid(item)) ? acc : acc.concat([item]), []);

	if (showItems) {
		return invalidKeys;
	}

	return (invalidKeys.length === 0) ? true : false;
};
