//creating new li tag without using the class
let ul = document.getElementById('items')
const li = document.createElement('li')
li.appendChild(document.createTextNode('item 5'))
ul.appendChild(li)

//accessing and changing the color via class name giving the error
//let y = document.getElementsByClassName('list-group-item')
//y[4].style.backgroundColor = 'yellow';

let x = document.getElementsByTagName('li')
x[4].style.color = 'green';