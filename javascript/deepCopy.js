/*jslint plusplus: true */
/**
 * @function
 * @name deepCopy
 * @param obj1 {object} Original object
 * @param obj2 {object} Object that will overwrite existing keys in obj1
 * @returns {object|undefined} An object containing all keys from obj1 and obj2. Obj2 keys take priority.
 */
var deepCopy = function (obj1, obj2) {
	'use strict';
	var key;
	if (typeof obj1 === 'object' &&
			typeof obj2 === 'object' &&
			Object.prototype.toString.call(obj1) !== '[object Array]' &&
			Object.prototype.toString.call(obj2) !== '[object Array]') {
		for (key in obj2) {
			if (obj2.hasOwnProperty(key)) {
				if (obj1.hasOwnProperty(key)) {
					obj1[key] = deepCopy(obj1[key], obj2[key]);
				} else {
					obj1[key] = obj2[key];
				}
			}
		}
		return obj1;
	} else {
		return obj2;
	}
};