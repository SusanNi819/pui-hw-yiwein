let basePrice = 2.49;
let glazingPrice = [0, 0, 0.5, 1.5];
let packPrice = [1, 3, 5, 10];
let updatePrice = 2.49;

function glazingChange(element) {
  let element1 = document.querySelector(".glazing");
  // get value of selected glazing option
  const priceChange = element.glazing;
  if (priceChange == 'Keep original') {
    updatePrice = (basePrice + glazingPrice[0]) * packPrice[0];
  } else if (priceChange == 'Sugar milk') {
    updatePrice = (basePrice + glazingPrice[1]) * packPrice[0];
  } else if (priceChange == 'Vanilla milk') {
    updatePrice = (basePrice + glazingPrice[2]) * packPrice[0];
  } else if (priceChange == 'Double chocolate') {
    updatePrice = (basePrice + glazingPrice[3]) * packPrice[0];
  }
}

function packChange(element) {
  let element2 = document.querySelector(".pack-size");
  const packPriceChange = element.pack-size;
  if (packPriceChange == 1) {
    updatePrice = updatePrice * packPrice[0];
  } else if (packPriceChange == 3) {
    updatePrice = updatePrice * packPrice[1];
  } else if (packPriceChange == 6) {
    updatePrice = updatePrice * packPrice[2];
  } else if (packPriceChange == 12) {
    updatePrice = updatePrice * packPrice[3];
  }
  element.innerHTML = "$ " + updatePrice;
}
document.querySelector(".updatedPrice").addEventListener('onChange', glazingChange)
document.querySelector(".updatedPrice").addEventListener('onChange', packChange)
