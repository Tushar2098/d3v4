$('.marginLesson').show();
let margins = { top: 10, bottom: 10, left: 10, right: 10 };
let width = 425 - margins.left - margins.right;
let height = 625 - margins.top - margins.bottom;

let svg = d3
  .select('.marginLesson')
  .append('svg')
  .attr('width', width + margins.left + margins.right)
  .attr('height', height + margins.top + margins.bottom)
  .append('g')
  .attr('transform', `translate(${margins.left},${margins.top})`);

svg
  .append('rect')
  .attr('width', width / 2)
  .attr('height', height)
  .style('stroke', 'green')
  .style('fill', 'lightblue');

svg
  .append('rect')
  .attr('width', width / 2)
  .attr('x', width / 2)
  .attr('height', height)
  .style('stroke', 'green')
  .style('fill', 'lightblue');
