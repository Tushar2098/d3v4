$('.scatterPlot').show();
let margins = { top: 10, bottom: 30, left: 40, right: 10 };
let width = 425 - margins.left - margins.right;
let height = 625 - margins.top - margins.bottom;

let svg = d3
  .select('.scatterPlot')
  .append('svg')
  .attr('width', width + margins.left + margins.right)
  .attr('height', height + margins.top + margins.bottom)
  .append('g')
  .attr('transform', `translate(${margins.left},${margins.top})`);

d3.json('src/data/scatter.json', function(err, data) {
  // Y-Scale
  let yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.expectancy))
    .range([height, 0])
    .nice();
  let yAxis = d3.axisLeft(yScale);
  svg.call(yAxis);

  // X-Scale
  let xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.cost))
    .range([0, width])
    .nice();
  let xAxis = d3.axisBottom(xScale).ticks(5);
  svg
    .append('g')
    .attr('transform', `translate(0,${height})`)
    .call(xAxis);

  // Circle
  let rScale = d3
    .scaleSqrt()
    .domain([0, d3.max(data, d => d.population)])
    .range([0, 40]);

  let circles = svg
    .selectAll('.ball')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'ball')
    .attr(
      'transform',
      d => `translate(${xScale(d.cost)},${yScale(d.expectancy)})`
    );

  circles
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', d => rScale(d.population))
    .style('fill', 'steelblue')
    .style('fill-opacity', 0.5);

  circles
    .append('text')
    .text(d => d.code)
    .style('fill', 'black')
    .style('text-anchor', 'middle')
    .attr('y', 3);
});
