/**
 *
 * Create an SVG node without adding it to the DOM
 * @param {String} type - the type of node to create, e.g. 'rect', 'g' etc
 * @return {D3NodeObject} - a D3 node
 *
 */
export default type => {
  const elm = document.createElementNS('http://www.w3.org/2000/svg', type);
  return d3.select(elm);
}
