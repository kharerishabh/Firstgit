const posts = [
  {
    title: "post one",
    body: "this is post one",
    createdAt: new Date().getTime(),
    editedAt: new Date().getTime(),
  },
  {
    title: "post two",
    body: "this is post two",
    createdAt: new Date().getTime(),
    editedAt: new Date().getTime(),
  },
];

// for set time out function
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title} - last updated ${
        (new Date().getTime() - post.createdAt) / 1000
      } seconds ago</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
getPosts();

//for set interval function
let timer;
function editedAt() {
  clearInterval(timer);
  timer = setInterval(() => {
    let input = "";
    posts.forEach((post) => {
      input += `<li>${post.title} - last updates at ${
        (new Date().getTime() - post.createdAt) / 1000
      } seconds ago - last edited ${
        (new Date().getTime() - post.editedAt) / 1000
      } seconds ago</li>`;
    }, 3000);
    document.body.innerHTML = input;
  });
}
editedAt();

//creating the new post
function create4posts(post, callback) {
  setTimeout(() => {
    posts.push({
      ...post,
      createdAt: new Date().getTime(),
      editedAt: new Date().getTime(),
    });
    callback();
  }, 2000);
}
create4posts(
  { title: "post three", body: "this is post three" },
  getPosts,
  editedAt
);
