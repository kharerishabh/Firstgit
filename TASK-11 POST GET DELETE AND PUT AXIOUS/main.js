const form = document.getElementById("my-form");
const userList = document.getElementById("users");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

let changeUrl = false;
let editId = "";

//create event listener to submit the form
form.addEventListener("submit", onSubmit);

//function to submit
function onSubmit(e) {
  e.preventDefault();
  //creating the obj for storing the value in the server
  let myObj = {
    name: nameInput.value,
    email: emailInput.value,
  };
  if (changeUrl === false) {
    //posting data to server
    axios
      .post(
        "https://crudcrud.com/api/f31927f8a19d4c7682343c52ee3a4953/appointmentData",
        myObj
      )
      .then((response) => {
        appendList(response.data);
        console.log(response.data)
        // console.log(response) //for showing post data in the console
      })
      .catch((err) => console.log(err));
  } else {
    axios
      .put(
        `https://crudcrud.com/api/f31927f8a19d4c7682343c52ee3a4953/appointmentData/${editId}`,
        myObj
      )
      .then(() => {
        appendList(myObj);
        // console.log(myObj) //for showing post data in the console
      })
      .catch((err) => console.log(err));
  }
}

// //create event listener to DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  axios
    .get(
      "https://crudcrud.com/api/f31927f8a19d4c7682343c52ee3a4953/appointmentData"
    )
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        appendList(response.data[i]);
      }
      // console.log(response) //showing all the saved data in the console
    })
    .catch((err) => {
      console.log(err);
    });
});

function appendList(myObj) {
  //inserting the li tag in DOM
  let li = document.createElement("li");
  li.className = "list";
  li.id = myObj._id;
  li.appendChild(document.createTextNode(`${myObj.name} : ${myObj.email}`));

  //creating the delete button and functionality and inserting in the li tag
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "list";
  deleteBtn.appendChild(document.createTextNode("delete"));
  li.appendChild(deleteBtn);

  //functionality
  deleteBtn.addEventListener("click", function removeItem(e) {
    let id = e.target.parentElement.id;
    axios
      .delete(
        `https://crudcrud.com/api/f31927f8a19d4c7682343c52ee3a4953/appointmentData/${id}`
      )
      .then(() => {
        let li = e.target.parentElement;
        li.remove();
      })
      .catch((err) => console.log(err));
  });

  //creating the edit button and functionality and inserting in the li tag
  let editBtn = document.createElement("button");
  editBtn.className = "list";
  editBtn.appendChild(document.createTextNode("edit"));
  li.appendChild(editBtn);
  userList.appendChild(li);

  //functionality
  editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("name").value = myObj.name;
    document.getElementById("email").value = myObj.email;
    changeUrl = true;
    editId = myObj._id;
    li.remove();
  });
}
