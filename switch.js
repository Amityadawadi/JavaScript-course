// var area = "square";
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//     console.log("The area of circle is : " + PI*r**r);
// }else if(area == "triangle"){
//     console.log("The area of triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//     console.log("The area of rectangle is : " + (l*b));
// }else{
//     console.log("Please enter valid data");
// }


var area = "square";
var PI = 3.142, l=5, b=4, r=3;

switch(area){
    case 'circle':
        console.log("The area of circle is : " + PI*r**r);
    case 'triangle':
        console.log("The area of triangle is : " + (l*b)/2);
    case 'rectangle':
        console.log("The area of rectangle is : " + (l*b));
    default:
    console.log("Please enter valid data");
}