//Make the 2nd item have green background color
let secondItem = document.querySelector('.list-group-item:nth-child(2)')
//secondItem.style.backgroundColor = 'green';

//to make the third item invisible
let thirdItem = document.querySelector('.list-group-item:nth-child(3)')
//thirdItem.style.visibility = 'hidden';

//Using QuerySelectorALL change the font color to green for 2nd item in the item list
//secondItem.style.color = 'red';

//Choose all the odd elements and make their background green using QuerySelectorALL
let odd = document.querySelectorAll('li:nth-child(odd)')
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green'
}