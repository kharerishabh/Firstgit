// //Event with call back function
// //and if you want to count how many time you click the button using global variable
// let count = 0;
// document.getElementById('clickMe').addEventListener('click', function(){
//     console.log('button clicked', ++count);
// })

// //COUNTING CLICKED BUTTON USING CLOSURES
function attachEvent() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("button clicked", ++count);
  });
  //adding dom function
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Dom has loaded");
  });
}
attachEvent();
