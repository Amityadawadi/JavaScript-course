//syntax
// var Names = ['A', 'B'];

//Traversal in Array

// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];
// console.log(myFriends[1]);

//To check length of array

// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];
// console.log(myFriends.length);

// //for in loop

// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// for(let elements in myFriends){
//     console.log(elements);
// }

//for of loop

// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// for(let elements of myFriends){
//     console.log(elements);
// }

//forEach loop

// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// myFriends.forEach(function(element, index, array){
//     console.log(element + " index: " + index + " " + array);
// });

//indexof method

// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];
//     console.log(myFriends.indexOf('vishal'));

//sort metod

// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];
// myFriends.sort();
//     console.log(myFriends);

//CRUD = create, read, update, delete operation

//push method

// const animals = ['pigs', 'goats', 'sheep'];
// animals.push('chicken', 'cats', 'cow');
// console.log(animals);

//unshift method

// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// const animals = ['pigs', 'goats', 'sheep'];
// animals.unshift('chicken', 'cats', 'cow');
// console.log(animals);


//pop() method

// const plants = ['brocoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

//shift() method

// const plants = ['brocoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);


//map method

// const array1 = [1,4,9,16,25];
// let newArr = array1.map((curElem, index, arr)=>{return curElem > 9;})
// console.log(array1);
// console.log(newArr);

//map method

// let arr = [25, 36, 49, 64, 81];
// let arrSqr = arr.map((curElem))Math.sqrt((curElem));
// console.log(arrSqr);

//reduce method

let arr = [5,6,2];
let sum = arr.reduce((accumulator, curElem, index, arr)=>{
    return accumulator += curElem;
})
console.log(sum);
