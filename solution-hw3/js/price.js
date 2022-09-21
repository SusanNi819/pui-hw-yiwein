let glazingPrice = [0, 0, 0.5, 1.5];
let packPrice = [1, 3, 5, 10];
let basePrice = 2.49;
let glazingUpdate = 0;
let packUpdate = 1;

let allGlazing = [
  {
    name: "Keep original",
    value: 2.49,
  },
  {
    name: "Sugar milk",
    value: 2.49,
  },
  {
    name: "Vanilla milk",
    value: 2.99,
  },
  {
    name: "Double chocolate",
    value: 3.99,
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
  return (basePrice + glazingUpdate) * packUpdate;
}

document.getElementById("glazing").addEventListener('change', glazingChange);
function glazingChange(element) {
  let element1 = document.getElementById("glazing");
  priceChange = element1.value;
  if (priceChange == allGlazing[0].value) {
    glazingUpdate = glazingPrice[0];
  } else if (priceChange == allGlazing[1].value) {
    glazingUpdate = glazingPrice[1];
  } else if (priceChange == allGlazing[2].value) {
    glazingUpdate = glazingPrice[2];
  } else if (priceChange == allGlazing[3].value) {
    glazingUpdate = glazingPrice[3];
  }
  const newPrice = updatePrice()
  document.getElementById("updatedPrice").innerHTML = '$ ' + Math.round(newPrice*100)/100;
 }
 
document.getElementById("pack-size").addEventListener('change', packChange);
function packChange(element) {
  let element2 = document.getElementById("pack-size");
  packPriceChange = element2.value;
  if (packPriceChange == allPackSize[0].value) {
    packUpdate = packPrice[0];
  } else if (packPriceChange == allPackSize[1].value) {
    packUpdate = packPrice[1];
  } else if (packPriceChange == allPackSize[2].value) {
    packUpdate = packPrice[2];
  } else if (packPriceChange == allPackSize[3].value) {
    packUpdate = packPrice[3];
  } 
  const newPrice = updatePrice()
  document.getElementById("updatedPrice").innerHTML = '$ ' + Math.round(newPrice*100)/100;
}