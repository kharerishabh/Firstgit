const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
getPosts();

//ceate post function using promises
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
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


createPost({ title: "Post three", body: "This is post three" })
 .then(() =>{
   getPosts()
 deletePost().then(()=>{
    getPosts()
 })
 deletePost().then(()=>{
  getPosts()
})
deletePost().then(()=>{
  getPosts()
})
 .catch((err) => console.log(err));
})

// //creating the 4th post
// function create4Post(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(posts.length == 0){
//       resolve(posts.push(post));
//       }
//       else{
//         reject('Array is not empty');
//       }
//     }, 4000);
//   });
// }
// //pushing the post
// create4Post({ title: "Post four", body: "This is four post" })

// // calling and deleting the post
// .then(() =>{
//   getPosts()
//   deletePost().then(()=>{
//     getPosts()
//   })
// }).catch((err)=> console.log('Error:', err));

// Promise.all([createPost({title:"post three",body:"this is post three"}),deletePost()]).then(getPosts).catch(()=>{
//   console.log("err")
//   })
  
  
//   Promise.all([deletePost()]).then(getPosts).catch(()=>{   // just ex
//       console.log("err")
//       })
      
//       Promise.all([deletePost()]).then(getPosts).catch(()=>{
//           console.log("err")
//           })