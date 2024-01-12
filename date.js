//There are 4 ways to create a new date objects
// 1) new Date()
// 2) new Date(year, month, day, hours, minutes, seconds, miliseconds) //it takes 7 arguments.
// 3) new Date(miliseconds) //we cannot avoid month section
// 4) new Date(date string)

// new Date()

// let currDate = new Date();
// console.log(currDate); // O/P: 2023-12-18T04:23:26.580Z
// console.log(new Date());  // O/P: 2023-12-18T05:43:11.865Z
// console.log(new Date().toLocaleString());  // O/P:18/12/2023, 11:13:11 am
// console.log(new Date().toString());  // O/P: Mon Dec 18 2023 11:13:11 GMT+0530 (India Standard Time)

// console.log(Date.now()); // O/P:1702878642545 returns the miliseconds

//JavaScript counts months from 0 to 11 i.e january=0, and december=11.

// var d = new Date(2023, 11, 18, 11, 30, 33, 0);
// console.log(d.toLocaleString()); // 18/12/2023, 11:30:33 am

//how to get the individual date

// const curDate = new Date();
// console.log(curDate.toLocaleString()); //18/12/2023, 11:35:16 am
// console.log(curDate.getFullYear()); //2023
// console.log(curDate.getMonth()); //11
// console.log(curDate.getDate()); //18
// console.log(curDate.getDay()); //1






//TIME METHOD

// const curTime = new Date();
// console.log(curTime.getTime()); // 1702883402029
// console.log(curTime.getHours()); //12
// console.log(curTime.getMinutes()); // 40
// console.log(curTime.getSeconds()); // 2
// console.log(curTime.getMilliseconds()); // 29


//set method

// let curTime = new Date();
// console.log(curTime.setHours(5)); // 1702858446959
// console.log(curTime.setMinutes(5)); // 1702858446959
// console.log(curTime.setSeconds(5)); // 1702858446959
// console.log(curTime.setMilliseconds(5)); // 1702858446959

(function(){
    setInterval(()=>{
        console.log(new Date().toLocaleTimeString());
    },1000)
})();
