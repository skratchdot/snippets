/*jslint plusplus: true */
/**
 * @function
 * @name getFromKeyString
 * @param obj {object} The object to search
 * @param keyString {string} A dot delimited string path
 * @returns {object|undefined} If we find the path provide by keyString, we will return the value at that path
 */
var getFromKeyString = function (obj, keyString) {
	'use strict';
	var arr, i;
	if (typeof keyString === 'string') {
		arr = keyString.split('.');
		for (i = 0; i < arr.length; i++) {
			if (obj && typeof obj === 'object' && obj.hasOwnProperty(arr[i])) {
				obj = obj[arr[i]];
			} else {
				return;
			}
		}
		return obj;
	}
};
