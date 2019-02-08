import createSVGInMemoryNode from './create-svg-in-memory-node.js';
import percentRange from './array-percent-range.js';

/**
 *
 * D3 Sparkline
 *
 * @param {Array} data
 * @param {Boolean} range - show the percent fluctuation of the data
 * @param {Number} [width]
 * @param {Number} [height]
 * @param {String} [styles]
 * @return {SVGElement}
 *
 */
export default ({data, range, width = 100, height = 30, styles = ''}) => {

  const rangeXOffset = range ? 20 : 0;
  const svgElement = createSVGInMemoryNode('svg');
  const len = data.length;

  //initialize scales
  const xExtent = d3.extent(data, d => d.x);
  const yExtent = d3.extent(data, d => d.y);
  const x = d3.scaleLinear().domain(xExtent).range([rangeXOffset, width - 2]);
  const y = d3.scaleLinear().domain(yExtent).range([height - 4, 0]);

  const line = d3.line()
    .x(d => x(d.x))
    .y(d => y(d.y))
    .curve(d3.curveBasis);

  const svg = svgElement
    .attr('width', width)
    .attr('height', height)
    .attr('style', styles)
    .append('g')
    .attr('transform', 'translate(0, 2)');

  svg.append('path')
     .datum(data)
     .attr('class', 'cryptohub-sparkline')
     .attr('fill', 'none')
     .attr('stroke', '#000')
     .attr('stroke-width', '0.5px')
     .attr('d', line);

  svg.append('circle')
     .attr('class', 'cryptohub-sparkline-circle')
     .attr('cx', x(data[len - 1].x))
     .attr('cy', y(data[len - 1].y))
     .attr('fill', '#00A3E5')
     .attr('stroke', 'none')
     .attr('r', 1.5);

  if (range) {

    const priceArray = data.map(v => v.y);
    const percentSwing = percentRange(priceArray);

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
      .attr('y', '8')
      .attr('fill', '#555')
      .attr('font-size', '10px')
      .attr('text-anchor', 'start')
      .text(percentSwing);
  }

  return svgElement;

}
