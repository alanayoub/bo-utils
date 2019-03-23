'use strict';

import numberScale from './number-scale';

/**
 *
 * Timeseries Scale
 *
 * @param {Array} ts - Array of timeseries objects
 * @param {Number} min - Minimum value of range to scale to
 * @param {Number} max - Maximim value of the range to scale to
 * @param {String} scaleField - The name of the field to scale
 * @param {String} [timestampField] - The name of the timestamp field
 * @param {String} [ceil] - Rount the value up
 * @return {Array} - Array of updated timeseries object
 *
 */
export default function timeseriesScale({ts, min, max, scaleField, timestampField = 'timestamp', ceil = true}) {

  const arr = ts.map(x => x[scaleField]);
  const minOld = Math.min(...arr);
  const maxOld = Math.max(...arr);

  let val;
  let scale;
  for (val of Object.values(ts)) {
    scale = numberScale(val[scaleField], minOld, maxOld, min, max);
    val[scaleField] = ceil ? Math.ceil(scale) : scale;
  }

  return ts;

}
