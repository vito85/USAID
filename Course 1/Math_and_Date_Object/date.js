//!========================= Date Object  ==========================

//1.
// let now = new Date();
// console.log(now);

//2.

// const year = 1945,
//      month = 4,
//      day = 24,
//      hours = 2,
//      minutes = 15,
//      seconds = 45;


//       let bd = new Date(year, month, day, hours, minutes, seconds)
//     console.log(bd);

// Get the parts of date

//   bd.getFullYear();
//   bd.getMonth(); // 0 -> january , 11-> Dectember
//   bd.getDate();
//   bd.getDay(); // Week days , 0-> sunday , 6 -> suterday
//  bd.getHours();
//   bd.getMilliseconds();
//  bd.getTime();  // amount of milisecons from 1 january of 1970
// console.log(bd.getTime())

// set Date
  //bd.setFullYear(2007);
// bd.setMonth();
// bd.setDate();
// bd.setHours();
// bd.setMinutes();
// bd.setTime();

  // bd.setHours(5);
 //console.log(bd);

// bd.setDate(54)
// console.log(bd)


//Task: Recive rage of Dates;

// let start = new Date(1983,0,1);
// let end = new Date(1993,0,15);


//    let count = 0;

//  start = Date.parse(start);
//   console.log(start);

//  end = Date.parse(end);
// // console.log(end - start);

// for(let i = start; i <= end ; i = i+ 24*60*60*1000){
//   count++
    
// }
// console.log(count)




//Format a Date object as a string
//  let now = new Date();
// console.log(now)
//  function formatDate(date) {
// const monthNames = [
//       'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//     ];
  
//     let day = date.getDate();
//     let monthIndex = date.getMonth();
//     let year = date.getFullYear();
  
//     return  day + '.' + monthNames[monthIndex] + '.' + year;
//   }
  
//   console.log(formatDate(now)); // Output: 



// function isNahanj(year){
// let start = new Date(year,0,1);
// let end = new Date(year,11,31);
// let countDay = (Date.parse(end) - Date.parse(start))/1000/60/60/24  + 1
// if(countDay === 366){
//   return " Nahanj tari"
// } else {
//   return "Sovorakan tari"
// }

  
// }
//console.log(isNahanj(1998))

// function nahanj(year) {
//   let start = new Date(year,1,1);
// let end = new Date(year,2,1);
// let countDay = (Date.parse(end) - Date.parse(start))/1000/60/60/24 
//  if(countDay === 29){
//   return " Nahanj tari"
//  }
//  return " Sovorakan tari"
// }

// console.log(nahanj(2024))





//!======================== JSON Format ================================
//!=========== JavaScript Object Notation ======================

//Methods
//1. JSON.parse
//2. JSON.stringify


//parse
//Example

//1.
//  let num = `["gurgen",2,3]`
//   console.log(num);
//    let num1 = JSON.parse(num);
//    console.log(num1);
//    console.log(num1[0])


//2.
  // let admin = `{"anun":"Poghos","tariq":"25","pashton":"NetAdmin"}`;
  // console.log(admin);
  // admin = JSON.parse(admin);
  //  console.log(admin);


//STRINGIFY
// // //
 //JSON.stringify({});  // `{}`
 // JSON.stringify(true);  // `true`
//  JSON.stringify(`hello`);  // "`hello`"
 // let test = JSON.stringify({x:15,y:25})// `{"x":15,"y":25}`;
// JSON.stringify([1,2,"admin"]) // `[1,2,"admin"]`
//console.log(typeof test)
 // console.log(JSON.stringify([1,2,"admin"]))
//1. 
// let tvyalner = {
//   "name":"Armen",
//   "age": 25,
//   "position":"admin",
//   "status": true
// }

//   console.log( JSON.stringify(tvyalner))

//2.
// const admin = {
//   anun:"Armen",
//   tariq:25,
//   pashton:"NetAdmin"
// }
// console.log(admin);
// console.log(JSON.stringify(admin,["azganun","tariq","pashton"]))


//3.

// let admin = {
//   anun:"Martin",
//   tariq:24,
//   pashton:"NetAdmin",
//   pordz:{
//     sysAdmin:"3 tari",
//     netAdmin: "5 tari"
//   }
// }

//   console.log(admin);
//   let x = JSON.stringify(admin, " ",3)
//   console.log( x);


// JSON to XML
//https://www.freeformatter.com/json-to-xml-converter.html

