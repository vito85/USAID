//Built in OBJECT MATH
//rounding functions

//1.
/*
let z = 18.3;
let z1 = Math.floor(z);
console.log(z1);
*/

//2.
/*
let y = 14.6;
let y1 = Math.ceil(y);
console.log(y1);
*/

//3.
/*
let x = 16.515;
let x1 = Math.round(x);
console.log(x1);
*/

//Function Random

//task randomly output true or false

//1. we can write function magic, but it always return the same answer
// 
//
/*
let one = Math.random();
let two = Math.random();
let three = Math.random();

console.log(one, two, three); //every time result will be different
*/

//3.
/*
function magic(question) {
    return Math.random() > 0.5;
}
const question = 'Can i help you ?';
let result1 = magic(question) ? 'Yes': 'No';
let result2 = magic(question) ? 'Yes': 'No';

console.log(`${question} ${result1}`);
console.log(`${question} ${result2}`);
*/

/*
// 4. In actual we need, that function will return 
//some randomly numbers from some range

function random(min, max) {
    const diff = max - min + 1;
    return Math.floor(Math.random()*diff)+min;
}
*/

/*
const numbers = [];
for (let i = 0; i < 4; i++) {
    numbers.push(random(-1,1));
}
console.log(numbers);

// if we need to choose some element from collection,
function extractRandom(list) {
    const index = random(0, list.length-1);
    return list.splice(index,1).shift();
}
const names = ['Anahit', 'Marine', 'Poghos', 'Armen', 'Karen', 'Maria'];
console.log(extractRandom(names));
console.log(extractRandom(names));
console.log(extractRandom(names));
console.log(names);
*/

//5. hightes value of range
/*
const height =[];
for(let i = 0; i < 30; i++){
    height.push(random(100,200));
}
let max = 0;
for(let i = 0; i < height.length; ++i){
    if(height[i]>max) {
        max = height[i];
    }
}
console.log(`Highest value is ${max}`);
*/

// 6. MAX and MIN functions
/*
let max = Math.max(12,56,89,15,200,45,3);
let min = Math.min(12,56,89,15,200,45,3);
console.log(`Maximum value is ${max}`);
console.log(`Minimum value is ${min}`);
*/

// 7.  Maximum in array
/*
const nums = [15,65,53,54,28];
let max = Math.max(nums[0],nums[1],nums[2],nums[3],nums[4]);
console.log(max);
*/

// Variables and destructurization
/*
const nums = [54,98,65];
let[one, two,three] = nums;
let max = Math.max(one, two, three );
console.log(max);

//but we don't now how many elements in array, it can be 1000 element
*/

//The best solution is 
// In ES6
/*
const nums = [15,65,53,54,28];
let max = Math.max(...nums);
console.log(max);
//In ES5
var nums1 = [15,65,153,54,28];
var max1 = Math.max.apply(null, nums1);
console.log(max1);
*/

//8.The hihgest value in ES6 we can find
/*
const height =[];
for(let i = 0; i < 30; i++){
    height.push(random(100,200));
}
let max = Math.max(...height);
console.log(`HIghest value in range is ${max}`);
*/

//9. Power and Sqrt functions
/*
console.log(Math.pow(3,4));// 81;
console.log(Math.sqrt(25)); //5;
console.log(Math.cbrt(27)); //3

// In ES6 pow is **
console.log(3**5);
*/

// 10. Const
/*
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
*/

/*
// Example Circle Area
function getCirclearea(radius){
    return Math.round(Math.PI * Math.pow(radius,2))
}
let s = getCirclearea(15);
console.log(`The area of circle is  ${s}`);
*/

// Other functions in Math

// Math.sin(x); Math.cos(x); Math.tan(x);
// Math.asin(x), Math.acos(x), Math.atan(x);
// Math.sinh(x), Math.cosh(x), Math.tanh(x)

// Math.log(x), Math.log2(x), Math.log10(x)

// Task1. Fill array with random elements

// const getRandArr = (len, min, max) => new Array(len).fill(0).map(el => Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(getRandArr(3, -3, 0));

// Task 2. Recieve number PI ()
/*
console.log(Math.PI)

let PI = 0;
let a = 1;
let b = 3;

function myPI(){
    PI += (4/a) - (4/b);
    a = a+4;
    b = b + 4;
    // 1.
    console.log(PI);
    // 2.
    setTimeout(myPI(),200)
}

myPI();
console.log(Math.PI)
*/


// Object Date

// 1.
// let now = new Date();
// console.log(now);

// 2.
// const year = 1984;
//         month = 2;
//         day = 21;
//         hours = 2;
//         minutes = 15;
//         seconds = 45;
//         miliseconds = 2;
// let bd = new Date(year, month, day, hours, minutes, miliseconds );
// console.log(bd);

        /*
        // Get The parts of date
        getFullYear() - //4 digits of year
        getMonth() // 0 -January, 11 -Dectember
        getDate()  // 1 - 31 numbers
        getDay()  // Week days, 0-Sunday, 6 -Suterday
        getHours() //0 - 23 numbers
        getMinutes() // 
        getSeconds() //
        getMiliseconds()
        getTime()// amount of miliseconds from 1st january of 1970 year
        */
// let weekend = bd.getDay();
// console.log(weekend);
        /*
        setFullYear() - //4 digits of year
        setMonth() // 0 -January, 11 -Dectember
        setDate()  // 1 - 31 numbers
        setDay()  // Week days, 0-Sunday, 6 -Suterday
        setHours() //0 - 23 numbers
        setMinutes() // 
        setSeconds() //
        setMiliseconds()
        setTime()// amount o
        */

// bd.setHours(22);
// console.log(bd);

// bd.setDate(54);
// console.log(bd);

// Task 1. Recive rage of dates.
/*
let start = new Date(2019,2,21);
let end = new Date(2019,2,25);
// 
start = Date.parse(start);
end = Date.parse(end);
for(let i = start; i< end; i=i+24*60*60*1000){
    console.log(new Date(i).toISOString().substr(0,10));
}
*/



// JSON

//JSON Format
//Data in the JSON format (RFC 4627) represent:

// * JavaScript-objects { ... } or
// * Arrays  [ ... ] or
// * Values of one of types:
    // ** string in " quotes,
    // ** numbers,
    // ** boolean values true/false,
    // ** null.

// Almost all programming languages have 
//libraries for transformation of objects to the JSON format.

// *** The main methods for work with JSON in JavaScript are:
    // 1. JSON.parse - reads objects from a line in the JSON format.
    // 2. JSON.stringify- turns objects into a line in the JSON format, it is used when it is
        // necessary to transfer data over network from JavaScript.



// PARSE
//Examples

// 1.
// var num = "[1,2,3]"
// num = JSON.parse(num);
// console.log(num);
// console.log(num[2]);

// 2.

// var admin = '{ "anun": "Poghos", "tariq": 25, "pashton": "NetAdmin"}';
// admin = JSON.parse(admin);
// console.log(admin);
// console.log(admin.anun);


// 3. 
//  var x = JSON.parse('{\
//     "author": {\
//         "firstName": "Hovhanes", \
//         "lastName": "Tumanyan",\
//         "secondName": "Tadevos"\
//     },\
//     "name":"Karen",\
//     "position": "admin",\
//      "status": false\
// }');
// console.log(x);



// STRINGIFY -- JSON.stringify(value, replacer, space)
//coverting js object to valid JSON object

//Examples
// 1. 
// JSON.stringify({}); // '{}'
// JSON.stringify(true); // 'true'
// JSON.stringify('hello');// "'hello'"
// JSON.stringify({x: 15, y : 25}); // '{"x":15, "y": 25}'
// JSON.stringify([1,2,"admin"]); // '[1,2, "admin"]'


// 2.
// var tvyalner = {
//     'name': 'Armen',
//     'age': 25,
//     'position': 'admin',
//     'status': true,
// }

//  console.log( JSON.stringify(tvyalner) );
// --- {"name":"Armen","age":25,"position":"admin","status":true}


// 2.
// var admin = {
//   anun: "Armen",
//   tariq: 30,
//   pashton: "NetAdmin"
// };

// console.log( JSON.stringify(admin, ["anun", "tariq", "pashton"]) );

//--- {"anun":"Armen","tariq":30,"pashton":"NetAdmin"}

// In the JSON.stringify(value, replacer, space) method
// there is a  third parameter: space.

// 3. 

// var admin = {
//   anun: "Armen",
//   tariq: 30,
//   pashton: "NetAdmin",
//   pordz : {
//       sysadmin: "3 tari",
//       netAdmin: "5 tari"
//   }
// };

// console.log( JSON.stringify(admin, " ", 0));


