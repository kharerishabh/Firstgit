// Traversing the DOM

let itemList = document.querySelector('#items')

//parentElement
console.log(itemList.parentElement);
//lastelementchild
console.log(itemList.lastElementChild);
//lastchild
console.log(itemList.lastChild);

//createchild
const node = document.createElement('li')
const textNode = document.createTextNode('Hello')
node.appendChild(textNode)
document.getElementById('items').appendChild(node);
console.log(node);

//firstelementchild
console.log(itemList.firstElementChild);

//firstchild
console.log(itemList.firstChild);

//nextsibling
console.log(itemList.nextSibling);

//nextelementsibling
console.log(itemList.nextElementSibling); //it will give null if there is no next sibling

//previoussibling
console.log(itemList.previousSibling);

//previouselementsibling
console.log(itemList.previousElementSibling);

//createelement
const newDiv = document.createElement('div')
newDiv.classNAme = 'Hello';
document.body.appendChild(newDiv);

//setAttribute
newDiv.setAttribute('title', 'HelloDiv');

//createtesxtnode
let newDivText = document.createTextNode('Hello world');

//appendchild
newDiv.appendChild(newDivText);
console.log(newDiv);

//Now go head and add HEllo word before Item Lister
let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
container.insertBefore(newDiv,h1);

//Now go head and add HEllo word before Item 1
let pNode = document.getElementById('items')
let textp = document.createTextNode('Hello World');
pNode.innerHTML = 'Hello world' + pNode.innerHTML
