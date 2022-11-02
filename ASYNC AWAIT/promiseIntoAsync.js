const posts = [
  { title: "Post one", body: "This is post one", lastActivity: "29 of jan" },
  { title: "Post two", body: "This is post two", lastActivity: "29 of jan" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title} ${post.lastActivity}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
getPosts();

//one method to convert promise in async await line 18 to 40
// let delCre = async function (obj) {
//   await createPost(obj);
//   getPosts();
//   await deletePost();
//   await deletePost();
//   getPosts();
  //ceate post function using promises
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push({ ...post, lastActivity: "29 of jan" });
        const error = false;

        if (!error) {
          resolve();
        } else {
          reject("Error: Something went erong");
        }
      }, 2000);
    });
  }

  //delete post function using promises
  function deletePost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length != 0) {
          resolve(posts.pop(post));
        } else {
          reject("Error: Array is empty now");
        }
      }, 1000);
    });
  }
// };
// delCre({ title: "Post three", body: "This is post three" });

//another method to convert promise to async await
async function func1() {
  try {
   await createPost({title: 'Post three', body: 'This is post three'})
   getPosts()
   await deletePost()
   getPosts()
  } catch (error) {
    console.log(error);
  }
}
func1();
