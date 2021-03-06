function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUsersData(data));
}
function displayUsersData(data) {
  const ul = document.getElementById("users");
  for (const user of data) {
    console.log(user);
    const li = document.createElement("li");
    li.innerText = `Name: ${user.name}\n Email: ${user.email}\n\n`;
    ul.appendChild(li);
  }
}

function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
