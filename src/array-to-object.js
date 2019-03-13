/**
 *
 * Array to Object
 *
 * Convert an array of Objects to an Object of Objects
 * via one of the Objects fields as the Id
 *
 * ```
 * // input
 * const array = [
 *   {id: 1, foo: 'bar'},
 *   {id: 2, baz: 'qux'},
 * ]
 *
 * arrayToObject(array, 'id');
 *
 * // output
 * {
 *   1: {id: 1, foo: 'bar'}
 *   2: {id: 2, baz: 'qux'}
 * }
 * ```
 *
 * @param {Array} array - an Array of Objects
 * @param {field} field - field to use as a key
 * @return {Objecct}
 *
 */
export default (array, field) => {
  const result = {};
  let obj;
  for (obj of array) {
    result[obj[field]] = obj;
  }
  return result;
}
