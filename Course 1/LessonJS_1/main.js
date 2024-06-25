
// let x = 9;
// var y = 5;
// const z = 7;
// z = 1
// console.log(z)
// x = true



// let result =  x * y; 
// console.log(x + y)

// let x = 10;
// x = x + 1
// ++x
// console.log(++x)
// x = x -1;
// --x


//  console.log(result); // 15

// x = 19;
// console.log(x + z)
// z = 0
// console.log(y + z) 

// x = 10;

// let z = 2;
// let x = 20;
// let y = "20";
// console.log(x === y)
// let result = x*(y + z) - z*(x + 10)
// console.log(result)

// let x = "barev"
// let y = "Barev"
// let z = x * 5
// let k = y * 5
// console.log(z == k)






// let x = 0;
// let y = null;
// const z = "Alen";
// var d = NaN;
// let e = "9"
// let f = false;

// console.log(!!((x && f || y && z) || ((d || f && z) || x && e)))

//         console.log(e && z && d && f)

//1. !
//2. && 
//3. ||
// 0 false 
// ""
//undefined
//null
//NaN
//false








// x = x - 1 ; // x-- 
// x--
// x++
// x = x + 1
// console.log(x)
// ++x

// console.log(x);



// let x = null;
// console.log(typeof x)

// let str = 20
// console.log("" * 20)

// let x = 0
// if(x % 2 === 0){
//     console.log("zuyg e ")
// }else {
//     console.log("kent")
// }


//! Պայմանի օպերատոր if / else ;

// let x = 0;
// let y = 6;
// if(x + 1 >= y){
//     console.log("yes");
// }else if( 7 > 6) {
//     console.log("no");
// }





// if(7 > 40 || 10 > 20 || 5 > 5) {
//     console.log("barev");
//     console.log("Armen");
// }
//  else if(!4 == false) {
//     console.log("Barev Gagik");
// }else {
//     console.log("gurgen")
// }



// ete < 18 apa anchapahas
//ete > 18 ic ev < 65 ashxatox
//ete > 65 toshakaru









// let age = 20;

// if(age < 0){
//     console.log("chi kareli")
// }

// else if(age < 18){
//     console.log("anchapahas")
// } else if(age >= 18 && age < 65){
//     console.log("ashxatox")
// } else if(age >= 65){
//     console.log("toshakaru")
// }





// var age = 62 ; 

// if(age < 18){
//     console.log("anchapahas");
// }else if(age >=18 && age < 63){
//     console.log("Ashxatox")
// }else {
//     console.log("toshakaru")
// }




// let age = 4;

// if(age == 4) {
//     console.log("my age is " + age)
// }
//  else {
//     console.log("shat Poqr")
//  }



// var book = "Math";

// if(book == "Economics"){
//     console.log("Economics book")
// } else if(book == "Philosophy"){
//     console.log("Philosophy book")
// }
//  else if(book === "math") {
//     console.log("Math book")
// } 
// else{
//     console.log("Unknown Book")
// }


//  var x = "";
// if(x){
//     console.log("YES")
// }
// else {
//     console.log("NO")
// }

//    (x > 10) ? console.log("Yes") : console.log("NO");

//ternary operator

// var x;






//!Loop while, for do while

//  var x = 0 ; 

// while(x <= 100 ){
//     console.log( x);
//     x++  // x = x + 1 
// }



    //   console.log("Hello")



// let x = 100;
// do {
//     console.log("barev")
//     x = x+1 // x++
// } while (x <= 10);






// for(var i = 0 ; i < 10 ; i++){
//     console.log(i)
// }





//? Գտնել 1-100 գումարը ։ 






// for(let i = 1; i <= 100; i++){
//     sum = sum + i;
// }
// console.log(sum)









//? Ցիկլի օգնությամբ հաշվել 2-ի 10 աստիճանը ։ 






//let res = 1; // 8

// for(let i = 1 ; i <= 10; i++){
//     res = res * 2 // res *= 2
// }

// res = res * 2

// res = res * 2

// res = res * 2

//  console.log(res);





// let sum = 1 ; 
// for(let i = 1 ; i <=10;i++){
//     sum  *= 2 // sum = sum * 2 
// }
// console.log(sum)


// Հետպայմանով ցիկլ


// var count = 0;
// do {
//     console.log("Current count is " + count);
//     count++ //count = count + 1 
// } while (count < 5);



// for ցիկլ ; 


// for(var i = 1 ; i <= 5 ; i++){
//     console.log(i)
// }

// console.log(i)




//! if in for && break and continue







// for(let i = 0; i <= 16; i++){
//     if(i == 15 || i == 4 || i == 6){
//         console.log("hello")
//         break
//     } 
//     console.log(i)
    
// }




//? Դուրս բերել 1-30 միայն զույգ թվերը։







// for(let i = 1 ; i <= 30; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }




//? Խնդիր

// var age;
// age < 18 -> anchapahas
//  age >= 18 < 63 -> ashxatox
// age > 63 -> toshakaru



//break , continue 







//let x = 50;

// for(var i = 0; i <=100 ; i++) {
//     if(i == 5 || i == 8 || i == 50 || i== 100) {
//         console.log(i)
//     }
//    //let y = x + 10
    
//     //console.log(y)
// }





//   var k = "";

// for(var i = 0; i <= 10 ; i++){
//     if(i == 9 || i == 6 || i == 5 ){
//         continue;
       
//     }
//     k = k + "\n number is " + i;  
// }

// console.log(k)



//?  Ցիկլի միջոցով հաշվել 1-1000 թվերի շարքում բոլոր այն թվերի ՔԱՆԱԿԸ որոնք,
//? բաժանվում են  17 ի





// let count = 0;
// for(let i = 1; i <=1000; i++){
//     if(i % 17 === 0){
//         count = count + 1 // count++
//     }
// }

// console.log(count)


//? Ցիկլի միջոցով 1-50 թվերի շարքում դուրս բերել բոլոր թվերը, բացի 
 //? նրանցից որոնք բաժանվում են 19 ի։






// for(let i = 1 ; i <=50 ; i++){
//     if( !(i % 19 === 0 )){
//         console.log(i)
//     }
// }




//? 1-1000 թվերի շարքում դուրս բերել 7 -ի վրա բաժանվող 123-րդ թիվը:





// let count = 0;
// for( let i = 1 ; i <= 1000;i++){
//     if( i % 7 === 0){
//         count++
//     }
//     if(count === 123){
//         console.log(i)
//         break;
//     }
    
// }

// console.log(i)






// //? if i ==0





// let count = 0
// for(let i = 1; i <= 1000 ; i++){
//     if(i % 7 == 0){
//         count++
//     }
//     if(count === 123){
        
//         console.log(i)
//         break;
       
//     }
     
// }



// let count = 0;
// for(let i = 1; i <= 1000; i++){
//     if(i % 17 === 0) {
//         count++
//     }
// }
// console.log(count)











//  1-1000 թվերի շարքում դուրս բերել 3-ի վրա բաժանվող թվերը։



//? Հաշվել 6-ի ֆակտորիալը։




// let x = 6; 
// let fact = 1;

// for(let i = 1; i <= x;i++){
//     fact = i * fact
// }
// console.log(fact);



//! Ներդրված ցիկլեր


//  artaqin:
//     for(var i = 0; i < 8; i++) {
//         console.log("\n Artaqin cikl:" + i);
//     //    if(i == 3){
//     //    continue
//     //    }
//         nerqin:
//             for(var j = 0; j < 7; j++) {
//                  if(j > 5) continue;
//                  if(i == 3) break nerqin;
//             //      if(i == 5 ) break artaqin;
//                 console.log("Nerqin cikl " + j)
//              }
//     }

// console.log(i)






    //? 1-101 թվերի շարքում դուևս բոլոր պարզ թվերը։











    // 1-10000 թվերի շարքում դուրս բերել բոլոր կատարյալ թվերը



    



    
    
    
    //  let n = 2030;

    // simploop:
    // for(let i = 2; i <= n ; i++) {

    //     for(let j = 2 ; j <= i/2 ; j++){
    //         if(i % j == 0) {
                
    //      continue simploop;
    //     }
           
    //     } 
    //     console.log(i);
    // }



    
// let n = 101 ;

// loop:
// for(let i = 2; i <=n ; i++){
//     for(let j = 2 ; j <i; j++){
//         if(i % j === 0) {
//             continue loop;
//         }
        
//     }
//     console.log(i)
// }





//todoo:// function declaration && expression

// declaration
 
// hello();
// hello();
//  hello();

     function hello() {
     

      
        console.log("barevner" )
    }



//    hello();
//     hello();
//     hello();


//   console.log(typeof hello)  // 

// expression


// x();
//    var x =  function (){
//         console.log("barevner")
//     };
    



//function argument 

function poghos(age, age1){
     age = age || "agumnet missed"
   
    console.log("I am a " + age + " years old")
}

   poghos(30 );
  poghos("gugo");
//   poghos(20);



//function with many argumnet

// f(x,y) = x*2 + y
// f(2,4) 



// function hello(name = "Gurgen" ,age =100){
//     //  name = name || "AAA";
//     // age = age || 100;
//     console.log("My name is " + name + 
//     " and I am a " + age + " years old")
   
// }

//    hello("Armen",23 );

//     hello();

//    hello(false , 55)



//============================================================

//return


// function sum(a1 , a2) {
//     return a1 + a2 ; 
//      console.log(100)
// }

// sum(12,20)



//  console.log(sum(12,8))

// var res = sum ; 

// function modul(n){
//     if(n >=0){
//         return n
//     }else {
//         return -1*n
//     }
// }

// console.log(modul(0))




// function modul(num) {
//     return (num < 0) ? -num : num ; 
// }

// console.log(modul(-5));
// console.log(modul(18));
// console.log(modul(0))





//? 1. function sum(n){}; 1-n summary
// 1 - n 

// function sum(n){
    
//    return n*(n + 1)/2
// }

// console.log(sum(10))

// ? 2. function fact(n){}  // 1*2*3* ....n

// function fact(n){
//     let res = 1;
//     if(n < 0){
//         return "bacasakan tvi factorial chka"
//     } else if(n == 0 || n == 1){
//         return 1;
//     }else {
//         for(let i = 1; i <= n; i++){
//             res = res * i;
//     }
//     return res
// }
// }
// console.log(fact(13))

//? 3. function power(a,b){} a^b ; power(3 ,4) -> 81




// local variables 


//  function sms() {
//     var message = "Hi" ; 
//     console.log(message)
// }
//  sms();


//  console.log(message)



//local in for 


// function count(){
//     for(var i = 5; i < 10 ; i++){
//         var j = i*10;
//     }
//      console.log(i);
//      console.log(j)
// }

// count();




  
