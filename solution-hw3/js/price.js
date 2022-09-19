let glazingPrice = [0, 0, 0.5, 1.5];
let packPrice = [1, 3, 5, 10];
let basePrice = 2.49;
let glazingUpdate = 0;
let packUpdate = 1;

function updatePrice() {
  return (basePrice + glazingUpdate) * packUpdate;
}

document.getElementById("glazing").addEventListener('change', glazingChange);
function glazingChange(element) {
  let element1 = document.getElementById("glazing");
  priceChange = element1.value;
  if (priceChange == "Keep original") {
    glazingUpdate = glazingPrice[0]
  } else if (priceChange == "Sugar milk") {
    glazingUpdate = glazingPrice[1];
  } else if (priceChange == "Vanilla milk") {
    glazingUpdate = glazingPrice[2];
  } else if (priceChange == "Double chocolate") {
    glazingUpdate = glazingPrice[3];
  }
  const newPrice = updatePrice()
  document.getElementById("updatedPrice").innerHTML = '$ ' + Math.round(newPrice*100)/100;
 }
 
document.getElementById("pack-size").addEventListener('change', packChange);
function packChange(element) {
  let element2 = document.getElementById("pack-size");
  packPriceChange = element2.value;
  if (packPriceChange == "1") {
    packUpdate = packPrice[0];
  } else if (packPriceChange == "3") {
    packUpdate = packPrice[1];
  } else if (packPriceChange == "5") {
    packUpdate = packPrice[2];
  } else if (packPriceChange == "10") {
    packUpdate = packPrice[3];
  } 
  const newPrice = updatePrice()
  document.getElementById("updatedPrice").innerHTML = '$ ' + Math.round(newPrice*100)/100;
}