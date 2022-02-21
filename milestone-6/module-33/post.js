function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayPosts(data));
}
loadPost();

function displayPosts(posts) {
  //   console.log(data);
  const postContainer = document.getElementById("posts");

  for (const post of posts) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(div);
    console.log(post);
  }
}
