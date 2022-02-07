document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("info").style.display = "none";
  document.getElementById("delete-confirm").value = "";
});
// focus
// document
//   .getElementById("delete-confirm")
//   .addEventListener("focus", function () {
//     document.body.style.backgroundColor = "lightcoral";
//   });

// // blur
// document.getElementById("delete-confirm").addEventListener("blur", function () {
//   document.body.style.backgroundColor = "white";
// });

document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    const btn = document.getElementById("btn");
    if (event.target.value == "delete") {
      btn.removeAttribute("disabled");
    } else {
      btn.setAttribute("disabled", true);
    }
  });
