//call function
let obj = { marks: 19 };

let detail = function (a) {
  return this.obj + a;
};
console.log(detail.call(obj, 2));

//apply function
let myObj = { marks: 20 };

let detail2 = function (a, b, c) {
  return this.myObj + a + b + c;
};
let arr = [1,2,3];
console.log(detail2.apply(myObj, arr));

//bind function
let student = {marks:92};

let completeMarks = function(){
    return this.marks;
}
let bound = completeMarks.bind(student);
console.log(bound());

//Currying in js using the bind method
let multiply = function(x,y){
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

//with no argument
let multiplyByTwoNoArgument = multiply.bind(this);
multiplyByTwoNoArgument(2,3);

//with one or more argument
let multiplyByTwoWithMoreArgument = multiply.bind(this,2,4);
multiplyByTwoWithMoreArgument(5);

//Currying in js using closres
let add = function(x){
    return function(y){
        console.log(x+y);
    }
}
let addTwoNo = add(2);
addTwoNo(3);

