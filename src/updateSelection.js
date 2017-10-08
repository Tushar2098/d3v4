let scores = [
  { name: 'Alice', score: 98 },
  { name: 'Billy', score: 87 },
  { name: 'Cindy', score: 90 },
  { name: 'David', score: 94 },
  { name: 'Emilly', score: 70 }
];

let update = d3
  .select('.chart')
  .selectAll('div') // By doing this, d3 will create placeholders for the data, see console.log(update)
  .data(scores);

console.log('updateSelection ', update);
/*
Cases for selection
1. If data is present but no element, then ENTER Selection
2. If data is present and so element, then UPDATE Selection
3. If data is not present but element does, then EXIT selection
*/
update
  .enter()
  .append('h3')
  .text(d => d.name)
  .style('color', 'green');

/*
  Reason why update is called `updateSelection` , 
  because it will only those elements which are 
  updated
*/

let update1 = d3
  .select('.prepopulateWithElement')
  .selectAll('div')
  // has optional key function, which is used for mapping data items to DOM elements
  .data(scores, function(d) {
    // if element already exits in DOM then return the innerText else
    console.log('data ', d, ' ', this.innerText);
    return d ? d.name : this.innerText;
  })
  .style('color', 'blue');

update1
  .enter()
  .append('div')
  .text(d => d.name)
  .style('color', 'green');

/*
  ==============================
    EXIT SELECTION 
  ==============================
*/
let colorScale = d3
  .scaleLinear()
  .domain(d3.extent(scores, d => d.score))
  .range(['blue', 'green']);
let updateSelection = d3
  .select('.exitSelectionDemo')
  .selectAll('div')
  .data(scores, function(d) {
    return d ? d.name : this.innerText;
  })
  .style('color', 'red');

let enterSelection = updateSelection
  .enter()
  .append('div')
  .text(d => d.name);
updateSelection.exit().remove(); //Removes Walter from the list

/*
  Since updateSelection style is only applicable to updated element and
  same goes for EnterSelection, but if we want to style or manipuate both of
  them together, then will use `merge`, and apply necessary manipulation on them
*/
updateSelection
  .merge(enterSelection)
  .style('text-transform', 'uppercase')
  .style('height', '50px')
  .style('background', d => colorScale(d.score))
  .style('border', '1px solid black')
  .style('width', d => d.score + 'px');
