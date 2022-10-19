const myForm = document.getElementById("my-form");
const expenseAmount = document.getElementById("expenses");
const descriptionDetail = document.getElementById("description");
const chooseCategory = document.getElementById("category");
const userList = document.getElementById("users");

//create event listener to submit the expenses
myForm.addEventListener("submit", addExpenses);

//create event listner to dom content loaded
document.addEventListener("DOMContentLoaded", function () {
  const localStorageKeys = Object.keys(localStorage);
  localStorageKeys.forEach((key) => {
    let valueFromLocal = localStorage.getItem(key);
    let localObject = JSON.parse(valueFromLocal);
    myObject = {
      amount: localObject.amount,
      description: localObject.description,
      category: localObject.category,
    };
    appendList(myObject);
  });
});

//function to submit
function addExpenses(e) {
  //creating the object to store in the local storage
  let myObj = {
    amount: expenseAmount.value,
    description: descriptionDetail.value,
    category: chooseCategory.value,
  };
  // putting values inside the local storage
  localStorage.setItem(myObj.category, JSON.stringify(myObj));
}

function appendList(myObj) {
  // inserting the li in the ul
  const li = document.createElement("li");
  li.className = "listLi";
  li.appendChild(
    document.createTextNode(
      `${myObj.amount} : ${myObj.description} : ${myObj.category}`
    )
  );

  //creating the delete button for li and functionality
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "listLi";
  deleteBtn.appendChild(document.createTextNode("delete"));
  deleteBtn.style.backgroundColor = "red";
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function removeItem(e) {
    if (e.target.classList.contains("listLi")) {
      let li = e.target.parentElement;
      localStorage.removeItem(myObj.category);
      userList.removeChild(li);
    }
  });

  //creating the edit button for li and functionality
  let editBtn = document.createElement("button");
  editBtn.className = "listLi";
  editBtn.appendChild(document.createTextNode("edit"));
  editBtn.style.backgroundColor = "orange";
  li.appendChild(editBtn);
  userList.appendChild(li);

  editBtn.addEventListener("click", function editItem() {
    document.getElementById("expenses").value = myObj.amount;
    document.getElementById("description").value = myObj.description;
    //document.getElementById('category').value = myObj.category;
    //if you also want to remove from the local storage while editing
    localStorage.removeItem(myObj.category);
    li.remove();
  });
}
