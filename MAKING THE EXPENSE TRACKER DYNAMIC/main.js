const myForm = document.getElementById("my-form");
const expenseAmount = document.getElementById("expenses");
const descriptionDetail = document.getElementById("description");
const chooseCategory = document.getElementById("category");
const userList = document.getElementById("users");

let detailsUrl = false;
let editId = "";
document.addEventListener("DOMContentLoaded", function() {
    axios.get("https://crudcrud.com/api/cf5d31e3b6fd45178e998e176968c270/expensesData")
    .then((response) =>{
        for(let i=0;i<response.data.length;i++){
            appendList(response.data[i])
        }
    })
    .catch((err) =>{
        console.log(err)
    })
})

// event and function to submit
document.addEventListener("submit", function addExpenses(e){
    e.preventDefault()
    //creating the object to store the details in the server
    let myExpenses = {
        amount: expenseAmount.value,
        description: descriptionDetail.value,
        category: chooseCategory.value
    };
    if(detailsUrl === false){
    axios.post("https://crudcrud.com/api/cf5d31e3b6fd45178e998e176968c270/expensesData", myExpenses)
    .then((response) =>{
        appendList(response.data)
        //console.log(response.data) //for seeing the response data
    })
    .catch((err) =>{
        console.log(err)
    })
}
    else{
    axios.put(`https://crudcrud.com/api/cf5d31e3b6fd45178e998e176968c270/expensesData/${editId}`, myExpenses)
    .then(() =>{
        appendList(myExpenses)
    })
    .catch((err)=>{
        console.log(err)
    })
    }
})

function appendList(myExpenses) {
    //creating the li and appending to ul
    let li = document.createElement("li")
    li.className = "List"
    li.id = myExpenses._id;
    li.appendChild(document.createTextNode(`${myExpenses.amount} - ${myExpenses.description} - ${myExpenses.category} - `))
    userList.appendChild(li)

    //creating the delete button and appending to the li
    let deleteBtn = document.createElement("button")
    deleteBtn.className = "List"
    deleteBtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deleteBtn);

    //delete button functionality with axios
    deleteBtn.addEventListener("click", function removeItem(e){
        let id = e.target.parentElement.id
        axios.delete(`https://crudcrud.com/api/cf5d31e3b6fd45178e998e176968c270/expensesData/${id}`)
        .then(() =>{
             let li = e.target.parentElement
             li.remove();
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    //creating the edit button and appending to the li
    let editBtn = document.createElement("button")
    editBtn.className = "List"
    editBtn.appendChild(document.createTextNode('edit'))
    li.appendChild(editBtn)
    //functionality
    editBtn.addEventListener("click", (e)=>{
        e.preventDefault()
        document.getElementById("expenses").value = myExpenses.amount
        document.getElementById("description").value = myExpenses.description
        document.getElementById("category").value = myExpenses.category
        detailsUrl = true;
        editId = myExpenses._id
        console.log(editId)
        li.remove()
    })
}