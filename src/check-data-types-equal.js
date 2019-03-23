'use strict';

/**
 *
 * Check Data Types Equal
 *
 * TODO: update to support an arbritary number of arguments
 *
 */
export default function checkDataTypesEqual(data1, data2) {
  return (Object.prototype.toString.call(data1) === Object.prototype.toString.call(data2));
}
