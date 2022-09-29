class Roll {
constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
}
}
let glazingPrice = [0, 0, 0.5, 1.5];
let packPrice = [1, 3, 5, 10];
let basePrice = [2.49, 3.49, 2.99, 3.99];
let glazingUpdate = 0;
let packUpdate = 1;

let allRollType = [
    "Original",
    "Apple",
    "Raisin",
    "Walnut",
    "Double-Chocolate",
    "Strawberry"
  ];

let allGlazing = [
    "Original",
    "Sugar Milk",
    "Vanilla Milk",
    "Double Chocolate",
  ];

let allPackSize = [
    "1",
    "3",
    "6",
    "12",
  ];

function updatePrice() {
    return (baseUpdate + glazingUpdate) * packUpdate;
  }

function baseChange(element) {
    let element1 = rollType;
    rollTypeChange = element1;
    if (rollTypeChange == allRollType[0]) {
        baseUpdate == basePrice[0];
    } else if (rollTypeChange == allRollType[1]) {
        baseUpdate == basePrice[1];
    } else if (rollTypeChange == allRollType[2]) {
        baseUpdate == basePrice[2];
    } else if (rollTypeChange == allRollType[3]) {
        baseUpdate == basePrice[1];
    } else if (rollTypeChange == allRollType[4]) {
        baseUpdate == basePrice[3];
    } else if (rollTypeChange == allRollType[5]) {
        baseUpdate == basePrice[3];
    }
    const newPrice = updatePrice()
}

function glazingChange(element) {
    let element2 = rollGlazing;
    priceChange = element2;
    if (priceChange == allGlazing[0]) {
      glazingUpdate = glazingPrice[0];
    } else if (priceChange == allGlazing[1]) {
      glazingUpdate = glazingPrice[1];
    } else if (priceChange == allGlazing[2]) {
      glazingUpdate = glazingPrice[2];
    } else if (priceChange == allGlazing[3]) {
      glazingUpdate = glazingPrice[3];
    }
    const newPrice = updatePrice()
   }

function packChange(element) {
    let element3 = packSize;
    packPriceChange = element3;
    if (packPriceChange == allPackSize[0]) {
      packUpdate = packPrice[0];
    } else if (packPriceChange == allPackSize[1]) {
      packUpdate = packPrice[1];
    } else if (packPriceChange == allPackSize[2]) {
      packUpdate = packPrice[2];
    } else if (packPriceChange == allPackSize[3]) {
      packUpdate = packPrice[3];
    } 
    const newPrice = updatePrice()
  }



const itemSet = new Set();

function addToCart(rollType, rollGlazing, packSize, basePrice) {
    const cartItem = new Roll (rollType, rollGlazing, packSize, basePrice);
    itemSet.add(cartItem);

    return cartItem;
}

const cartItemOne = addToCart(
    "Original",
    "Sugar Milk",
    1,
    newPrice
  );

const cartItemTwo = addToCart(
    "Walnut",
    "Vanilla Milk",
    12,
    "$ 39.99"
  );

const cartItemThree = addToCart(
    "Raisin",
    "Sugar Milk",
    3,
    "$ 8.97"
  );

const cartItemFour = addToCart(
    "Apple",
    "Original",
    3,
    "$ 10.47"
  );
