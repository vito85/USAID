//!===================== objects =================================
//empty object




//  const dimord = {}; //
//  console.log(dimord);



// let dimord1 = new Object();
// console.log(dimord1);



//    console.log(typeof dimord); //type object

  //      dimord.anun = "Petros";
  //      dimord.azganun = "Petrosyan";
  //       dimord.tariq = 18 ;
  //      dimord["status"] = "SysAdmin";
  //      dimord.email = "dimor@gmail.com";
  //      console.log(dimord);

  //     dimord.anun = "Aram";
  //     dimord["status"] = "IT"
  //     console.log(dimord);

  //  console.log(dimord.anun1);
  // console.log(dimord.azganun);
  // console.log(dimord.status);


//Create not empty object

    //  let user = {name:"Armen",age:33,position: "admin"};

    //     console.log(user);
    //   // user.pashton = "Administrator";
    //   // console.log(user);
    //   user.x = {
    //     name:{
    //       age:45,
    //       name:"gurgen"
    
    //     }
    //   }
    //    console.log(user.x.name.name);

// const obj = {
//   name : 'John',
//   age : 20,
//   city :'New York',
//   addres: "baghramyan",
//   email:"jon@mail.ru",
//   tel:"094568574",
// }
// console.log(obj)

// let obj = {"user name":"Armen",
//             var:15, 
//             25:"tariq",
//             15:"hasce",
//             position:"Netadmin"
//         }


//  console.log(obj);
//   console.log(obj."user name"); ///  /?
//  console.log(obj.var); // ...?
// console.log(obj.25)


//   console.log(obj["user name"]);
// // // console.log(obj["var"]);
//  console.log(obj["25"])
//  console.log(obj[25]);
//  console.log(obj[15])


//are there that property



// let obj = {"user name":"Armen",
//             var:15, 
//             25:"tariq",
//             15:"hasce",
//             position:"Netadmin"
//     };
// // // delete obj
// // //       console.log(obj);
//       console.log("15" in obj);

//    console.log("30" in obj);
//    console.log("user name" in obj)




// var x = 15;

// delete x;
// console.log(x)




//new delete property x

// let user = {name:"Armen", x:14}
// console.log(user)
// delete user.x
// console.log(user)



//! loop on object

//it's run only if our keys are ordered only NUMBER

// let user = {
//     1:"a",
//     2:"b",
//     3:"c",
//     4:"d"
// }

// for(let i = 1; i in user; i++){
//     console.log(i + ": " + user[i])
// }


//if our keys are net number
// us loop for in

// let user = {
//     "x":"dhffdh",
//     "y":"edfhdfh",
//     "z":"fdfhd",
//     "v":"edfhd"
// }

//      console.log(user);

// for(let i in user){
//     console.log(i + ": " + user[i])
// }





//ClassWork
//! Ստեղծել երկու օբյեկտ , որը  նկարագրումա ձեզ։
//! առաջի դեպքում բանալիները  լինեն թվեր, երկրորդ դեպքում սթրինգներ
//! Ցիկլի միջոցով դուրս բերել ձեր տվյալները։ 


//==============================================================================


// let x = 20;
// let y = x ; 
// x = 50;

// console.log(x);
// console.log(y);


//let x = 10;
///onsole.log(x)



//Objects calls with LINKS

// let obj = {a:10,b:20};
// let obj1 = obj ; 

//     obj.b = 30 ; 
//     obj1.a = 20 ; 

//  console.log(obj.a); 
//  console.log(obj1.b); 


//   console.log(obj)  // ...?
//   console.log(obj1) //...?
//    console.log(obj === obj1) // ...??



// let petros = {
//     surname:"Petrosyan",
//     age:20
// }

// let poghos = {
//     surename:"Poghosyan",
//     age:30
// }
//      let aram = petros;

// for(let i in aram){
//     console.log(aram[i])
// }

//  console.log(petros)
//  console.log(aram)
//  console.log(poghos)





//Տնային
//Ստեղծել 5 հատ օբյեկտ,որոնք ունեն հետևյալ բանալիները (key)
//name,age,addres,email,phone number: 
//Դուրս բերել բոլոր այն օբյեկտների բանալիների արժեքները (անունները) , որոնք 
//ունեն 18 ից փոքր տարիք;

//!===================================================================


//!Object methods

// //  membrs and methods

// let user = {
//     "name":"Aram",
//     "age" : 25,
//     "position": "admin",
//     "method1" : function(text){

//         //console.log(text + " from " + user.name)
//          console.log(text + " from " + user.name)
//     },

//       "method2": function(){console.log(this.age)},
//         "method3": tariq,
     


// }
// user.method1("barev")
// user.method2()
// user.method3()
    // console.log(user.name)
    // user.method1("hello")

    
  

   //user.method2()

  //    user.method3()

  // function tariq(){console.log(this.age)}

   //tariq();


// let user1 = {
//     "age":35,
//     "method2" : tariq
// }
//  user1.method2()


//2.


// let x = 100;

// function func(){
//     console.log(this.x);
//     console.log(this)
// }

//   func()






// classWork
//Կազմեկ երկու օբյեկտ որոնց անուններ են book1 և book2,որոնք ունենք 
//հետևյալ հատկությունները և մեթոդը։
//մեթոդը վերադարձնում է բոլոր օբյեկտների հատկությունները։

//title , price , page_num  // membrs
// getInfo()  // method

//  let book1 = {}
    
 // let book2 = {}



// function getInfo(){}


//=========================================================


//  function info(){
//           return this.title + ",  " + this.price + ", " + this.page_num
//        }
// let book1 = {
//     title:"HTML and CSS",
//     price: "90$",
//     page_num: 150,
//     getInfo: info
     
// }

// let book2 = {
//     title:"JS",
//     price: "60$",
//     page_num: 160,
//     getInfo: info
// }
// // console.log(book2.getInfo())


// if(parseFloat(book1.price)> parseFloat(book2.price)){
//   console.log(book1.title)
// }else {
//   console.log(book2.title)
// }

// book2.getInfo()

// if(book1.page_num > 140){
//   console.log(book1.title)
// }
//  if(book2.page_num >140){
//   console.log(book2.title)
// }

// console.log(book2.getInfo())
// console.log(book1.getInfo())


// function getInfo(){}

 //console.log(book2.getInfo())

// function info(){
//     return this.title + ",  " + this.price + ", " + this.page_num
// }

// function isUnic(arr){
//   let arr1 = []

// for(let i = 0; i < arr.length;i++){
//   if(!arr1.includes(arr[i]) ) {
//     arr1.push(arr[i])
//   }
// }
//  return arr1
// }
// console.log(isUnic(["armen","xndzor","armen",7,5,7]))




// let arr = ["armen","xndzor","armen",7,5,7]
// let obj = {}

// for(let i = 0; i < arr.length; i++){
//   if(obj[arr[i]] === undefined) {
//     obj[arr[i]] = 1
//   }else {
//     obj[arr[i]]++
//   }
// }

// console.log(obj)
// console.log(Object.keys(obj))






// let armen = {
//     "name":"Armen",
//     age:23,
//     method: function(word){
//         console.log(word + " from " + this.name)
//     }
// }



// let karen = {
//     name:"Karen",
//     age:25,
//     //1.2
//     // method1:armen.method
// }
//  armen.method("barev")
//  karen.method1("barev")
// //1.1
//   karen.method1 = armen.method;
//  karen.method1("Barevner");
//  armen.method("hello")




// global object window
//1.1

//  var age = 100;

// function funk(){
//     console.log(this.age)
// }

// funk()

//!===================================================================

//2. context binding


// function funk(){
//     console.log(this)
// }

// let obj = {
//     name:"armen",
//     print: function(){
//         console.log(this)
//     }
// }

//    funk();
//     obj.print()
//    console.log(obj)



//3

// let car = {
//     model:"Audi",
//     mark:"Q7",
//     color:"white",
    
// }



// function getInfo(){
//     console.log(`
//         model: ${this.model}
//         Mark: ${this.mark}
//         color: ${this.color}
//     `)
// }



// getInfo()

// getInfo.bind(car)() // return another functio

//  getInfo.bind(car)




// //4
//    getInfo.call(car);


// // //5

//    getInfo.apply(car,[]);




//function length

// function func(a,b,c) {

  
//     return func.length
// }


//     console.log(func())

//! Այն կանստրուկցիաները որոնք ունեն առվազան մեկ ստատիկ հատկություն և
//! առնվազն մեկ դինամիկ հատկություն (մեթոդտ) կոչվում է օբյեկտ։

//========================================================================//

// var parametr = 100;

// let o = {
//     parametr:10,
//     method:  function (){
//         let x = this;
//          let test=  function () {
//             console.log(this.parametr)
//           console.log(x.parametr)
//         }
//         test()
//     }
// }

//   o.method(); //...???

//=============================================================================

// function funk(){
//     console.log(this.name , this.age)
// }

//object 1

// let armen = {
//     "name": "Armen",
//     age:23
// }

// //object 2

// let karen = {
//     "name":"Karen",
//     age:25
// }

// funk.call(armen)

// funk.call(karen)



//if function have parameters

// let armen = {
//     "name": "Armen",
//     age:233
// } 

// function funk(a,b){
//     console.log(this.name)
// console.log('HEllo world');
//     console.log(funk.length)

// console.log(arguments.length)
// }

// funk.call(armen,"Poghosyan",3,4,7)



//===============================================================================

//!Гипотеза Коллатца 3n+1 проблема
//Берём любое натуральное число n. Если оно чётное, то делим его на 2,
// а если нечётное, то умножаем на 3 и прибавляем 1 (получаем 3n + 1).
// Над полученным числом выполняем те же самые действия, и так далее.
//Гипотеза Коллатца заключается в том, что какое бы начальное число n мы ни взяли,
// рано или поздно мы получим единицу:



// function statistic(n){
//   let count = 0
//   while(n != 1){
//       if(n%2 === 0){
//           n = n/2;
          
//       }else{
//           n = (3*n + 1);
          
//       }
//       count++
//   }
//   return count;
// }
//  console.log(statistic(1024))


// const obj = {};
// for(let i = 2; i <= 1000; ++i){
//   if(obj[i] === undefined){
//       obj[i] = statistic(i);
//   }
  
//   }


//   console.log(obj)
//  console.log(Object.entries(obj))
// // [[2,1],[3,7]]
// const  arr = Object.entries(obj).sort((a,b)=>a[1] - b[1]) 
//   console.log(arr)
//   console.log(arr[arr.length - 1])



//=============================================================

//recursia
// function a(n){
//   if(n>=1)
//   return n;
//   return a(n-1) + a(n-2)
// }

// console.log(a(6))

// const res = [0,1,2,3,4,5,NaN,false,"",undefined].filter((a)=> false)
// console.log(res);








