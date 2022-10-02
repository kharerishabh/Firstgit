let headerTitle = document.getElementById('header-title')
headerTitle.style.borderBottom = 'solid 3px #000'

const ul = document.getElementById('items')
const li = document.createElement('li')
li.appendChild(document.createTextNode('Bold'))
ul.appendChild(li);
ul.lastElementChild.style.color = "green";