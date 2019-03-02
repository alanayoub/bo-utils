import isInteger from './is-integer.js';

/**
 *
 * NUMBER GROUP DIGITS
 *
 * Group numbers with a delimiter
 *
 * func(1234)      // 1,234
 * func(123456)    // 123,456
 * func(1234, ' ') // 1 234
 *
 * @see https://en.wikipedia.org/wiki/Decimal_separator for further enhancements
 *
 * @param {Number} number
 * @param {String} [delimiter]
 * @return {String|Boolean}
 *
 */
export default function numberGroupDigits(number, delimiter = ',') {
  if (!isInteger(number)) return void false;
  return Math.floor(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${delimiter}`);
};
