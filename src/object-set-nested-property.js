'use strict';

import objectIsObject from './object-is-object.js';

/**
 *
 * Set nested property
 *
 * @param {Object} obj
 * @param {String} str
 * @return {Object|String} return altered object
 *
 */
export default function objectSetNestedProperty(obj, str, val) {

  const pathArr = str.split('.');
  let ref = obj;

  for (const [idx, prop] of Object.entries(pathArr)) {
    if (+idx + 1 === pathArr.length) {
      ref[prop] = val;
    }
    else if (objectIsObject(ref[prop])) {
      ref = ref[prop];
      continue;
    }
    else {
      ref[prop] = {};
      ref = ref[prop];
    }
  }

  return obj;

}
