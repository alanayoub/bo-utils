/**
 *
 * Diff Numeric Strings
 * This function is for identifying the changes between 2 numbers
 * For example in stock data if you wanted to know by how much a value
 * has increased or decreased
 *
 * v1     v2     return
 * 1234   1244   {start: 12, end: 44}
 * 10010  11000  {start: 1,  end: 1000}
 * 20000  12345  {start: ,   end: 12345}
 *
 * @param {String} v1
 * @param {String} v2
 * @return {Object}
 *
 */
export default function diffNumericStrings(v1, v2) {

  let s1;
  let s2;
  v1 = String(v1);
  v2 = String(v2);

  if (v2.length > v1.length) {

    s1 = '';
    s2 = v2;

  }
  else {

    let i = v1.length -1;
    let idx;

    for (; i > -1; i--) {
      if (v1.charAt(i) !== v2.charAt(i)) {
        idx = i;
      }
    }

    s1 = v2.substring(0, idx);
    s2 = v2.substring(idx);

  }

  if (s1 === s2) s1 = '';

  return {
    start: s1, end: s2
  }

}
