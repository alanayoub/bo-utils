/**
 *
 * @param {Object} data
 * @return {Array}
 *
 */
module.exports = function objectToArray(data) {
  const arrayData = [];
  for (let [id, obj] of Object.entries(data)) {
    obj.id = obj.Id;
    arrayData.push(obj);
  }
  return arrayData;
};
