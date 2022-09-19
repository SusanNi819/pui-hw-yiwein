let basePrice = 2.49;
let glazingPrice = [0, 0, 0.5, 1.5];
let packPrice = [1, 3, 5, 10];
let updatePrice = 2.49;
let finalPrice = 0;
let priceChange = 1;
let packPriceChange = 1;

document.getElementById("glazing").addEventListener('change', glazingChange);

let baseP = 2.49;
let glazingP = 1;
let packP = 1;

function updateP() {
  return (baseP + glazingP) * packP;
}

function glazingChange(element) {
  let element1 = document.getElementById("glazing");
  priceChange = element1.value;
  if (priceChange == "Keep original") {
    glazingP = glazingPrice[0]
  } else if (priceChange == "Sugar milk") {
    glazingP = glazingPrice[1];
  } else if (priceChange == "Vanilla milk") {
    glazingP = glazingPrice[2];
  } else if (priceChange == "Double chocolate") {
    glazingP = glazingPrice[3];
  }
  const newP = updateP()
  document.getElementById("updatedPrice").innerHTML = '$ ' + Math.round(newP*100)/100;
 }
 
document.getElementById("pack-size").addEventListener('change', packChange);
function packChange(element) {
  let element2 = document.getElementById("pack-size");
  packPriceChange = element2.value;
  if (packPriceChange == "1") {
    packP = packPrice[0];
  } else if (packPriceChange == "3") {
    packP = packPrice[1];
  } else if (packPriceChange == "5") {
    packP = packPrice[2];
  } else if (packPriceChange == "10") {
    packP = packPrice[3];
  } 
  const newP = updateP()
  document.getElementById("updatedPrice").innerHTML = '$ ' + Math.round(newP*100)/100;
}