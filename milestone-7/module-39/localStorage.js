//showing value form local storage
const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const name in cart) {
    displayProduct(name);
  }
};

//Add item
const addItem = () => {
  const inputField = document.getElementById("product-name");
  const name = inputField.value;
  if (!name) {
    return;
  }
  //display in the ui
  displayProduct(name);
  //add to local storage
  addProductToCart(name);

  //empty the input feild
  inputField.value = "";
};

//this is for display product
const displayProduct = (name) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

//if any cart alreay avaiable in local storage then parse it
const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

// this is for add to local storage
const addProductToCart = (name) => {
  const cart = getCart();

  //count product quantity
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

//this is for placce order
const placeOrder = () => {
  document.getElementById("products").textContent = "";

  //removing item from local storage
  localStorage.removeItem("cart");
};

//this is simple call for previous local storage value
displayLocalStorageCart();
