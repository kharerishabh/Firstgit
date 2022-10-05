const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
myForm.addEventListener('submit', onClick)

function onSubmit(e){
    e.preventDefault();
    
    if(nameInput.value == '' || emailInput.value == ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all field'

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        const li = document.createElement('li')

        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //nameInput.value = '';
        //emailInput.value = '';
    }
}

// To save the code in local storage
 function onClick(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    //localStorage.setItem('name', name);
    //localStorage.setItem('email', email);

    let myObject = {
        name,
        email
    } 

    localStorage.setItem(myObject.email, JSON.stringify(myObject));
    //console.log(localStorage); //it will return as a string

     //myObject = JSON.parse(localStorage.getItem('myobject')); //TO convert it into obj
    //console.log(myObject) //to check weather it convert in obj or not
    Object.keys(localStorage).forEach((key) => {

        let userManual = localStorage.getItem('key');
        
        let detailsOfPeople = JSON.parse(userManual);

       console.log(localStorage[key])
                
        });
 }