let basePrice = 2.49;
let glazingPrice = [0, 0, 0.5, 1.5];
let packPrice = [1, 3, 5, 10];
let updatePrice = 2.49;
let finalPrice = 0;
let priceChange = 0;
let packPriceChange = 1;

document.getElementById("glazing").addEventListener('change', glazingChange);
function glazingChange(element) {
  let element1 = document.getElementById("glazing");
  priceChange = element1.value;
  if (priceChange == "Keep original") {
    updatePrice = (basePrice + glazingPrice[0]) * packPriceChange;
  } else if (priceChange == "Sugar milk") {
    updatePrice = (basePrice + glazingPrice[1]) * packPriceChange;
  } else if (priceChange == "Vanilla milk") {
    updatePrice = (basePrice + glazingPrice[2]) * packPriceChange;
  } else if (priceChange == "Double chocolate") {
    updatePrice = (basePrice + glazingPrice[3]) * packPriceChange;
  }
  document.getElementById("updatedPrice").innerHTML = '$ ' + Math.round(updatePrice*100)/100;
 }
 
document.getElementById("pack-size").addEventListener('change', packChange);
function packChange(element) {
  let element2 = document.getElementById("pack-size");
  packPriceChange = element2.value;
  if (packPriceChange == "1") {
    finalPrice = updatePrice * packPrice[0];
  } else if (packPriceChange == "3") {
    finalPrice = updatePrice * packPrice[1];
  } else if (packPriceChange == "5") {
    finalPrice = updatePrice * packPrice[2];
  } else if (packPriceChange == "10") {
    finalPrice = updatePrice * packPrice[3];
  } 
  document.getElementById("updatedPrice").innerHTML = '$ ' + Math.round(finalPrice*100)/100;
}