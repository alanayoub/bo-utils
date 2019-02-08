import createSVGInMemoryNode from './create-svg-in-memory-node.js';
import percentRange from './array-percent-range.js';

/**
 *
 * D3 Simple Bar Chart
 *
 * @param {Array} data
 * @param {Boolean} range - show the percent fluctuation of the data
 * @param {Number} [width]
 * @param {Number} [height]
 * @param {String} [styles]
 * @param {String} [fill]
 * @return {SVGElement}
 *
 */
export default ({data, range, width = 100, height = 30, styles = '', fill = '#eee'}) => {

  const rangeXOffset = range ? 20 : 0;
  const xArray = data.map(d => d.x);
  const yArray = data.map(d => d.y);
  const yMax = Math.max(...yArray);
  const yMin = Math.min(...yArray);

  const svgElement = createSVGInMemoryNode('svg')
    .attr('style', 'position: absolute; bottom: 0');

  const svg = svgElement
    .attr('width', width)
    .attr('height', height)
    .attr('style', styles)
    .append('g');

  const x = d3.scaleBand().rangeRound([rangeXOffset, width]).padding(0.1);
  const y = d3.scaleLinear().rangeRound([height, 0]);

  x.domain(xArray);
  y.domain([0, yMax]);

  svg.selectAll()
    .data(data)
    .enter().append('rect')
    .attr('x', d => x(d.x))
    .attr('y', d => y(d.y))
    .attr('fill', fill)
    .attr('width', x.bandwidth())
    .attr('height', d => height - y(d.y));

  if (range) {

    const volumeArray = data.map(v => v.y);
    const percentSwing = percentRange(volumeArray);

    const rangeGroup = svg.append('g')
      .attr('class', 'cryptohub-sparkline-range');

    rangeGroup.append('title')
      .text('Percent fluctuation over 7 days');

    // rangeGroup.append('rect')
    //   .attr('width', '20')
    //   .attr('height', '12')
    //   .attr('fill', '#fff')
    //   .attr('fill-opacity', '0.8')
    //   .attr('x', 0)
    //   .attr('y', 0)
    //   .attr('rx', 0)
    //   .attr('ry', 0);

    rangeGroup.append('text')
      .attr('x', '2')
      .attr('y', 8)
      .attr('fill', '#00A3E5')
      .attr('font-size', '10px')
      .attr('text-anchor', 'start')
      .text(percentSwing);
  }

  return svgElement;

}
