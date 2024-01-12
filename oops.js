//what if we want object as a value inside an object

// let bioData = {
//     myName : {
//         realName: "vinod",
//         channelName: "thapa technical"
//     },
//     myAge: 26,
//     getData() {
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName.channelName);



//"this" object

//the definition of this object "this" object is that it contain the current context.
//the this object can have different values depending on where it is placed
// example:

//console.log(this); // it refers to the current context and that is window global object

// function myName(){
//     console.log(this);
// }
// myName();


// var myNames = "vinod";
// function myName(){
//     console.log(this.myNames);
// }
// myName();


//Destructing in ES6

//The destructing assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays 
//or properties from objects into distict variables

//Array Destructuring

// const myBioData = ["vinod", "thapa", 26];
// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];
// console.log(myAge); // 26
// console.log(myFName); // vinod
// console.log(myLName); // thapa


//object properties

// let myName = "vinod";
// const myBio = {
//     [myName] : "hello how are you",
//     [20+6] : "is my age"
// }
// console.log(myBio); // { '26': 'is my age', vinod: 'hello how are you' }



//Spread Operator

// const colors = ["red", "green", "blue", "white", "pink"];
// const myColors = [...colors, "yellow", "black"];
// console.log(myColors); 
// // [
//     'red',   'green',
//     'blue',  'white',
//     'pink',  'yellow',
//     'black'
//   ]



//ES7 features
//1) array include
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent); // false


//2) ** exponential operator

// console.log(2**2); // 4


//function currying

// function sum(num1){
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3);
//         }

//     }
// }
// sum(5)(3)(8) // O/P: 16


//callback hell

// setTimeout(()=>{
//     console.log(`1 work is done`);
//     setTimeout(()=>{
//         console.log(`2 work is done`);
//         setTimeout(()=>{
//             console.log(`3 work is done`);
//             setTimeout(()=>{
//                 console.log(`4 work is done`);
//                 setTimeout(()=>{
//                     console.log(`5 work is done`);
//                     setTimeout(()=>{
//                         console.log(`6 work is done`);
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)
//1 work is done
// 2 work is done
// 3 work is done
// 4 work is done
// 5 work is done
// 6 work is done



//JSON = JavaScript object notation
//JSON.Stringify turns a JavaScript object into JSON text and stores that JSON text in a String

var my_object = {key_1: "some text", key_2: true, key_3: 5};
var object_as_string = JSON.stringify(my_object);
//typeof(object_as_string);
console.log(typeof(object_as_string)); //string