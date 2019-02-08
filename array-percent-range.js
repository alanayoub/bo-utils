/**
 *
 * Percent Range
 *
 * Calculate the percentage change between the maximum and minimum values
 * in the array compared to the first value
 *
 * @param {Array} array - array of numbers
 * @return {Number}
 *
 *
 */
export default (array) => {
  const oldest = array[0];
  const min = d3.min(array);
  const max = d3.max(array);
  const diff = max - min;
  const result = Math.round(diff / (oldest / 100));
  return result;
}
