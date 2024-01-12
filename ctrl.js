//CONTROL STATEMENTS

// var tomr = "rain";

// if(tomr == "rain"){
//     console.log("take raincoat");
// }
// else{
//     console.log("No need to take raincoat");
// }


// var tomr = "sunny";

// if(tomr == "rain"){
//     console.log("take raincoat");
// }
// else{
//     console.log("No need to take raincoat");
// }



var year = "2020";
if(year % 4 === 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("The year " + year + " is a leap year");
        }else{
            console.log("The year " + year + " is not a leap year");
        }
    }else{
        console.log("The year " + year + " is not a leap year");
    }
}else{
    console.log("The year " + year + " is not a leap year");
}