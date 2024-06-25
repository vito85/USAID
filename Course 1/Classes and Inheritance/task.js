//let words = ["grapefruit","banana","banana","grapefruit","banana","orange","banana"]
// output ["banana","grapefruit","orange"]

//Գրել ֆունկցիա որը մուտքում ստանում է մասիվ, և վերադրաձնում է 
//նոր մասիվ որոնց էլեմենտները ունիկալ են և դասավորված են 
//ըստ ավելի հաճախ հանդիպածԻ տրամաբանությամբ։












// const arr = ["grapefruit","banana","banana","grapefruit","banana","orange","banana"]
// const obj = {};
// for(let i = 0; i < arr.length; i++){
//   if(obj[arr[i]] === undefined){
//     obj[arr[i]] = 1
//   }else 
//     obj[arr[i]] ++  // obj[arr[i]] = obj[arr[i]] + 1
  
// }
// console.log(obj)




// function mySuperSort(arr){
    
//     const obj = {};
//     for(let i = 0; i < arr.length; i++){
//       if(obj[arr[i]] === undefined){
//         obj[arr[i]] = 1
//       }else 
//         obj[arr[i]] ++  // obj[arr[i]] = obj[arr[i]] + 1
      
//     }
//     const arr1 = Object.entries(obj)
//     arr1.sort((a,b)=>b[1] - a[1])
    
//   return arr1.map((val)=>val[0])
//   }
//    console.log(mySuperSort(words))


   //console.log(Object.entries({x:5,y:7,z:8}))

   
//=============================================

//գրել ֆունկցիա, որը ընդունում է անհայտ քանակությամբ արգումենտներ
// և վերադարձնում է այդ թվերի քառակուսիները նոր մասիվում




// function multiplyByTwo(...res){
  
//        return res.map((val) => val**2);
// }

//  console.log(multiplyByTwo(10,20,30,20,30,40)); //res = [10,20,30,20,30,40]




//=====================================================

// const x = {a:1,b:2}
// const y = {b:3,c:4}
// const z = {...x,...y}
// console.log(z)




// a = {
    
//     toString(){
//         if(this.b){
//             this.b = false
//             return false
//         }else {
//             this.b = true
//             return true
//         }
//     }
// }
// console.log(a == true && a == false);
// let a = {}
// let b = false
// a.__proto__.toString = function(){
//     if(b){
//         b = false;
//         return false
//     }else {
//         b = true;
//         return true
//     }
// }

// console.log(a == true && a == false)




