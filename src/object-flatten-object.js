/**
 *
 * Flatten Object
 *
 * Flattens a 2D object
 *
 * @param {Object} object - object to flatten
 * @return {Object}
 *
 */
export default function objectFlattenObject(object) {
  const output = {};
  for (const value of Object.values(object)) {
    Object.assign(output, value);
  }
  return output;
}
