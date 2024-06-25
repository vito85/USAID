// 6. Տրված է բնական թվերի հաջորդականություն: Արտածել այդ հաջորդականության
// ա) այն տարրերի քանակը, որոնց թվանշանների գումարը հավասար է տրված c թվին,
// բ) 2-ի աստիճան հանդիսացող տարրերի արտադրյալը,
// գ) որևէ թվի ֆակտորիալ հանդիսացող տարրերի միջին թվաբանականը,
// դ) կատարյալ թվերի գումարը,
// ե) պարզ թվերի արտադրյալը,
//  զ) Ֆիբոնաչիի թվերի քանակը,
// է) սիմետրիկ թվերի միջին թվաբանականը,




// ա) այն տարրերի քանակը, որոնց թվանշանների գումարը հավասար է տրված c թվին,

// function sumOfDigit(num){
//     let str = num + "";
//     let sum = 0;
//     for(let i = 0; i < str.length; i++){
//         sum = sum + +str[i]
//     }
//     return sum;
// }

// let arr = [66, 84,390,4567,34]
// let c = 12;
// let count = 0

// for(let i = 0; i < arr.length; i++){
//     if(sumOfDigit(arr[i]) === c){
//         count++
//     }
// }
// console.log(count)



// բ) 2-ի աստիճան հանդիսացող տարրերի արտադրյալը,

// function f(num){
//     while(num != 1){
//         if(num % 2 !== 0){
//             return false
//         }else {
//             num = num /2
//         }
//     }
//     return true
// }

// function f1(num){
// return (num & (num - 1) ) === 0
// }

// let arr = [2,45,64,4,67,87]
// let res = 1;

// for(let i = 0; i < arr.length; i++){
//     if(f1(arr[i]) === true){
//         res = res * arr[i]
//     }
// }
// console.log(res)


// գ) որևէ թվի ֆակտորիալ հանդիսացող տարրերի միջին թվաբանականը,

// function isFactorial(num) {
//     let i = 1
//     while(num != 1){
//         if(num % i != 0){
//             return false
//         }else{
//             num = num/i;
//             i++
//         }
//     }
//     return true
// }

// let arr = [6,120,45,67,8,24]
// let sum = 0;
// let count = 0;

// for(let i = 0; i < arr.length; i++){
//     if(isFactorial(arr[i]) === true){
//         sum = sum + arr[i]
//         count++
//     }
// }

// let mijin = sum / count
// console.log(mijin)


// դ) կատարյալ թվերի գումարը,

// function isPerfect(num){
//     let sum = 0;

//     for(let i = 1; i <= num/2; i++){
//         if(num % i === 0){
//             sum = sum + i;
//         }
       
//     }
//     if(sum === num){
//         return true
//     }
//     return false
// }

// let arr = [24,567,87,6,28,6]
// let sum = 0;

// for(let i =0; i < arr.length; i++){
//     if(isPerfect(arr[i]) === true){
//         sum = sum + arr[i]
//     }
// }
// console.log(sum)


// function isSimple(num) {
//     for(let i = 2; i <= num/2; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return true
// }

// let arr = [101,4,2,7,17,65]
// let res = 1
// for(let i = 0; i < arr.length; i++){
//     if(isSimple(arr[i]) === true){
//         res = res * arr[i]
//     }
// }
// console.log(res)



//  զ) Ֆիբոնաչիի թվերի քանակը,


// function isFib(num) {
//     let fib1 = 1;
//     let fib2 = 1;
//     let next;

//     while(fib2 < num){
//         next = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = next;
//     }

//     if(fib2 == num){
//         return true
//     }else {
//         return false
//     }
// }

// let arr = [5,3,7,99,13,55]
// let count = 0;

// for(let i = 0; i < arr.length; i++){
//     if(isFib(arr[i]) === true){
//         count++
//     }
// }
// console.log(count)



// է) սիմետրիկ թվերի միջին թվաբանականը,

// function f(num){
//     let str = num + "";
//     let str1 = "";
//     for(let i = 0; i < str.length; i++){
//         str1 = str[i] + str1
//     }
//     if(str === str1){
//         return true
//     }
//     return false;

// }

// let arr = [22322,456,232,34]
// let sum = 0;
// let count = 0
// for(let i = 0; i < arr.length; i++){
//     if(f(arr[i]) == true){
//         sum = sum + arr[i];
//         count++
//     }
// }
// console.log(sum/count)


// Найти самое длинное слово в строке
// Напишите функцию find_longest_word(str), которая принимает строку
// в качестве параметра и находит самое длинное слово в строке.

function find_longest_word(str){
    let arr = str.split(" ");
    let maxLength = arr[0].length;
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > maxLength){
            maxLength = arr[i].length
            index = i
        }
    }
    return arr[index]
}
console.log(find_longest_word("asd asdf asdfg as asdfgh asd"))