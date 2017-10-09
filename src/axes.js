$('.axes').show();

let margins = { top: 10, bottom: 50, left: 25, right: 20 };
let width = 425 - margins.left - margins.right;
let height = 625 - margins.top - margins.bottom;

let svg = d3
  .select('.axes')
  .append('svg')
  .attr('width', width + margins.left + margins.right)
  .attr('height', height + margins.top + margins.bottom)
  .append('g')
  .attr('transform', `translate(${margins.left},${margins.top})`);

svg
  .append('rect')
  .attr('width', width)
  .attr('height', height)
  .style('stroke', 'green')
  .style('fill', 'lightblue');

/*
==================================    
    Adding Y-Axis
====================================
*/
let yScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range([height, 0]);

/*
  ==========================================================
let yScale = d3
  .scaleLinear()
  .domain([0, 1])
  .range([height, 0])
  .ticks(5, '%');
  
  We can decide the number of ticks to be displayed
  at yAxis using .ticks
  --------------------------------------------------
  % - For adding percentage formatting to the yAxis
  domain has to be normalized, hence `domain([0, 1])`
  --------------------------------------------------
  decimal - .ticks(5, '.2s')
  --------------------------------------------------

  If we have big domain like
  d3
  .scaleLinear()
  .domain([0, 1e6])
  .range([height, 0])
  .ticks(5, 's');

  then `s` tick formatting will automatically adjust
  to M(Million)

  If we want to have custom tick values then we
  can use `tickValues`
  d3
  .scaleLinear()
  .domain([0, 100])
  .range([height, 0])
  .tickValues([10, 18, 55, 89]);
  ============================================================
*/
let yAxis = d3.axisLeft(yScale);
svg.call(yAxis);

/*
==================================    
    Adding X-Axis
====================================
*/

let xScale = d3
  .scaleTime()
  .domain([new Date(2016, 0, 1), new Date(2017, 2, 31)])
  .range([0, width]);
let xAxis = d3
  .axisBottom(xScale)
  .ticks(5)
  .tickSizeInner(10)
  .tickSizeOuter(20)
  .tickPadding(15);
/*
=============Dealing With Minutes(Ticks)=============
let xScale = d3
.scaleTime()
.domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)])
.range([0, width]);
let xAxis = d3.axisBottom(xScale).ticks(d3.timeMinute.every(45));

If we want the ticks to be at certain time interval, 
we can use 
`ticks(d3.timeMinute.every(45))`
For this, domain has to be in minutes range
====================================================== 
*/
svg
  .append('g')
  .attr('transform', `translate(0,${height})`)
  .call(xAxis);
