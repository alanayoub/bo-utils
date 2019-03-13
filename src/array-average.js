/**
 *
 * Array Average
 *
 * Take the average of all the numbers in an array
 *
 * @param {Array} array - array of numbers
 * @return {Number}
 *
 */
export default (array) => {
  let total = 0;
  array.forEach(x => total += x);
  return total / array.length;
}
