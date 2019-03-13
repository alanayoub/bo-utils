'use strict';

// bo-utils
import capitalizeFirstLetter from './string-capitalize-first-letter';

/**
 *
 * @param {String} str
 * @param {String} delimiter
 * @return {String}
 *
 */
export default function camelcase(str, delimiter) {
  return str
    .split('-')
    .map((x, i) => {
      return !i ? x : capitalizeFirstLetter(x)
    })
    .join('');
}
