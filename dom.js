//Examine the document object
//console.dir(document);

//To access the Domain
//console.log(document.domain);

//To access the URL
//console.log(document.URL);

//To access the Title of the page
//console.log(document.title);

//To change the title
//document.title = "123";

//To access the document type
//console.log(document.doctype);

//To access the head and body
//console.log(document.head);
//console.log(document.body);

//To access the html collection
//console.log(document.all);

//To access the colection via index
//console.log(document.all[10]);

//To change the collection 
//document.all[10].textContent = "Hello";// Dont use this method its a wrong method

//To access all the forms
//console.log(document.forms);

//To access the link
//console.log(document.link);

//To access the images
//console.log(document.images);


//SELECTOR
//Get element by id and we can also put it in variable
//console.log(document.getElementById('header-title'))
//let headerTitle = document.getElementById('header-title')
//let header = document.getElementById('main-header');
//console.log(headerTitle);

//To change the text content
//headerTitle.textcontent = "Hello";
//headerTitle.innertext = "Goodbye";

//console.log(headerTitle.textContent); //it discarting the spam style
//console.log(headerTitle.innerText); //inner keep attenation to the styling that is the difference between two
//headerTitle.innerHTML = '<h3>Hello</h3>';//inner html put h3 inside the div 

//To change the CSS style using DOM
//headerTitle.style.borderBottom = 'solid 3px #000'
//header.style.borderBottom = 'solid 3px #000'

//To add element in the ul-li
/*const ul = document.getElementById('items')
const li = document.createElement('li')
li.appendChild(document.createTextNode('Bold'))
ul.appendChild(li);
ul.lastElementChild.style.color = "green";
*/
//GetElementByClassName


