// import isInteger from './is-integer.js';

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
  if (!Number(number)) return void false;
  const [num, decimals] = String(number).split('.');
  const n = Math.floor(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${delimiter}`);
  return decimals ? `${n}.${decimals}` : n;
};
