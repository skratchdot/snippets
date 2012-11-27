/*jslint plusplus: true */
/**
 * @function
 * @name keyStringToObject
 * @param keyString {string} A dot delimited string path
 * @param value {any} A value for the given dot delimited string path
 * @returns {object} An object created from the passed in keyString and value
 */
var keyStringToObject = function (keyString, value) {
	'use strict';
	var obj = {}, arr = [], key = '';
	if (typeof keyString === 'string') {
		arr = keyString.split('.');
		key = arr[0];
		if (arr.length > 1) {
			arr.shift();
			obj[key] = keyStringToObject(arr.join('.'), value);
		} else {
			obj[key] = value;
		}
	}
	return obj;
};