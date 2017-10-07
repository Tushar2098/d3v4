/*********************************
 * Linear Scale
 **********************************/
let linearScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range([0, 600])
  .clamp(true); //is used so values should not go out of range

// Calculation
// linearScale(20) => 20/(0+100) = 0.2 => (0+600) * 0.2 = 120
console.log('===================Linear Scale===================');
console.log(linearScale(20)); //without clamp value is -120, with clamp value is 0
console.log(linearScale.invert(120)); // 120/(0+600) = 0.2 => (0+100) * 0.2 = 20

/*********************************
 * Time Scale
 **********************************/
let timeScale = d3
  .scaleTime()
  .domain([new Date(2016, 01, 01), new Date()])
  .range([0, 100]);
console.log('===================Time Scale===================');
console.log(timeScale(new Date(2016, 12, 01)));
console.log(timeScale.invert(50));

/*********************************
 * Qunatize Scale
 **********************************/
let quantizeScale = d3
  .scaleQuantize()
  .domain([0, 100])
  // since range has 3 values domain will be broken down into 3 pieces
  // 0-33,33-66,66-100
  .range(['red', 'blue', 'green']);
console.log('===================Qunatize Scale===================');
console.log(quantizeScale(31));
console.log(quantizeScale(35));
console.log(quantizeScale(67));
// returns the range into which blue falls in
console.log(quantizeScale.invertExtent('blue'));

/*********************************
* Ordinal Scale
**********************************/
let ordinalScale = d3
  .scaleOrdinal()
  .domain(['poor', 'good', 'great'])
  .range(['red', 'white', 'green']);
console.log('===================Ordinal Scale===================');
console.log(ordinalScale('poor'));
console.log(ordinalScale('good'));
console.log(ordinalScale('great'));
