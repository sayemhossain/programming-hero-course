var btn = document.getElementById("btn");
var pera = document.getElementById("pera");

btn.addEventListener("click", function () {
  pera.innerHTML = "Yeah! I am cheanged.";
});
// function changed() {
//   pera.innerHTML = "hellos";
// }
function makeRed() {
  document.body.style.backgroundColor = "red";
}
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
