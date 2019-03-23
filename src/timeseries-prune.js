'use strict';

/**
 *
 * Timeseries prune
 *
 * @param {Array} ts - Array of timeseries objects
 * @param {Number} maxAge - Remove all items older than now - maxAge in ms
 * @param {String} [timestampField] - The name of the timestamp field
 *
 */
export default function timeseriesPrune(ts, maxAge, timestampField = 'timestamp') {
  const timeNow = +new Date();
  return ts.filter((v, i) => (timeNow - v[timestampField]) < maxAge);
}
