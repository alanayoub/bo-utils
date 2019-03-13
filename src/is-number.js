import isInteger from './is-integer.js';
import isFloat from './is-float.js';

/**
 *
 * Is Number
 * Check if the value is an Integer or a Float
 *
 * @param {*} x
 * @return {Boolean}
 *
 */
export default function isNumber(x) {
  return isInteger(x) || isFloat(x);
}
