//fibonacci number

// let fib1 = 0;
// let fib2 = 1;
// let nextFib;

// for(let i = 0; i <= 10; i++){
    
//     nextFib = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = nextFib;
//     console.log(fib1)
// }

// function fibonacci (n) {
//     let fib1 = 0, fib2 = 1, nextFib = 0;
    
//     for(let i = 2; i < n; i++) {
//       nextFib = fib1 + fib2;
//       fib1 = fib2;
//       fib2 = nextFib;
//     }
    
//     return nextFib;
//   };
// console.log("start")
// console.log(fibonacci(60))



// function fibonacci(n) {
//     if (n <= 1) {
//       return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log("test start");
// console.log(fibonacci(43));





//!memoize fibonacci number
// let count = 0;
// const memoFib = memoize(function(n){
//     count++
//     if(n < 2) return n;
//     return memoFib(n - 1) + memoFib(n - 2)
// });

// function memoize(fn){
//     const cache = {};
//     return (n)=>{
//         if(cache[n] === undefined){
//             cache[n] = fn(n)
//         }
//         return cache[n];
//     }
// }

// console.log(memoFib(70))
// console.log(count)



// let count = 0
// function fib(n){
//     count++
//     if(n < 2) return n
//     return fib(n-1) + fib(n-2)
// }
// console.log(fib(20))
// console.log(count)




//Plindrom function

// function isPolindrom(name){
//     let arr = name.toLocaleLowerCase().split("");
//     let arr1 = arr.reverse().toString()
//     if(arr.reverse().toString()=== arr1)return true

//     return false
// }
// console.log(isPolindrom(""))



// 6. Տրված են a,b,c բնական թվերը, որոնք եռանկյան կողմերի 
// երկարություններն են: 
// Արտածել YES, եթե a,b,c կողմերով եռանկյունը
// ա) հավասարակողմ է,
// բ) հավասարասրուն է,
//  գ) ուղղանկյուն է:
// Հակառակ դեպքում արտածել NO:



// 7:43
// 7. Տրված են երեք ամբողջ թվեր: Արտածել
// ա) դրանցից փոքրագույնի արժեքը,
//  բ) դրանցից մեծագույնի արժեքը
// գ) մեծությամբ երկրորդ թվի արժեքը,



// function min(a,b,c){
// let min = a

// if(b < min){
//     min = b
// }

// if(c < min){
//     min = c
// }
// return min
// }


// Արտածել տրված n թիվը չգերազանցող բոլոր այն բնական թվերը,
//  որոնք առանց մնացորդի
//  բաժանվում են իրենց թվանշանների գումարի վրա:

// function sumDigit(num){
//     let sum = 0;

//     while(num > 0){
//         let c = num % 10
//         sum = sum + c;
//         num = (num - c)/10

//     }
//     return sum
// }

// let n = 100;

// for(let index = 1; index <= n ; index++){
//     if(index % sumDigit(index) === 0){
//         console.log(index)
//     }
// }


// 10, Տրված են A և B(A<B) ամբողջ թվերը:
// ա) Արտածել [A,B] հատվածին պատկանող 3-ին պատիկ առաջին թիվը:
// բ) Արտածել [A,B] հատվածին պատկանող բոլոր ամբողջ թվերի գումարը:
//  գ) Աճման կարգով արտածել [A,B] հատվածին պատկանող ամբողջ թվերը և դրանց քանակը:


// let A = 11
// let B = 20

// let count = 0

// for(let i = A; i <= B; i++){
//     console.log(i)
//     count++
// }
// console.log("count is" , count)

// 11:15
// 11. Արտածել տրված բնական թվի
// ա) թվանշանների գումարը, քանակը, արտադրյալը,
// բ) կենտ թվանշաններից ամենափոքրը,
// գ) 4-ից մեծ կենտ թվանշանների գումարը,
// դ) 7-ից փոքր զույգ թվանշանների արտադրյալը

// let n = 1345;
// let sum = 0;
// let count = 0;
// let product = 1;

// while(n > 0){
//     let c = n % 10;
//     sum = sum + c;
//     count++;
//     product = product * c;
//     n = (n - c)/10;
// }
// console.log(`sum is ${sum}: count is ${count}: prod is ${product}`)


// function isSimple(n){
//     for(let i = 2; i < n/2; i++){
//         if(n % i === 0){
//             return false
//         }
//     }

//     return true
// }

// for(let i = 1900; i <= 2050; i++){
//     if(isSimple(i) === true){
//         console.log(i)
//     }
// }

// function katarial(num){
//     let sum = 0;
//     for(let i = 1; i <= num/2; i++){
//         if(num % i === 0){
//             sum = sum + i
//         }
//     }

//     if(sum === num){
//         return true
//     }else {
//         return false
//     }
// }

// for(let i = 2; i < 100000; i++){
//     if(katarial(i) ){
//         console.log(i)
//     }
// }

// բ) կենտ թվանշաններից ամենափոքրը,

// let n = 236510;
// let min = Infinity;
// while(n > 0){

//     let c = n % 10;
//     if(c & 1 === 1){
//         if(c < min){
//             min = c;
//         }
//     }
//     n = (n - c)/10
// }

// if(min === Infinity){
//     console.log('չկա կենտ թիվ')
// }else {
//     console.log(min)
// }


// 12. Տրված է բնական թիվ: Արտածել YES, եթե
// ա) թվի թվանշանների մեջ կա 3 թվանշան,
// բ) թվի թվանշանների մեջ չկա 5 թվանշան,
// գ) թվի թվանշանները աճման կարգով են դասավորված,
// դ) թվի թվանշանները նվազման կարգով չեն դասավորված,
// ե) թվի թվանշանների գումարը մեծ է քսանից,
// զ) թվի թվանշանների արտադրյալը փոքր է երեսունից:
// Հակառակ դեպքում արտածել NO:




// function is3(n){
//     while(n > 0){
//         let c = n % 10;
//         if(c === 3){
//          return "yes"
//         }
//         n = (n - c)/10;
//     }
//     return "no"
// }
// console.log(is3(12222220))


// գ) թվի թվանշանները աճման կարգով են դասավորված,

// function f(n){
//     let c1 = null;
//     let c2 = null;
//     while(n > 0){
//          c1 = n % 10;
//         n = (n - c1) /10
//          c2 = n % 10; 
//         if(c1 <= c2){
//             return "no"
//         }
//     }
//     return "yes"
// }



// դ) թվի թվանշանները նվազման կարգով չեն դասավորված,


// function f(n){
//     let c1 = null;
//     while(n > 0){
//         let x = n % 10;
//         if(x <= c1){
//             return 'Yes'
//         }
//         c1 = x;
//         n = (n - x)/10;
//     }
//     return 'No'
// }


// ե) թվի թվանշանների գումարը մեծ է քսանից,

// function f(n){
//     let sum = 0;
//     while(n > 0){
//         sum += n % 10;
//         n = (n - n % 10)/10;
//     }
//     if(sum > 20){
//         return "yes"
//     }
//     return "no"
// }

// console.log(f(555))