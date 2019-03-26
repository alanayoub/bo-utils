'use strict';

/**
 *
 * Number Scale
 *
 * @param {Number} num
 * @param {Number} min
 * @param {Number} max
 * @param {Number} newMin
 * @param {Number} newMax
 * @return {Nuber}
 *
 */
export default function numberScale(num, min, max, newMin = 0, newMax = 100) {

  if (num < min) num = min;
  if (num > max) num = max;

  // If the ranges suck
  if (min === max) min *= 0.99, max *= 1.01;
  if (newMin === newMax) throw new Error(`numberScale(): Incorrect range ${min}-${max}`);

  const percent = (num - min) / (max - min);
  return percent * (newMax - newMin) + newMin;

}
