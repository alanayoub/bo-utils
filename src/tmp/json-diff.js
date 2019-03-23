'use strict';

import changesets from '../node_modules/diff-json/dist/changesets';

/**
 *
 * Return the difference between 2 JSON objects in
 * a way that merging the diff with data1 will produce data2
 *
 * Example:
 *
 * data1: {
 *
 * }
 *
 * data2: {
 *
 * }
 *
 * output = jsonDiff(data1, data2);
 *
 * //
 * //
 * //
 *
 */
export default function jsonDiff(data1, data2) {

  let diff = changesets.diff(data1, data2);

  return diff;

}
