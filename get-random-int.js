/**
 *
 * GET RANDOM INT
 *
 * Get a random integer between the min and max values provided
 * If no values are provided it will return an integer between 0 and 1,000,000
 *
 * NOTE: The min and max are inclusive
 *
 * @param {Number} [min]
 * @param {Number} [max]
 * @return {Number}
 *
 */
export default function getRandomInt(min = 0, max = 1000000) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
