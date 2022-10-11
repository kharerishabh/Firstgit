const form = document.getElementById("my-form");
const userList = document.getElementById("users");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

//crate event listener to submit the form 
form.addEventListener("submit", onSubmit);

//create event listener to DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const localStorageKeys = Object.keys(localStorage);
  localStorageKeys.forEach((key) => {
    let valueFromLocal = localStorage.getItem(key);
    let localObject = JSON.parse(valueFromLocal);
    let myObj = {
      name: localObject.name,
      email: localObject.email,
    };
    appendList(myObj);
  });
});

//function to submit 
function onSubmit(e) {
  
  //creating the obj for storing the value in the local storage
  let myObj = {
    name: nameInput.value,
    email: emailInput.value,
  };

  //putting values in local storage with unique email
  localStorage.setItem(myObj.email, JSON.stringify(myObj));
}

function appendList(myObj) {
  //inserting the li tag in DOM
  let li = document.createElement("li");
  li.className = "list";
  li.appendChild(document.createTextNode(`${myObj.name} : ${myObj.email}`));

  //creating the delete button and functionality and inserting in the li tag
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "list";
  deleteBtn.appendChild(document.createTextNode("delete"));
  li.appendChild(deleteBtn);

  //functionality
  deleteBtn.addEventListener("click", function removeItem(e) {
    if (e.target.classList.contains("list")) {
      let li = e.target.parentElement;
      localStorage.removeItem(myObj.email);
      userList.removeChild(li);
    }
    // you can go through with this functionality also
    // localStorage.removeItem(myObj.email);
    // li.remove();
  });

  //creating the edit button and functionality and inserting in the li tag
  let editBtn = document.createElement("button");
  editBtn.className = "list";
  editBtn.appendChild(document.createTextNode("edit"));
  li.appendChild(editBtn);
  userList.appendChild(li);

  //functionality
  editBtn.addEventListener("click", (e) => {
    document.getElementById("name").value = myObj.name;
    document.getElementById("email").value = myObj.email;
    //localStorage.removeItem(myObj.email); //if you want to also remove from local storage
    li.remove();
  });
}
