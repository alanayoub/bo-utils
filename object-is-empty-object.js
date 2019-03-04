import isObject from './object-is-object';

/**
 *
 * IS EMPTY OBJECT
 *
 * @param {Object} object - object or any other type
 * @return {Boolean}
 *
 */
export default function objectIsEmptyObject(data) {
  return isObject(data) && !Object.keys(data).length;
}
