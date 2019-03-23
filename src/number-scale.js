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
  const percent = (num - min) / (max - min);
  return percent * (newMax - newMin) + newMin;
}
