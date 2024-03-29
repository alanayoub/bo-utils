/**
 *
 * Format Number as Bitcoin
 *
 * num      precision     return
 * 12345    2             Ƀ12,345.00
 * 0.001    2             Ƀ0.00
 *
 * @param {Number} num
 * @param {Number} precision
 * @param {String} code - currency code
 * @return {String}
 *
 */
export default function formatNumberAsCurrency(num, precision, code) {

  const special = {
    'BTC': 'Ƀ'
  };

  if (special[code]) {
    return new Intl
      .NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: precision})
      .format(num)
      .replace('$', 'Ƀ');
  }
  else {
    return new Intl
      .NumberFormat('en-US', {style: 'currency', currency: code, minimumFractionDigits: precision})
      .format(num);
  }

}
