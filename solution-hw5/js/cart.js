class Roll {
constructor(rollImage, rollType, rollGlazing, packSize, basePrice) {
  this.Image = rollImage;  
  this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;

    this.element = null;
}
}

const itemSet = new Set();

function addToCart(rollImage, rollType, rollGlazing, packSize, basePrice) {
    const cartItem = new Roll (rollImage, rollType, rollGlazing, packSize, basePrice);
    itemSet.add(cartItem);

    return cartItem;
}

function createElement(cartItem) {
  const template = document.querySelector('#cartItem-template');
  const clone = template.content.cloneNode(true);
  cartItem.element = clone.querySelector('.cartItem');

  const btnDelete = cartItem.element.querySelector('.icon-delete');
  console.log(btnDelete);
  btnDelete.addEventListener('click', () => {
    deleteItem(cartItem);
});
}

const cartItemListElement = document.querySelector('.cart-top');
  cartItemListElement.prepend(cartItem.element);

const cartItemOne = addToCart(
    "Original",
    "Sugar Milk",
    1,
    newPrice
  );

  function updateElement(cartItem) {
    const rollImageElement = cartItem.element.querySelector('.product-image');
    const rollNameElement = cartItem.element.querySelector('.roll-name');
    const rollGlazingElement = cartItem.element.querySelector('.roll-glazing');
    const rollSizeElement = cartItem.element.querySelector('.roll-size')
  
    rollImageElement.src = cartItem.rollImage;
    rollNameElement.innerText = cartItem.rollType;
    rollGlazingElement.innerText = "Glazing: " + cartItem.rollGlazing;
    rollSizeElement.innerText = "Pack Size: " + cartItem.packSize;
  }

  function deleteItem(cartItem) {
    cartItem.element.remove();
    itemSet.delete(cartItem);
  }

const cartItemTwo = addToCart(
    "Assets/.walnut-cinnamon-roll.jpeg",
    "Walnut",
    "Vanilla Milk",
    12,
    newPrice
  );

const cartItemThree = addToCart(
    "Assets/.raisin-cinnamon-roll.jpeg",
    "Raisin",
    "Sugar Milk",
    3,
    newPrice
  );

const cartItemFour = addToCart(
    "Assets/.apple-cinnamon-roll.jpeg",
    "Apple",
    "Original",
    3,
    newPrice
  );

  for (const cartItem of cartItemSet) {
    console.log(cartItem);
    createElement(cartItem);
  }
