'use strict';

/**
 *
 * Remove the intersection of two arrays from the first array
 *
 **/
export default function* arrayDifference(array, excludes) {
  for (let x of array) {
    if (!excludes.includes(x)) yield x;
  }
}
