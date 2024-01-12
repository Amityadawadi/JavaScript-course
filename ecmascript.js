// LET vs CONST vs VAR

// var myName = "Amit";
// console.log(myName);

// myName = "Abc";
// console.log(myName);

//LET

// let myName = "Amit";
// console.log(myName);

// myName = "Abc";
// console.log(myName);


//CONST

// const myName = "Amit";
// console.log(myName);

// myName = "Abc";
// console.log(myName);

//Example

//VAR

// function biodata(){
//     var myFirstName = "Amit";
//     console.log(myFirstName);

//     if(true){
//         var myLastName = "Abc"
//         console.log("inner " + myLastName);
//         console.log("inner " + myFirstName);
//     }
//     console.log("innerouter " + myLastName);
// }
// biodata();


//let

// function biodata(){
//     let myFirstName = "Amit";
//     console.log(myFirstName);

//     if(true){  //let used in this block outside block it is not accessible
//         let myLastName = "Abc"
//         console.log("inner " + myLastName);
//         console.log("inner " + myFirstName);
//     }
//     console.log("innerouter " + myLastName); //this is not accessible by let
// }
// biodata();


//CONST

// function biodata(){
//     const myFirstName = "Amit";
//     console.log(myFirstName);

//     if(true){  //const used in this block outside block it is not accessible
//         const myLastName = "Abc"
//         console.log("inner " + myLastName);
//         console.log("inner " + myFirstName);
//     }
//     console.log("innerouter " + myLastName); //this is not accessible by const
// }
// biodata();

//Template Literals

// for(let num = 1; num <= 10; num++){
//     let tableof = 12;
//     // console.log(tableof + "*" + num + "=" + tableof * num);
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }


//Default Parameter

// function mult (a, b=5){
//     return a*b;
// }
// console.log(mult(3));

//Fat Arrow function

const sum = () => `The sum of the two number is ${(a=5) + (b=6)}`
console.log(sum());
