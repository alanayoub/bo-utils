/**
 *
 * Format Number as Bitcoin
 *
 * num      precision     return
 * 12345    2             Ƀ12,345.00
 * 0.001    2             Ƀ0.00
 *
 * @param {Number} num
 * @param {String} code - currency code
 * @param {Number} [precision]
 * @return {String}
 *
 */
export default function formatNumberAsCurrency(num, code, precision) {

  const special = {
    'BTC': '฿',
    'SAT': 'sat'
  };

  if (special[code]) {
    if (!precision) {
      if (code === 'BTC') precision = 8;
      if (code === 'SAT') precision = 0;
    }
    let output = new Intl
      .NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      })
      .format(num)
      .replace('$', '');
    if (code === 'SAT') output += ` ${special[code]}`;
    else output = special[code] + output;
    return output;
  }
  else {
    if (!precision) {
      precision = 2;
    }
    return new Intl
      .NumberFormat('en-US', {
        style: 'currency',
        currency: code,
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      })
      .format(num);
  }

}
