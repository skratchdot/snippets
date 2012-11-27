/**
 * Same behavior as Array.isArray()
 * @function
 * @name isArray
 * @param obj {*} The object to test
 * @returns {boolean} Will return true of obj is an array, otherwise will return false
 */
var isArray = function (obj) {
	'use strict';
	return Object.prototype.toString.call(obj) === '[object Array]';
};
