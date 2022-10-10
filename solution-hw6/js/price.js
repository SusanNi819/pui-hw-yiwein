
let glazingPrice = [0, 0, 0.5, 1.5];
let packPrice = [1, 3, 5, 10];
let basePrice = 2.49;
let glazingUpdate = 0;
let packUpdate = 1;
let rollGlazingType = "Keep Original";
let packSizeType = 1;

let allGlazing = [
  {
    name: "Keep original",
    value: 0,
  },
  {
    name: "Sugar milk",
    value: 0,
  },
  {
    name: "Vanilla milk",
    value: 0.5,
  },
  {
    name: "Double chocolate",
    value: 1.5,
  },
];

let allPackSize = [
  {
    name: "1",
    value: 1,
  },
  {
    name: "3",
    value: 3,
  },
  {
    name: "6",
    value: 5,
  },
  {
    name: "12",
    value: 10,
  },
];

for (let i = 0; i < allGlazing.length; i++) {
  const select = document.createElement ("option");
  select.value = allGlazing[i].value;
  select.innerHTML = allGlazing[i].name;
  document.getElementById("glazing").appendChild(select);
}

for (let i = 0; i < allPackSize.length; i++) {
  const select = document.createElement ("option");
  select.value = allPackSize[i].value;
  select.innerHTML = allPackSize[i].name;
  document.getElementById("pack-size").appendChild(select);
}

function updatePrice() {
  return (rollPrices + glazingUpdate) * packUpdate;
}

document.getElementById("glazing").addEventListener('change', glazingChange);
function glazingChange(element) {
  let element1 = document.getElementById("glazing");
  priceChange = element1.options[element1.selectedIndex].text;
  if (priceChange == allGlazing[0].name) {
    glazingUpdate = allGlazing[0].value;
    rollGlazingType = allGlazing[0].name;
  } else if (priceChange == allGlazing[1].name) {
    glazingUpdate = allGlazing[1].value;
    rollGlazingType = allGlazing[1].name;
  } else if (priceChange == allGlazing[2].name) {
    glazingUpdate = allGlazing[2].value;
    rollGlazingType = allGlazing[2].name;
  } else if (priceChange == allGlazing[3].name) {
    glazingUpdate = allGlazing[3].value;
    rollGlazingType = allGlazing[3].name;
  }
  basePrice = rollPrices;
  const newPrice = updatePrice()
  document.getElementById("updatedPrice").innerHTML = '$ ' + Math.round(newPrice*100)/100;
 }
 
document.getElementById("pack-size").addEventListener('change', packChange);
function packChange(element) {
  let element2 = document.getElementById("pack-size");
  packPriceChange = element2.value;
  if (packPriceChange == allPackSize[0].value) {
    packUpdate = packPrice[0];
    packSizeType = packPrice[0];
  } else if (packPriceChange == allPackSize[1].value) {
    packUpdate = packPrice[1];
    packSizeType = packPrice[1];
  } else if (packPriceChange == allPackSize[2].value) {
    packUpdate = packPrice[2];
    packSizeType = packPrice[2] + 1;
  } else if (packPriceChange == allPackSize[3].value) {
    packUpdate = packPrice[3];
    packSizeType = packPrice[3] + 2;
  } 
  basePrice = rollPrices;
  const newPrice = updatePrice();
  document.getElementById("updatedPrice").innerHTML = '$ ' + Math.round(newPrice*100)/100;
}
