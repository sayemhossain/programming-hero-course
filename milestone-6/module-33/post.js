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
    div.classList.add("post");
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(div);
    console.log(post);
  }
}

//post a data
function addAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "my new post",
      body: "This is my post",
      id: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response, json())
    .then((data) => console.log(data));
}
