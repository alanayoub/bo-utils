/**
 *
 * Is Integer
 *
 * @param {*} x
 * @return {Boolean}
 *
 */
export default function isInteger(x) {
  return Number(x) === x && x % 1 === 0;
}
