

// let str = "asd1akfd"

// let obj = {}

// for(let i = 0; i < str.length; i++){
//     if(obj[str[i]] === undefined){
//         obj[str[i]] = 1
//     }else {
//         obj[str[i]]++
//     }
// }
// console.log(obj)

// for(let key in obj){
//     if(obj[key] == 1){
//         console.log(key)
//         break
//     }
// }



// 8. Նկարագրել ֆունկցիա, որն արգումենտում ստանում է իրական թվերի զանգված և վերադարձնում է՝
// ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,
// բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ:



// ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,


// function f(arr){
//     let arr1 = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr1.includes(arr[i]) === true){
//             return true
//         }else {
//             arr1.push(arr[i])
//         }
//     }


//   return false
// }

// console.log(f([1,2,3,4,3]))





// function f(arr){
//     let obj = {};
//     for(let i = 0; i < arr.length; i++){
//         if(obj[arr[i]] != undefined){
//             return true
//         }else {
//             obj[arr[i]] = true
//         }
//     }
//     console.log(obj)
//     return false
// }
// console.log(f([3,5,6,7,13]))

// բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ:

// let arr = [3,4,5,6,7,3,5,3,7]
// let obj = {}

// for(let i = 0; i < arr.length; i++){
//     if(obj[arr[i]] === undefined){
//         obj[arr[i]] = 1
//     }else {
//         obj[arr[i]]++
//     }
// }
// console.log(obj)

// for( let key in obj){
//     if(obj[key] === 1){
//         console.log(key)
//     }
// }

// console.log(Object.keys(obj))

// let arr = [2,3,4,5,3,2,12,34]

// function f(arr){
//     let count = 0
// for(let i = 0; i < arr.length; i++){
//     if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
//         count++
//     }
// }
// return count
// }
// console.log(f(arr))


// ֆունկցիա, որը ստուգում է, արդյոք տրված ճանապարհը (path) 
// գոյություն ունի օբյեկտում (object)։ 



// function hasPath(obj, path) {
//     let arr = path.split(".")
    
//     let current = obj;
//     for (let i = 0; i < arr.length; i++) {
//         if (current[arr[i]] === undefined) {
//             return false;
//         }else{
//             current = current[arr[i]]
       
//         }
//     }
//     return true;
// }



// Օրինակ 
// const myObject = {
//     a: {
//         b: {
//             c: 42
//         }
//     }
// };
// let x = myObject.a
// x.b.c = 0
// console.log(myObject)
// console.log(hasPath(myObject, "b.a.c.l"))


// Խնդիր 1: Օբյեկտի հատկությունների ցուցադրում
// Նկարագրություն: Գրել ֆունկցիա, որը տրված օբյեկտի բոլոր հատկությունների անվանումները 
// և արժեքները կցուցադրի console-ում։


// function showProperties(obj) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             console.log(`${key}: ${obj[key]}`);
//         }
//     }
// }

// // Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     profession: "Developer"
// };
// showProperties(person);

// Խնդիր 2: Հատկությունների քանակի հաշվարկ
// Նկարագրություն: Գրել ֆունկցիա, որը կհաշվարկի տրված օբյեկտի հատկությունների քանակը։


// function countProperties(obj) {
//     return Object.keys(obj).length;
// }

// // Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     profession: "Developer"
// };
// console.log(countProperties(person)); // 3



// Խնդիր 3: Հատկության արժեքի փոփոխություն
// Նկարագրություն: Գրել ֆունկցիա, որը կփոխի տրված օբյեկտի տրված հատկության արժեքը։


// function changePropertyValue(obj, property, value) {
//     if (obj.hasOwnProperty(property)) {
//         obj[property] = value;
//     }
// }

// // Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     profession: "Developer"
// };
// changePropertyValue(person, 'age', 31);
// console.log(person.age); // 31


// Խնդիր 4: Օբյեկտի պատճենում
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ, որը պատճեն է տրված օբյեկտի։





// function copyObject(obj) {
//     return { ...obj };
// }



// Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     profession: "Developer"
// };
// const copiedPerson = copyObject(person);
// console.log(copiedPerson); // {name: "Alice", age: 30, profession: "Developer"}


// Խնդիր 5: Նոր հատկության ավելացում
// Նկարագրություն: Գրել ֆունկցիա, որը կավելացնի նոր հատկություն տրված օբյեկտին։


// function addProperty(obj, property, value) {
//     obj[property] = value;
// }

// // Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     profession: "Developer"
// };
// addProperty(person, 'hobby', 'Reading');
// console.log(person.hobby); // Reading


// Խնդիր 6: Օբյեկտների միաձուլում
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ՝ միաձուլելով երկու 
// տրված օբյեկտների հատկությունները։


// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }



// Խնդիր 11: Օբյեկտի արժեքների սորտավորում
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ՝ սորտավորված ըստ արժեքների։


// function sortByValues(obj) {
//     const sortedEntries = Object.entries(obj).sort(([, a], [, b]) => a - b);
//     return Object.fromEntries(sortedEntries);
// }

// Օրինակ 
// const scores = {
//     Alice: 50,
//     Bob: 30,
//     Charlie: 40
// };
// console.log(sortByValues(scores)); // {Bob: 30, Charlie: 40, Alice: 50}



// Խնդիր 12: Հատկության արժեքների գումարում
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի տրված օբյեկտի բոլոր թվային արժեքների գումարը։


// function sumValues(obj) {
//     return Object.values(obj).reduce((sum, value) => sum + (typeof value === 'number' ? value : 0), 0);
// }

// Օրինակ 
// const data = {
//     a: 10,
//     b: 20,
//     c: "30",
//     d: 40
// };
// console.log(sumValues(data)); // 70


// Խնդիր 13: Օբյեկտի շտամպ
// Նկարագրություն: Գրել ֆունկցիա, որը կստեղծի նոր օբյեկտ՝ ավելացնելով timestamp 
// հատկությունը տրված օբյեկտին։


// function addTimestamp(obj) {
//     return { ...obj, timestamp: new Date().toISOString() };
// }

// Օրինակ 
// const event = {
//     type: "click",
//     x: 100,
//     y: 200
// };
// console.log(addTimestamp(event));



// Խնդիր 14: Գլխատառերով գրառումներ
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ՝ 
// բոլոր հատկությունները վերածելով գլխատառերի։


// function toUpperCaseKeys(obj) {
//     const newObj = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key.toUpperCase()] = obj[key];
//         }
//     }
//     return newObj;
// }

// Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     profession: "Developer"
// };
// console.log(toUpperCaseKeys(person)); // {NAME: "Alice", AGE: 30, PROFESSION: "Developer"}


// Խնդիր 15: Նիշերով փոխարինում
// Նկարագրություն: Գրել ֆունկցիա, որը կփոխարինի տրված օբյեկտի բոլոր 
// հատկությունների անվանումներում տրված նիշերը նոր նիշով։


// function replaceCharInKeys(obj, charToReplace, newChar) {
//     const newObj = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const newKey = key.split(charToReplace).join(newChar);
//             newObj[newKey] = obj[key];
//         }
//     }
//     return newObj;
// }

// // Օրինակ
// const person = {
//     "first_name": "Alice",
//     "last_name": "Johnson",
//     "age": 30
// };
// console.log(replaceCharInKeys(person, "_", "")); // {firstname: "Alice", lastname: "Johnson", age: 30}

// Խնդիր 16: Օբյեկտի արժեքների ֆիլտրում
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ՝ 
// թողնելով միայն այն հատկությունները, որոնց արժեքը համապատասխանում է որոշակի պայմանին։


// function filterValues(obj, callback) {
//     const newObj = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key) && callback(obj[key])) {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

// Օրինակ 
// const scores = {
//     Alice: 50,
//     Bob: 30,
//     Charlie: 40
// };
// console.log(filterValues(scores, score => score > 30)); // {Alice: 50, Charlie: 40}



// Խնդիր 17: Օբյեկտի արժեքների կրկնակիացումը
// Նկարագրություն: Գրել ֆունկցիա, որը կկրկնակի տրված օբյեկտի բոլոր թվային արժեքները։


// function doubleValues(obj) {
//     const newObj = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key] = typeof obj[key] === 'number' ? obj[key] * 2 : obj[key];
//         }
//     }
//     return newObj;
// }

// Օրինակ 
// const data = {
//     a: 10,
//     b: 20,
//     c: "30",
//     d: 40
// };
// console.log(doubleValues(data)); // {a: 20, b: 40, c: "30", d: 80}


// Խնդիր 18: Օբյեկտի կլոնավորում
// Նկարագրություն: Գրել ֆունկցիա, որը կկլոնավորի տրված օբյեկտը, 
// այնպես որ փոփոխությունները կլոնավորված օբյեկտում չազդեն սկզբնական օբյեկտի վրա։


// function deepClone(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }

// Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     address: {
//         city: "New York",
//         zipcode: 10001
//     }
// };
// const clonedPerson = deepClone(person);
// clonedPerson.address.city = "Los Angeles";
// console.log(person.address.city); // New York
// console.log(clonedPerson.address.city); // Los Angeles



// Խնդիր 19: Մեկ հատկանիշի ընտրություն
// Նկարագրություն: Գրել ֆունկցիա, որը տրված օբյեկտից կվերադարձնի 
// միայն նշված հատկության արժեքը, եթե այդ հատկությունը կա օբյեկտում։


// function pickProperty(obj, property) {
//     if (obj.hasOwnProperty(property)) {
//         return { [property]: obj[property] };
//     }
//     return {};
// }

// // Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     profession: "Developer"
// };
// console.log(pickProperty(person, 'age')); // {age: 30}
// console.log(pickProperty(person, 'hobby')); // {}


// Խնդիր 20: Հատկությունների համախմբում
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ՝ 
// համախմբելով երկու տրված օբյեկտների բոլոր հատկությունները։ 
// Եթե երկու օբյեկտները ունեն նույն հատկությունը, այն պետք է ունենա երկու արժեքների գումարը։


// function mergeAndSumObjects(obj1, obj2) {
//     const newObj = { ...obj1 };
//     for (let key in obj2) {
//         if (obj2.hasOwnProperty(key)) {
//             newObj[key] = newObj.hasOwnProperty(key) ? newObj[key] + obj2[key] : obj2[key];
//         }
//     }
//     return newObj;
// }

// Օրինակ 
// const obj1 = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// const obj2 = {
//     b: 10,
//     c: 20,
//     d: 40
// };
// console.log(mergeAndSumObjects(obj1, obj2)); // {a: 10, b: 30, c: 50, d: 40}






// Խնդիր 21: Օբյեկտի հատկությունների վերածում զանգվածի
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի տրված օբյեկտի բոլոր 
// հատկությունների անվանումների զանգվածը:


// function getObjectKeys(obj) {
//     return Object.keys(obj);
// }

// // Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     profession: "Developer"
// };
// console.log(getObjectKeys(person)); // ["name", "age", "profession"]


// Խնդիր 22: Օբյեկտի արժեքների վերածում զանգվածի
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի տրված օբյեկտի բոլոր արժեքների զանգվածը:


// function getObjectValues(obj) {
//     return Object.values(obj);
// }

// // Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     profession: "Developer"
// };
// console.log(getObjectValues(person)); // ["Alice", 30, "Developer"]


// Խնդիր 23: Օբյեկտի զույգերի փոխանակում
// Նկարագրություն: Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ՝ 
// փոխելով բոլոր զույգերի տեղերը (հատկություն → արժեք փոխել արժեք → հատկություն):


// function swapObjectEntries(obj) {
//     const newObj = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[obj[key]] = key;
//         }
//     }
//     return newObj;
// }

// // Օրինակ 
// const person = {
//     name: "Alice",
//     age: 30,
//     profession: "Developer"
// };
// console.log(swapObjectEntries(person)); // {Alice: "name", 30: "age", Developer: "profession"}


// Խնդիր 24: Գումարման գործողություններ
// Նկարագրություն: Գրել ֆունկցիա, որը կավելացնի նոր հատկություն տրված օբյեկտին՝ 
// նույն արժեքով բոլոր հին հատկությունների գումարը:


// function addSumProperty(obj) {
//     const sum = Object.values(obj).reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
//     obj.sum = sum;
//     return obj;
// }

// // Օրինակ 
// const data = {
//     a: 10,
//     b: 20,
//     c: "30",
//     d: 40
// };
// console.log(addSumProperty(data)); // {a: 10, b: 20, c: "30", d: 40, sum: 70}



// Խնդիր 25: Նույնատիպ հատկություններ
// Նկարագրություն: Գրել ֆունկցիա, որը կստուգի՝ 
// արդյոք երկու օբյեկտները ունեն նույն հատկությունները:


// function haveSameProperties(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) return false;
//     return keys1.every(key => keys2.includes(key));
// }

// // Օրինակ 
// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 4, b: 5, c: 6 };
// const obj3 = { a: 7, b: 8 };
// console.log(haveSameProperties(obj1, obj2)); // true
// console.log(haveSameProperties(obj1, obj3)); // false


// Խնդիր 26: Արդյոք օբյեկտն դատարկ է
// Նկարագրություն: Գրել ֆունկցիա, որը կստուգի՝ արդյոք տրված օբյեկտը դատարկ է:


// function isEmptyObject(obj) {
//     return Object.keys(obj).length === 0;
// }

// // Օրինակ 
// const emptyObj = {};
// const nonEmptyObj = { a: 1 };

// console.log(isEmptyObject(emptyObj)); // true
// console.log(isEmptyObject(nonEmptyObj)); // false





// Խնդիր 31: Օբյեկտի հատկությունների արժեքի բազմապատկում
// Նկարագրություն: Գրել ֆունկցիա, որը բազմապատկում է տրված 
// օբյեկտի բոլոր թվային արժեքները որոշակի թվով:


// function multiplyNumericValues(obj, multiplier) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= multiplier;
//         }
//     }
//     return obj;
// }

// Օրինակ 
// const data = {
//     a: 10,
//     b: "20",
//     c: 30,
//     d: "hello"
// };
// console.log(multiplyNumericValues(data, 2)); // {a: 20, b: "20", c: 60, d: "hello"}


// Խնդիր 32: Օբյեկտի հատկությունների տիպի ստուգում
// Նկարագրություն: Գրել ֆունկցիա, որը ստուգում է տրված 
// օբյեկտի բոլոր հատկությունները և վերադարձնում է true, 
// եթե բոլոր հատկությունները ունեն նույն տիպը:


// function allPropertiesSameType(obj) {
//     const values = Object.values(obj);
//     const firstType = typeof values[0];
//     return values.every(value => typeof value === firstType);
// }

// // Օրինակ 
// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 1, b: "2", c: 3 };
// console.log(allPropertiesSameType(obj1)); // true
// console.log(allPropertiesSameType(obj2)); // false



// Խնդիր 33: Օբյեկտի հատկությունների ջնջում ըստ արժեքի
// Նկարագրություն: Գրել ֆունկցիա, որը ջնջում է տրված արժեքով բոլոր հատկությունները օբյեկտից:


// function deletePropertiesByValue(obj, valueToDelete) {
//     for (let key in obj) {
//         if (obj[key] === valueToDelete) {
//             delete obj[key];
//         }
//     }
//     return obj;
// }

// Օրինակ 
// const data = {
//     a: 10,
//     b: 20,
//     c: 10,
//     d: "hello"
// };
// console.log(deletePropertiesByValue(data, 10)); // {b: 20, d: "hello"}



// Խնդիր 34: Օբյեկտի հատկությունների վերնորոգում ըստ ֆունկցիայի
// Նկարագրություն: Գրել ֆունկցիա, որը վերնորոգում է տրված օբյեկտի բոլոր հատկությունները՝
//  կիրառելով տրված ֆունկցիան յուրաքանչյուր արժեքի համար:


// function mapObjectValues(obj, mapFunction) {
//     const newObj = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key] = mapFunction(obj[key]);
//         }
//     }
//     return newObj;
// }

// // Օրինակ 
// const data = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// const squareFunction = x => x * x;
// console.log(mapObjectValues(data, squareFunction)); // {a: 1, b: