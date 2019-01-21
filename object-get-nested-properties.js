/**
 *
 * Get nested property
 *
 * @param {Object} obj
 * @param {String} str
 * @return {Object|String} return the property, can be any value
 *
 */
module.exports = function objectGetNestedProperty(obj, str) {
  const pathArr = str.split('.');
  return pathArr.reduce((o, k) => (o && o[k] !== void 0) ? o[k] : void 0, obj);
}
