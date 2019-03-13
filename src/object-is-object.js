/**
 *
 * objectIsObject
 *
 * @param {Object} object - object or any other type
 * @return {Boolean}
 *
 */
export default function objectIsObject(object) {
  return Object.prototype.toString.call(object) === '[object Object]';
}
