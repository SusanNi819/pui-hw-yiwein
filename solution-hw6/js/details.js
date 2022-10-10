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
    itemSet.add(cartItemSaved);
    addToLocalStorage();

    return cartItemSaved;
}
document.querySelector('.add-to-cart').addEventListener('click', addToCart)

function addToLocalStorage() {
    let cartItemArray = Array.from(itemSet);
    let data = JSON.parse(localStorage.getItem('storeItems'));
    if (data == null) {
        data = [];
    }
    
    data.push(cartItemArray[cartItemArray.length-1]);
  
    let cartItemJSON = JSON.stringify(data);

    localStorage.setItem('storeItems', cartItemJSON);
    
    console.log(localStorage.getItem('storeItems'));
  }