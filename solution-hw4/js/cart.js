class Roll {
constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing =  rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
}
}

function addToCart() {
    let cart = new Roll (rollKey, rollGlazingType, packSizeType, rollPrices);
    console.log(cart);
}
document.querySelector('.add-to-cart').addEventListener('click', addToCart)

