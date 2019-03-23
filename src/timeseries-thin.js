'use strict';

/**
 *
 * Timeseries thin
 *
 * Remove the timeseries items that have the
 * shortest time span between them and their siblings
 * Keep removing until the limit has been reached
 *
 * @param {Array} ts
 * @param {Number} limit
 * @param {String} [timestampField]
 * @return {Array}
 *
 */
export default function timeseriesThin(ts, limit, timestampField = 'timestamp') {

  const numToRemove = ts.length - limit;

  if (!numToRemove) {
    return ts;
  }
  else {

    let idx;
    let diff;
    let diffs = {};

    for (idx of Object.keys(ts)) {
      if (idx > 0) {
        diff = Math.abs(ts[idx - 1][timestampField] - ts[idx][timestampField]);
        diffs[diff] = idx;
      };
    }

    let i;
    let itemsToRemove = Object.keys(diffs).sort().splice(0, numToRemove);
    for ([i, idx] of Object.entries(itemsToRemove)) {
      ts.splice(diffs[idx] - i, 1);
    }

  }

  return ts;

}
