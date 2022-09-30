class Roll {
constructor(rollImage, rollType, rollGlazing, packSize, basePrice, calculatedPrice) {
  this.Image = rollImage;  
  this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
    this.calculatedPrice = calculatedPrice;

    this.element = null;
}
}

const itemSet = new Set();

function addToCart(rollImage, rollType, rollGlazing, packSize, basePrice, calculatedPrice) {
    const cartItem = new Roll (rollImage, rollType, rollGlazing, packSize, basePrice,calculatedPrice);
    itemSet.add(cartItem);

    return cartItem;
}

function createElement(cartItem) {
  const template = document.querySelector('#cartItem-template');
  const clone = template.content.cloneNode(true);
  cartItem.element = clone.querySelector('.cartItem');
  const btnDelete = cartItem.element.querySelector('.cinnamon-rolls-footer');
  btnDelete.addEventListener('click', () => {
    deleteItem(cartItem);
});
  const cartItemListElement = document.querySelector('.cart-top');
  cartItemListElement.prepend(cartItem.element);

  updateElement(cartItem);
}



  function updateElement(cartItem) {
    const rollImageElement = cartItem.element.querySelector('.product-info-left');
    const rollNameElement = cartItem.element.querySelector('.roll-name');
    const rollGlazingElement = cartItem.element.querySelector('.roll-glazing');
    const rollSizeElement = cartItem.element.querySelector('.roll-size');
    const rollPriceElement = cartItem.element.querySelector('.product-info-right')
  
    rollImageElement.src = cartItem.rollImage;
    rollNameElement.innerText = cartItem.rollType + "Cinnamon Roll";
    rollGlazingElement.innerText = "Glazing: " + cartItem.rollGlazing;
    rollSizeElement.innerText = "Pack Size: " + cartItem.packSize;
    rollPriceElement.innerText = "$ " + cartItem.calculatedPrice;
  }

  function deleteItem(cartItem) {
    cartItem.element.remove();
    itemSet.delete(cartItem);
  }

  const cartItemOne = addToCart(
    "Assets/.original-cinnamon-roll.jpeg",
    "Original",
    "Sugar Milk",
    1,
    2.49,
    0
  );

const cartItemTwo = addToCart(
    "Assets/.walnut-cinnamon-roll.jpeg",
    "Walnut",
    "Vanilla Milk",
    12,
    3.49,
    0
  );

const cartItemThree = addToCart(
    "Assets/.raisin-cinnamon-roll.jpeg",
    "Raisin",
    "Sugar Milk",
    3,
    2.99,
    0
  );

const cartItemFour = addToCart(
    "Assets/.apple-cinnamon-roll.jpeg",
    "Apple",
    "Original",
    3,
    3.49,
    0
  );

  for (const cartItem of itemSet) {
    console.log(cartItem);
    createElement(cartItem);
  }
