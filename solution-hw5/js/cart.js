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
    const rollImageElement = cartItem.element.querySelector('.product-image');
    const rollNameElement = cartItem.element.querySelector('.roll-name');
    const rollGlazingElement = cartItem.element.querySelector('.roll-glazing');
    const rollSizeElement = cartItem.element.querySelector('.roll-size');
    const rollPriceElement = cartItem.element.querySelector('.product-info-right')
  
    rollImageElement.src = cartItem.image;
    rollNameElement.innerText = cartItem.type + " Cinnamon Roll";
    rollGlazingElement.innerText = "Glazing: " + cartItem.glazing;
    rollSizeElement.innerText = "Pack Size: " + cartItem.size;
    rollPriceElement.innerText = "$ " + cartItem.calculatedPrice;
  }

  function deleteItem(cartItem) {
    cartItem.element.remove();
    itemSet.delete(cartItem);
  }

  let rollNames = [
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

  console.log("Update calculated price")
  console.log(updateCalculatedPrice(2.49, 0.5, 6))
  // 2.49 -> baseUpdate, 0.5 -> glazingUpdate, 6 -> packUpdate

  function newFunction(a, b, c) {
    return (a + b) * c;
  }

 console.log(newFunction(1, 2, 3));

  function baseChange(rollType) {
    let baseUpdate = 2.49;
    if (rollType == rollNames[0].name) {
      baseUpdate = rollNames[0].value;
    } else if (rollType == rollNames[1].name) {
      baseUpdate = rollNames[1].value;
    } else if (rollType == rollNames[2].name) {
      baseUpdate = rollNames[2].value;
    } else if (rollType == rollNames[3].name) {
      baseUpdate = rollNames[3].value;
    } else if (rollType == rollNames[4].name) {
      baseUpdate = rollNames[4].value;
    } else if (rollType == rollNames[5].name) {
      baseUpdate = rollNames[5].value;
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

  const cartItemOne = addToCart(
    "Assets/original-cinnamon-roll.jpeg",
    "Original",
    "Sugar Milk",
    1,
    2.49,
    updateCalculatedPrice(baseChange("Original"), glazeChange("Sugar Milk"), packChange("1")).toFixed(2)
  );

const cartItemTwo = addToCart(
    "Assets/walnut-cinnamon-roll.jpeg",
    "Walnut",
    "Vanilla Milk",
    12,
    3.49,
    updateCalculatedPrice(baseChange("Walnut"), glazeChange("Vanilla Milk"), packChange("12")).toFixed(2)
  );

const cartItemThree = addToCart(
    "Assets/raisin-cinnamon-roll.jpeg",
    "Raisin",
    "Sugar Milk",
    3,
    2.99,
    updateCalculatedPrice(baseChange("Raisin"), glazeChange("Sugar Milk"), packChange("3")).toFixed(2)
  );

const cartItemFour = addToCart(
    "Assets/apple-cinnamon-roll.jpeg",
    "Apple",
    "Original",
    3,
    3.49,
    updateCalculatedPrice(baseChange("Apple"), glazeChange("Original"), packChange("3")).toFixed(2)
  );

  for (const cartItem of itemSet) {
    console.log(cartItem);
    createElement(cartItem);
  }
