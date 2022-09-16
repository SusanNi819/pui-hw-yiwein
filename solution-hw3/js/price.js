let basePrice = 2.49;
let glazingPrice = [0, 0, 0.5, 1.5];
let packPrice = [1, 3, 5, 10];
let glazing = document.querySelector(".glazing");
let packSize = document.querySelector(".pack-size");
let updatePrice = document.querySelector('.update-price');

function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = element.glazing;
  if (priceChange == 'Keep original') {
    updatePrice = basePrice + glazingPrice[0];
    const packPriceChange = element.packPrice;
    if (packPriceChange == 1) {
      updatePrice = '$ ' + priceChange * packPrice[0];
  }   else if (packPriceChange == 3) {
      updatePrice = '$ ' + priceChange * packPrice[1];
  }   else if (packPriceChange == 5) {
      updatePrice = '$ ' + priceChange * packPrice[2];
  }   else if (packPriceChange == 10) {
      updatePrice = '$ ' + priceChange * packPrice[3];
  }
  }

  if (priceChange == 'Sugar milk') {
    updatePrice = basePrice + glazingPrice[1];
    const packPriceChange = element.packPrice;
    if (packPriceChange == 1) {
      updatePrice = '$ ' + priceChange * packPrice[0];
  }   else if (packPriceChange == 3) {
      updatePrice = '$ ' + priceChange * packPrice[1];
  }   else if (packPriceChange == 5) {
      updatePrice = '$ ' + priceChange * packPrice[2];
  }   else if (packPriceChange == 10) {
      updatePrice = '$ ' + priceChange * packPrice[3];
  }
  }
    
  if (priceChange == 'Vanilla milk') {
    updatePrice = basePrice + glazingPrice[2];
    const packPriceChange = element.packPrice;
    if (packPriceChange == 1) {
      updatePrice = '$ ' + priceChange * packPrice[0];
  }   else if (packPriceChange == 3) {
      updatePrice = '$ ' + priceChange * packPrice[1];
  }   else if (packPriceChange == 5) {
      updatePrice = '$ ' + priceChange * packPrice[2];
  }   else if (packPriceChange == 10) {
      updatePrice = '$ ' + priceChange * packPrice[3];
  }
  }

  if (priceChange == 'Double chocolate') {
    updatePrice = basePrice + glazingPrice[3];
    const packPriceChange = element.packPrice;
    if (packPriceChange == 1) {
      updatePrice = '$ ' + priceChange * packPrice[0];
  }   else if (packPriceChange == 3) {
      updatePrice = '$ ' + priceChange * packPrice[1];
  }   else if (packPriceChange == 5) {
      updatePrice = '$ ' + priceChange * packPrice[2];
  }   else if (packPriceChange == 10) {
      updatePrice = '$ ' + priceChange * packPrice[3];
  }
  }
}