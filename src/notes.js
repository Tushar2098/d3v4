// To get the unique values from the data source
let ages = d3.set(data, d => {
  return d.age;
});
console.log(ages.values());

// To get the range of min and max values
let values = d3.extent(data, d => {
  return d.age;
});
console.log(values); //[13,38]

/*
===========================
    DOM SELECTION
===========================
*/
let links = d3.select('a'); //selects one anchor element
links = d3.selectAll('a'); //selects all anchor element
console.log(links.nodes());

// selection of element under any container
let div = d3.select('div'); //selects one anchor element
divLinks = div.selectAll('a'); //selects all anchor element
console.log(divLinks.nodes());
