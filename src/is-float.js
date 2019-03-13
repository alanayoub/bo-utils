/**
 *
 * Is Float
 *
 * @param {*} x
 * @return {Boolean}
 *
 */
export default function isFloat(x) {
  return Number(x) === x && x % 1 !== 0;
}
