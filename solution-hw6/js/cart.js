let rollName = [
  {
    name: "Original",
    value: 2.49
  },
  {
    name: "Apple",
    value: 3.49
  },
  {
    name: "Raisin",
    value: 2.99
  },
  {
    name: "Walnut",
    value: 3.49
  },
  {
    name: "Double-Chocolate",
    value: 3.99
  },
  {
    name: "Strawberry",
    value: 3.99
  },

]

let glazingNames = [
  {
    name: "Original",
    value: 0,
  },
  {
    name: "Sugar Milk",
    value: 0,
  },
  {
    name: "Vanilla Milk",
    value: 0.5,
  },
  {
    name: "Double Chocolate",
    value: 1.5,
  },
];

let packSizes = [
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

function updateCalculatedPrice(baseUpdate, glazingUpdate, packUpdate) {
  return (baseUpdate + glazingUpdate) * packUpdate;
}

function baseChange(rollType) {
  let baseUpdate = 2.49;
  if (rollType == rollName[0].name) {
    baseUpdate = rollName[0].value;
  } else if (rollType == rollName[1].name) {
    baseUpdate = rollName[1].value;
  } else if (rollType == rollName[2].name) {
    baseUpdate = rollName[2].value;
  } else if (rollType == rollName[3].name) {
    baseUpdate = rollName[3].value;
  } else if (rollType == rollName[4].name) {
    baseUpdate = rollName[4].value;
  } else if (rollType == rollName[5].name) {
    baseUpdate = rollName[5].value;
  } 
  
  return baseUpdate
}

function packChange(packSize) {
  let packUpdate = 0;
  if (packSize == packSizes[0].name) {
    packUpdate = packSizes[0].value;
  } else if (packSize == packSizes[1].name) {
    packUpdate = packSizes[1].value;
  } else if (packSize == packSizes[2].name) {
    packUpdate = packSizes[2].value;
  } else if (packSize == packSizes[3].name) {
    packUpdate = packSizes[3].value;
  } 

  return packUpdate
}

function glazeChange(rollGlazing) {
  let glazingUpdate = 1;
  if (rollGlazing == glazingNames[0].name) {
    glazingUpdate = glazingNames[0].value;
  } else if (rollGlazing == glazingNames[1].name) {
    glazingUpdate = glazingNames[1].value;
  } else if (rollGlazing== glazingNames[2].name) {
    glazingUpdate = glazingNames[2].value;
  } else if (rollGlazing == glazingNames[3].name) {
    glazingUpdate = glazingNames[3].value;
  } 

  return glazingUpdate
}

class Roll {
constructor(rollImage, rollType, rollGlazing, packSize, basePrice, calculatedPrice) {
  this.image = rollImage;  
  this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
    this.calculatedPrice = calculatedPrice;
    this.element = null;
  }
}

const itemSet = new Set();

function addItemToCart (rollImage, rollType, rollGlazing, packSize, basePrice, calculatedPrice) {
  const cartItem = new Roll (rollImage, rollType, rollGlazing, packSize, basePrice, parseFloat(calculatedPrice));
  itemSet.add(cartItem);
  return cartItem;
}

function calculateCartTotal () {
  let totalValue = 0;
  for (const cartItem of itemSet) {
    totalValue = totalValue + parseFloat(cartItem.calculatedPrice);
  }
  const updatedPrice = document.querySelector('#number');
  updatedPrice.innerText = "$ " + totalValue.toFixed(2);
}

function createElement(cartItem) {
  const template = document.querySelector('#cartItem-template');
  const clone = template.content.cloneNode(true);
  cartItem.element = clone.querySelector('.cartItem');
  calculateCartTotal()
  const btnDelete = cartItem.element.querySelector('.cinnamon-rolls-footer');
  btnDelete.addEventListener('click', () => {
    deleteItem(cartItem);
  });
  btnDelete.addEventListener('click', () => {
    calculateCartTotal()
  });
  const cartItemListElement = document.querySelector('.cart-top');
  cartItemListElement.prepend(cartItem.element);

  updateElement(cartItem);
}

function updateElement(cartItem) {
  const rollImageElement = cartItem.element.querySelector('.product-image');
  const rollNameElement = cartItem.element.querySelector('.roll-name');
  const rollGlazingElement = cartItem.element.querySelector('.roll-glazing');
  const rollSizeElement = cartItem.element.querySelector('.roll-size');
  const rollPriceElement = cartItem.element.querySelector('.product-info-right')

  rollImageElement.src = cartItem.image;
  rollNameElement.innerText = cartItem.type + " Cinnamon Roll";
  rollGlazingElement.innerText = "Glazing: " + cartItem.glazing;
  rollSizeElement.innerText = "Pack Size: " + cartItem.size;
  rollPriceElement.innerText = "$ " + cartItem.calculatedPrice.toFixed(2);
}

function saveToLocalStorage() {
  let cartItemArray = Array.from(itemSet);

  let cartItemJSON = JSON.stringify(cartItemArray);

  localStorage.setItem('storeItems', cartItemJSON);

  console.log(localStorage.getItem('storeItems'));

}

function deleteItem(cartItem) {
  cartItem.element.remove();

  itemSet.delete(cartItem);

  saveToLocalStorage();
}

for (const cartItem of itemSet) {
  createElement(cartItem);
}

function retrieveFromLocalStorage () {
  let cartItemJSON = localStorage.getItem('storeItems');

  if (cartItemJSON == null) {
    return;
  }

  let cartItemArray = JSON.parse(cartItemJSON);

  for (let itemData of cartItemArray) {
    let cartItem = addItemToCart(itemData.image, itemData.type, itemData.glazing, itemData.size, itemData.basePrice, itemData.calculatedPrice);
    createElement(cartItem);
  }
}

retrieveFromLocalStorage();