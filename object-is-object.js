/**
 *
 * objectIsObject
 *
 * @param {Object} object - object or any other type
 * @return {Boolean}
 *
 */
module.exports = function objectIsObject(object) {
  return Object.prototype.toString.call(object) === '[object Object]';
}
