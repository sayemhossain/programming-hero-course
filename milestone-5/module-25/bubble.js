document
  .getElementById("second-item")
  .addEventListener("click", function (event) {
    console.log("second item click");
    // event.stopPropagation();
    // event.stopImmediatePropagation();
  });

document
  .getElementById("list-container")
  .addEventListener("click", function () {
    console.log("ul click");
  });
document
  .getElementById("section-container")
  .addEventListener("click", function () {
    console.log("section click");
  });
