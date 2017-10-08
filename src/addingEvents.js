$('.events').show();
let scores = [
  { name: 'Alice', score: 98 },
  { name: 'Billy', score: 87 },
  { name: 'Cindy', score: 90 },
  { name: 'David', score: 94 },
  { name: 'Emilly', score: 70 }
];
function scaleBar(selection, scale) {
  selection.style('transform', `scaleX(${scale})`);
}

function fade(selection, opacity) {
  selection.style('fill-opacity', opacity);
}
let bar = d3
  .select('.events')
  .append('svg')
  .attr('width', 225)
  .attr('height', 225)
  .selectAll('g')
  .data(scores)
  .enter()
  .append('g')
  .attr('transform', (d, i) => `translate(0,${i * 33})`);

//Adding hovering effect
bar
  .append('rect')
  .on('mouseover', function(d, i, elements) {
    d3.select(this).call(scaleBar, 2);
    d3
      .selectAll(elements)
      .filter(':not(:hover)')
      .call(fade, 0.5);
  })
  .on('mouseout', function(d, i, elements) {
    d3.select(this).call(scaleBar, 1);
    d3.selectAll(elements).call(fade, 1);
  })
  .attr('class', 'bar')
  .style('width', d => d.score);

bar
  .append('text')
  .text(d => d.name)
  .attr('y', 20)
  .attr('class', 'textClass');
