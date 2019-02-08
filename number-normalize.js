/**
 *
 * Number Normalize
 *
 * Normalize a number from one range to another
 *
 * @param {Number} num - the number to be normalized
 * @param {Number} min - the min range of the original numbers
 * @param {Number} max - the max range of the original number
 * @param {Number} nMin - the new min range to apply
 * @param {Number} nMax - the new max range to apply
 * @return {Number} return the normalized number
 *
 */
export default (num, min, max, nMin, nMax) => {
  const percent = (num - nMin) / (nMax - nMin);
  const output = percent * (max - min) + min;
  return output;
}
