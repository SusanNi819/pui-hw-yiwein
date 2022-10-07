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

function addToCart() {
    const cartItemSaved = new Roll (rollImages, rollNames, rollGlazingType, packSizeType, rollPrices, updatePrice().toFixed(2));
    console.log("cart item saved");
    console.log(cartItemSaved);
    itemSet.add(cartItemSaved);
    addToLocalStorage();
    return cartItemSaved;
}
document.querySelector('.add-to-cart').addEventListener('click', addToCart)

  

function addToLocalStorage() {
    console.log(itemSet)
    let cartItemArray = Array.from(itemSet);
    let data = JSON.parse(localStorage.getItem('storeItems'));
    if (data == null) {
        data = [];
    }
    data.push(cartItemArray[0]);
    console.log(cartItemArray);
    console.log(data)
  
    let cartItemJSON = JSON.stringify(data);
    console.log(cartItemJSON);
    localStorage.setItem('storeItems', cartItemJSON);

  }