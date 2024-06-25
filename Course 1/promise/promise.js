//================================= Promise ==========================================
//setTimeout

// console.log("tvyalneri harcum")

// setTimeout(()=>{
//     console.log("Naxapatrastum")
//     let backendData = {
//         server:"aws",
//         port: 2000,
//         status:"working"
//     }

//     setTimeout(()=>{
//         backendData.modified = true;
//         console.log("tvyalner@ stacvac e " , backendData)
//     },4000)
// },8000)


//Promise

// console.log("tvyalneri harcum")
// const p = new Promise(function(resolve,reject){
//     setTimeout(() => {
//             console.log("Naxapatrastum")
//     let backendData = {
//         server:"aws",
//         port: 2000,
//         status:"working"
//     }
//     resolve(backendData)
//     }, 3000);
// })

// p.then((data)=>{
//     const p2 = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000);
      
//      })

//     p2.then((clientData)=>{
//         console.log("tvyalner@ stacvac en", clientData)
//     })
    
// })
// .catch((err)=> console.log(`Error is ${err}`))
// .finally(()=> console.log("Finally"))



//Promise methods

// const sleep = (ms)=>{
//     return new Promise(resolve =>{
//         setTimeout(()=>resolve(), ms)
//     })
// }

// sleep(2000).then(()=>console.log("After 2 sec"))
// sleep(3000).then(()=>console.log("After 3 sec"))

// //1
// Promise.all([sleep(2000),sleep(5000)]).then(()=>{
//     console.log("All promises")
// })

// //2
// Promise.all([sleep(2000),sleep(5000)]).then(()=>{
//     console.log("All promises")
// })


//example
//1
// function func(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve(8)
//         }, 1000);
//     })
// }

// const p = func();
// //console.log(p)

// p.then(function(result){
//     console.log(result)
// })


//2
// function func(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             reject(new Error("Inch vor sxal e texi unecel"))
//         }, 1000);
//     })
// }

// const p = func();
// p.catch(function(error){
//     console.log(error)
// });

//Խոստումը ունի երեք իրավիճակ,առաջին՝ սպասելու ժամանակ, որից հետո կամ այն կատարվում է 
//կամ էլ մերժվում

//3
// function func(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve(8)
//         }, 1000);
//     })
// }

// const p = func();

// const p2 = p.then(function(result){
//     return 1 ;
// });

// const p3 = p2.then(function(result){
//     return 100;
// })

// p3.then(function(result){
//     console.log(result)
// })

//3.1

// function func(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve(8)
//         }, 1000);
//     })
// }

// const p = func();

//  p.then(function(result){
//     return 1 ;
// })
// .then(function(result){
//     return 100;
// })
// .then(function(result){
//     console.log(result)
// })




//4
// function func1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => resolve(2), 1000);
//     })
// }

// function func2(val){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve(val + 3),1000);
//     })
// }

// function func3(val){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve(val + 4),1000);
//     })
// }

// func1()
// .then((result)=> func2(result))
// .catch((error)=> 5)
// .then((result)=>{
//     console.log(result);
//     throw new Error("oops")
// })
// .then((result)=> func3(result))
// .catch((error)=>func3(2))
// .then((result)=>func2(result))
// .then((result)=>console.log(result))


 
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// job(true).then(function(data) {
//     console.log(data);  //success
//     return job(true);
// }).then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }
//     return job(true);
// }).then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.log(error);  //Defeat
//     return job(false);
// }).then(function(data) {
//     console.log(data);
//     return job(true);
// }).catch(function(error) {
//     console.log(error);  //error
//     return 'Error caught';
// }).then(function(data) {
//     console.log(data);  //Error caught
//     return new Error('test');
// }).then(function(data) {
//     console.log('Success:', data.message);  //Success test
// }).catch(function(data) {
//     console.log('Error:', data.message);
// });


//fatch

// fatch("https://restcountries.com/v3.1/all")
// .then(function(response){
//     return response.json
// }).then(function(response){
//     const h1 = document.querySelector("h1");
//     h1.innerHTML = response
// })

