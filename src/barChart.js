$('.prepopulateWithElement,.exitSelectionDemo').hide();
let scores = [
  { name: 'Alice', score: 98 },
  { name: 'Billy', score: 87 },
  { name: 'Cindy', score: 90 },
  { name: 'David', score: 94 },
  { name: 'Emilly', score: 70 }
];
let bar = d3
  .select('.chart')
  .append('svg')
  .attr('width', 225)
  .attr('height', 225)
  .selectAll('g')
  .data(scores)
  .enter()
  .append('g')
  .attr('transform', (d, i) => `translate(0,${i * 33})`);

bar
  .append('rect')
  .attr('class', 'bar')
  .style('width', d => d.score);

bar
  .append('text')
  .text(d => d.name)
  .attr('y', 20)
  .attr('class', 'textClass');
