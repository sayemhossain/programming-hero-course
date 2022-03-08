const addItem = () => {
  const inputField = document.getElementById("product-name");
  const name = inputField.value;
  console.log(name);
  //display in the ui
  displayProduct(name);
  //add to local storage

  inputField.value = "";
};
const displayProduct = (name) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};
