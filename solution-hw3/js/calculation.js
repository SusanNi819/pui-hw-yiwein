let basePrice = [2.75];
let glazingPrice = [0, 0, 0.5, 1.5];
let packPrice = [1, 3, 5, 10];

if (glazing == [0]) {
    rollPrice = basePrice + 0;
}
if (glazing == [1]) {
    rollPrice = basePrice + 0;
}
if (glazing == [2]) {
    rollPrice = basePrice + 0.5;
}
if (glazing == [3]) {
    rollPrice = basePrice + 1.5;
}
console.log(rollPrice);

function glazingChange(add) {
    // get value of selected glazing option
    let DetailsPriceChange = document.querySelector('.add');
    const priceChange = add.value;
    
  // add your code to do update the price ...
  }
  