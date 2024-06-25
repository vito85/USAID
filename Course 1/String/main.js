//!====================================  String Methods ================================================ 
// String length
// String slice()
// String replace()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String charAt()
// String charCodeAt()
// String indexOF()
// String lastIndexOF



 //  let str = `HelLo Armen`;
// let len = str.length
// console.log(len)
// str[0] = "k"
// console.log(str)
// console.log(str[5])
// console.log(str[10])


// let count = 0;
// for(let i = 0; i < str.length; i++){
//     if(str[i] === "l" || str[i] === "L"){
//         count++
//     }
// }

// console.log(count)






// let text = "hello      ";
// let length = text.length;



//  console.log(length);


// let text = "Hello Armen";   // [2,7)
// let part = text.slice(2,7); 

//   console.log(part)

//   console.log(text)




// let text = "Hello Armen jan Armen ";
// let newText = text.replace("Armen", "Narek");
// console.log(text)
// console.log(newText)



// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);




// let text1 = "Hello World!";       
// let text2 = text1.toLowerCase();
// console.log(text2)





// let text1 = "Hello";
// let text2 = "World";


//   let text3 = text1.concat(" ",text2);

//    console.log(text3)



// let text1 = "      Hello World!      ";
// let text2 = text1.trim();

//   console.log(text1)
//   console.log(text2)





//  let text1 = "     Hello World!      ";
// let text2 = text1.trimStart();
// let text4 = text1.trimEnd()

// console.log(text1)
// console.log(text2)
// console.log(text4)




// let text = "HELLO WORLD";
// let char = text.charCodeAt(1);


//   console.log(char)

// console.log("a" > "D")
// console.log("|".charCodeAt())


// let text = "HELLO WORLD";
// text[0] = "A";

//  console.log(text)


//! split() method:

// let str = "Hello Armen: vonc es Armen";
// let str1 = str.split(" ")
// console.log(str1)


// let str = "Hello Armen";
// let str1 = str.lastIndexOf("e")
// console.log(str1)


// let str = "armen barev armen"
// let arr = str.split(" ")
// console.log(arr)

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] === "armen"){
//     arr[i] = "narek"
//   }
// }

// console.log(arr.join(" "))

// գրել ֆունկցիա որը կվերադարձնի
// true եթե տրված տեքստը պոլինդրոմ է , հակառակ դեպքում false



// let str = "abc" ; // cba

// let str1 = "";
// for(let i = 0; i < str.length; ++i){
//    str1 =  str[i] + str1   // "cba"
// }
// console.log(str)
// console.log(str1)







// let a = "abc"
// let b = ""
// for(let i = 0 ; i < a.length; i++){
//     b =  a[i] + b;
// }
// console.log(b)

// function isPol(text){
//    let  str = text.toLowerCase()
//     let str1 = ""
//     for(let i = 0 ; i < str.length; i++){
//         str1 =  str[i] + str1;
//     }
//     return str1 == str
// }

// console.log(isPol("Anna"))






// function isPolindron(text){
//     let text1 = text.toLowerCase();
//     let str = text1.split("");
//     let str1 = str.reverse().join("");
//      return str1 == text1
// }




//  console.log(isPolindron("33533"))




//1-1000 թվերի շարքում հաշվել բոլոր այն թվերի քանակը,
// որոնք պարունակում են 3 թվանշանը:





// let count = 0;

// for (let i = 1; i <= 1000; i++) {

 
//   if (i.toString().includes("3")) {
//     count++;
//   }
// }

// console.log(count)



// function is3(num){

//    let   srt = num + "";
//     return srt.includes("3")
// }



// let count = 0
// for(let i = 1 ; i <=1000 ; i++){
//     if(is3(i) === true){
//         count++
//     }
// }

// console.log(count)

// let str= "abHiAfbfg".toLocaleLowerCase();
// console.log(str.indexOf());

// for(let i = 0; i < str.length;++i){
//     if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//         console.log(str[i]);
//         break;
//     }
// }


// Вернуть переданную строку с буквами в алфавитном порядке
// Напишите функцию alphabet_order(str), которая возвращает 
//переданную строку с буквами в алфавитном порядке.

// Пример строки: 'alphabetical'

// Ожидаемый результат: 'aaabcehillpt'

// function alphabetOrder (srt){
//   return srt.split("").sort().join("")
// }
// console.log(alphabetOrder("aaggbbddcceeff"))



// Найти самое длинное слово в строке
// Напишите функцию find_longest_word(str), которая принимает строку 
// в качестве параметра и находит самое длинное слово в строке.





// function find_longest_word(str) {
//   let arr = str.split(" ");
//   let max = 0;
//   let word = "";
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i].length > max){
//       max = arr[i].length;
//       word = arr[i];
//   }
// }
//   return word

// }


//  console.log(find_longest_word("barev sirunr jan sdsdsdsdss"))


// Найдите идеальное число
// Напишите функцию JavaScript, которая определяет идеально ли число.



// function is_perfect(number) {
//   let temp = 0;
//      for(let i = 1; i <= number/2; i++) {
//            if(number % i === 0) {
//               temp += i;
//             }
//        }
    
//        if(temp === number && temp !== 0) {
//          return true
//           }  
//         else {
//          return false
//           }  
//    }


// for(let i = 1; i <= 1000000; i++){
//     if(is_perfect(i) === true) {
//       console.log(i)
//     }
// }
  // console.log(is_perfect(28))
 


// Given two strings s and t, return true if t is an anagram of s, 
//and false otherwise.




// function isAnagram(s, t) {
//   // Check if the lengths are different, return false if they are
//   if (s.length !== t.length) {
//       return false;
//   }

//   // Sort the characters in both strings and compare
//   const sortedS = s.split('').sort().join('');
//   const sortedT = t.split('').sort().join('');

//   return sortedS === sortedT;
// }


// // Example usage:
// const s = "anagram";
// const t = "nagaram";
// const result = isAnagram(s, t);
// console.log(result);  // Output: true





// Самый длинный палиндром в заданной строке
// Напишите функцию JavaScript, которая возвращает самый длинный палиндром в заданной строке
// Палиндром — это слово или фраза, которые одинаково читаются слева направо и справа налево.

// function is_Palindrome(text) {
  
//    let  str = text.toLowerCase()
//     let str1 = ""
//     for(let i = 0 ; i < str.length; i++){
//         str1 =  str[i] + str1;
//     }
//     return str1 == str
//   }


// function find_longest_word(str) {
//   let arr = str.split(" ");
//   let max = 0;
//   let word = "";
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i].length > max){
//       max = arr[i].length;
//       word = arr[i];
//   }
// }
//   return word

// }


// function longestPalindrome(s) {
// let arr = s.split(" ")
// let arr1 = []
// let long = ""
// for(let i = 0; i < arr.length; i++){
//   if (is_Palindrome(arr[i])){
//     arr1.push(arr[i])
//   }
// }
// long = find_longest_word(arr1.join(" "))
// return long
// }

// console.log(longestPalindrome("anna 5572255 qweqewqr 91122211"))

// let a = [1,2,3].reduce((a,b,c) =>a+b+c ,"")

// console.log(a)



//???

// գրել ֆունկցիա, որը որպես արգումենտ ընդունում է ստրինգ, և
// վերադարձնում է , առաջին չկրկնվող սինվոլը։





//  function getElement(str){
    
//     for(let i = 0 ; i < str.length; i++){
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i]) ){
//             return str[i];
        
//     }
// }
//     return "chkrknvox element chka"
//  }

// function myIndexOf(str,s){
//   for(let i = 0; i < str.length; i++){
//     if(str[i] === s){
//       return i
//     }
//   }
//   return -1;
// }
// console.log(myIndexOf("abc", "f"))
// console.log(getElement("sdsad"))


// function myIndexOf(str, str1) {
//   for(let i = 0; i < str.length; i++){
//     if(str[i] === str1) {
//       return i;
//     }
//   }
//    return -1
// }

// console.log(myIndexOf("abcac", "w"))

// console.log("abcac".indexOf("a"))


//let str = "absdfgfhjjf"
// let count = 0;
// function getElement(str){
//     for(let i = 0; i <str.length; i++){
//         count++
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             return  `${str[i]}  loop count is ${count}`
            
//         }
//     }
//     return "not found"
// }

// console.log(getElement("baass"))

//
// let str = "ababsdfgfhjjf";
// let obj = {}

// for(let i = 0; i < str.length; i++){
//     if(obj[str[i]] === undefined){
//         obj[str[i]] = 1;
//     } else{
//         obj[str[i]] ++
//     }
// }

// let arr = Object.entries(obj)

// for(let i = 0; i < arr.length; i++){
//     if(arr[i][1] === 1){
//         console.log(arr[i][0])
//         break;
//     }
// }

// console.log()


// function myLastIndexOf(str1, str2) {
//     let index = str1.length

//     for(let i = index - 1; i >= 0 ; i--){
//       if(str1[i] === str2) {
//         return i;
//       }
//     }
//      return -1 ;
// }

