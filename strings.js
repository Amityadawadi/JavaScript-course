// let myName = "Amit Yadawadi";
// let myChannelName = "Amit Y";
// let ytName = "Amit technical";
// console.log(myName);
// console.log(ytName);

//length

// let myName = "Amit Yadawadi";
// console.log(myName.length);

//escape charecter

// let anySentence = "we are the so-called \"vikings\" from the north";
// console.log(anySentence);

//indexof method

// const myBioData = "i am Amit";
// console.log(myBioData.indexOf("amit")); //o/p: -1

// const myBioData = "i am Amit";
// console.log(myBioData.indexOf("am")); //o/p: 2


//lastIndexOf method

// const myBioData = "I am the thapa Technical";
// console.log(myBioData.lastIndexOf("t", 6));

//search() method

// const myBioData = "I am thapa technical";
// let sData = myBioData.search("thapa");
// console.log(sData);

//slice() method

// var str = "Apple, Banana, Kiwi";
// let res = str.slice(0,4);
// console.log(res); // op: Appl

// var str = "Apple, Banana, Kiwi";
// let res = str.slice(7, -2);
// console.log(res);   // o/p: Banana, Ki


//substring() method

// var str = "Apple, Banana, Kiwi";
// let res = str.substring(0,4);
// console.log(res); // o/p: Appl

// var str = "Apple, Banana, Kiwi";
// let res = str.substring(7, -2);
// console.log(res); // o/p: Apple, because its not take negative indexes


//substr() method

// var str = "Apple, Banana, Kiwi";
// let res = str.substr(-4);
// console.log(res);  // o/p: Kiwi

// var str = "Apple, Banana, Kiwi";
// let res = str.substr(-10, 8); //it gives first parameter is index and second parameter is length.
// console.log(res);  // o/p: nana, Ki


//replace() method

// let myBioData = "I am vinod bahadur thapa vinod";
// let replaceData = myBioData.replace("vinod", "VINOD");
// console.log(replaceData);  // O/P: I am VINOD bahadur thapa vinod


//Extracting string charecters

//charAt(position)

// let str = "HELLO WORLD";
// console.log(str.charAt(9)); // O/P: L

//charCode(position) = it will give ASCII code of string

// let str = "HELLO WORLD";
// let lastChar = str.length -1;
// console.log(str.charCodeAt(lastChar)); // O/P: here -1 = D that is ASCII code is 68

//toUpperCase and toLowerCase

// let myName = "vinod thapa";
// console.log(myName.toLocaleUpperCase());//VINOD THAPA
// console.log(myName.toLocaleLowerCase());//vinod thapa

//concat() method

// let fName = "vinod";
// let lName = "thapa";

// console.log(fName + lName); //vinodthapa
// console.log(fName.concat(lName)); //vinodthapa
// console.log(fName.concat(" " + lName)); //vinod thapa


//trim() method removes white spaces from both sides not inside string

// var str = "         Hello     World          ";
// console.log(str.trim()); // O/P: Hello     World

//split() method used to convert string to an array

var txt = "a,b,c,d,e";
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("|"));
