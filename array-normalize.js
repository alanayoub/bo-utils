import numberNormalize from './number-normalize.js';

/**
 *
 * Array Normalize
 *
 * Applies the normalize function to an array of numbers
 *
 * @param {Array} array - the array to be normalized
 * @param {Number} min - the min range to apply
 * @param {Number} max - the max range to apply
 * @return {Array} return the normalized array
 *
 */
export default (array, min, max) => {
  const aMax = Math.max(...array);
  const aMin = Math.min(...array);
  const result = array.map(n => {
    return numberNormalize(n, min, max, aMin, aMax);
  });
  return result;
}
