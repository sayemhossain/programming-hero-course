document.getElementById("btn").addEventListener("click", function () {
  var commentBox = document.getElementById("new-comment");

  //   create comment pera
  const newComment = document.createElement("p");
  newComment.innerText = commentBox.value;

  //   append in comment-container
  document.getElementById("comment-container").appendChild(newComment);
  commentBox.value = "";
});
