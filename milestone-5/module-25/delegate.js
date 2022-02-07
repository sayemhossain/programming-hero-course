var items = document.getElementsByClassName("item");
for (const item of items) {
  item.addEventListener("click", function (event) {
    // first system
    // document.getElementById("item-container").removeChild(item);

    // 2nd system
    event.target.parentNode.removeChild(event.target);
  });
}
document.getElementById("btn").addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = "new item";
  const parent = document.getElementById("item-container");
  parent.appendChild(li);
});

document
  .getElementById("item-container")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
