document.getElementById("btn").addEventListener("click", function () {
  var commentBox = document.getElementById("new-comment").value;

  //   create comment pera
  const p = document.createElement("p");
  p.innerText = commentBox.value;

  //   append in comment-container
  document.getElementById("comment-container").appendChild = commentBox;
});
