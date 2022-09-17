let basePrice = 2.49;
let glazingPrice = [0, 0, 0.5, 1.5];
let packPrice = [1, 3, 5, 10];
let updatePrice = 2.49;

document.addEventListener("change", glazingChange());
function glazingChange(element) {
  let element1 = document.querySelector("#glazing");
  // get value of selected glazing option
  const priceChange = document.querySelector("#glazing");
  if (priceChange == 'Keep original') {
    updatePrice = (basePrice + glazingPrice[0]) * packPrice[0];
  } else if (priceChange == 'Sugar milk') {
    updatePrice = (basePrice + glazingPrice[1]) * packPrice[0];
  } else if (priceChange == 'Vanilla milk') {
    updatePrice = (basePrice + glazingPrice[2]) * packPrice[0];
  } else if (priceChange == 'Double chocolate') {
    updatePrice = (basePrice + glazingPrice[3]) * packPrice[0];
  }
  document.getElementById("updatedPrice").innerHTML = '$ ' + updatePrice;
}

document.addEventListener('change', packChange());
function packChange(element) {
  let element2 = document.querySelector("#pack-size");
  const packPriceChange = document.querySelector("#pack-size");
  if (packPriceChange == 1) {
    updatePrice = updatePrice * packPrice[0];
  } else if (packPriceChange == 3) {
    updatePrice = updatePrice * packPrice[1];
  } else if (packPriceChange == 6) {
    updatePrice = updatePrice * packPrice[2];
  } else if (packPriceChange == 12) {
    updatePrice = updatePrice * packPrice[3];
  }
  document.getElementById("updatedPrice").innerHTML = '$ ' + updatePrice;
}
