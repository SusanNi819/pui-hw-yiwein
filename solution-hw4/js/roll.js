const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const choseRoll = params.get('rolls');
const rollChoseName = rolls[choseRoll];

const rollNames = rollChoseName.rollName;
const rollNameElement = document.querySelector('#catchline');
rollNameElement.innerText = rollNames;

const rollPrices = rollChoseName.basePrice;
const rollPriceElement = document.querySelector('#updatedPrice');
rollPriceElement.innerText = "$ " + rollPrices;

const rollImages = rollChoseName.imageFile;
const rollImageElement = document.querySelector('#cinnamon-roll-image');
rollImageElement.src = rollImages;

const rollKey = rollChoseName.rollKeyName;



