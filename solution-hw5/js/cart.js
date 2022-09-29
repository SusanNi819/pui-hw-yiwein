class Roll {
constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
}
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
