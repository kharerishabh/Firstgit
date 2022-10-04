//creating the delete button and the functionality for delete

// to grab the element
let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

//To grab the filter
let filter = document.getElementById('filter')

//filter Event
filter.addEventListener('keyup', filterItems);

//Form submit event
form.addEventListener('submit', addItem)

//Delete item using event listner
itemList.addEventListener('click', removeItem);

//Add item
function addItem(e){
    e.preventDefault()

    //to check 
   // console.log(1);

   //get Input value
   let newItem = document.getElementById('item').value
   let description = document.getElementById('description').value

   //create new li element
   let li = document.createElement('li')

    //Add class
    li.className = 'list-group-item';
    //console.log(li); //To check

    //add text node with input value
    li.appendChild(document.createTextNode(newItem))
    //const desNode = document.createTextNode(description);
    li.appendChild(document.createTextNode(description))

    //creating the delete button element
    let deleteBtn = document.createElement('button');

    //Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Add or appendtext node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //Append button on li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    //console.log(1)//if you click the any item any where then it will count the click
    if(e.target.classList.contains('delete')){
        //console.log(1);//but this will only target the delete button
    if(confirm('Are you sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
    }
}

function filterItems(e){
    //to convert all in lower case
    let text = e.target.value.toLowerCase();
   // console.log(text);

   //to grab all the li with in the item list
    let item = itemList.getElementsByTagName('li');

    //covert to an Array
    Array.from(item).forEach(function(item){
        let itemName = item.firstChild.textContent;
        //Basically we are comparing itemName to the serach box text
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'Block';
        }else{
            item.style.display = 'None';
        }
    })

    Array.from(item).forEach(function(item){
        const des = item.childNodes[1].textContent;
        if(des.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'Block';
        }else{
            item.style.display = 'None';
        }
    })
}