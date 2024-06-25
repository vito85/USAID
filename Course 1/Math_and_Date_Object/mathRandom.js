



// function LCG(seed) {
//     let a = 1664525;
//     let c = 1013904223;
//     let m = Math.pow(2, 32);
//     let state = seed;

//     return function() {
//         state = (a * state + c) % m;
//         return state / m;
//     };
// }

// let random = LCG(12345); // начальное значение 12345
// console.log(random()); // Вывод: псевдослучайное число от 0 до 1


// function myRandom(a,b){
//     const deff = b - a + 1
//     return Math.floor(random() * deff + a)
// }
// console.log(myRandom(100,200))
// console.log(myRandom(100,200))








// Խնդիր 1: 0-ից մինչև 1 թվի գեներացիա
// Գեներացնել պատահական թիվ 0-ից մինչև 1 միջակայքում:




// const randomNumber = Math.random();
// console.log(randomNumber); // Outputs a number between 0 and 1

// Խնդիր 2: 0-ից մինչև 100 ամբողջական թվի գեներացիա
// Գեներացնել պատահական ամբողջական թիվ 0-ից մինչև 100 միջակայքում:


// const randomInt = Math.floor(Math.random() * 101);
// console.log(randomInt); // Outputs an integer between 0 and 100

// Խնդիր 3: m-ից մինչև n միջակայքի պատահական ամբողջական թիվ
// Գեներացնել պատահական ամբողջական թիվ m-ից մինչև n միջակայքում:


// function getRandomInt(m, n) {
//     return Math.floor(Math.random() * (n - m + 1)) + m;
// }

// console.log(getRandomInt(5, 10)); // Outputs an integer between 5 and 10

// Խնդիր 4: Պատահական տարր զանգվածից
// Գեներացնել պատահական տարր տվյալ զանգվածից:


// function getRandomElement(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
// }

// const fruits = ["apple", "banana", "cherry", "date"];
// console.log(getRandomElement(fruits)); // Outputs a random fruit

// Խնդիր 5: Պատահական տառ
// Գեներացնել պատահական տառ (A-Z):


// function getRandomLetter() {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     return letters.charAt(Math.floor(Math.random() * letters.length));
// }

// console.log(getRandomLetter()); // Outputs a random letter

// Խնդիր 6: Պատահական  գույն (RGB)
// Գեներացնել պատահական RGB գույնի արժեք:



// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// console.log(getRandomColor()); // Outputs a random RGB color

// Խնդիր 7: Պատահական հարստություն (դրամական արժեք)
// Գեներացնել պատահական դրամական արժեք 0-ից 1000 միջակայքում երկու տասնորդականներով:


// function getRandomMoneyAmount() {
//     return (Math.random() * 1000).toFixed(2);
// }

// console.log(getRandomMoneyAmount()); // Outputs a random money amount between 0.00 and 1000.00


// Խնդիր 8: Պատահական ամսաթիվ
// Գեներացնել պատահական ամսաթիվ 2000-ից 2020 միջակայքում:


// function getRandomDate(startYear, endYear) {
//     const start = new Date(startYear, 0, 1).getTime();
//     const end = new Date(endYear, 11, 31).getTime();
//     const randomTime = new Date(start + Math.random() * (end -start));
//     return new Date(randomTime);
// }

// console.log(getRandomDate(2000, 2020)); // Outputs a random date between 2000 and 2020

// Խնդիր 9: Պատահական բառեր նախադասությունից
// Ընտրել պատահական մեկ բառ նախադասությունից:


// function getRandomWord(sentence) {
//     const words = sentence.split(' ');
//     return words[Math.floor(Math.random() * words.length)];
// }

// const sentence = "The quick brown fox jumps over the lazy dog";
// console.log(getRandomWord(sentence)); // Outputs a random word from the sentence


// Խնդիր 10: Պատահական գաղտնաբառ
// Գեներացնել պատահական գաղտնաբառ նշված երկարությամբ:


// function generateRandomPassword(length) {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let password = "";
//     for(let i = 0; i < length; i++){
//         let index = Math.floor(Math.random() * characters.length)
//         password = characters[index] + password
//     }
// return password
// }


// console.log(generateRandomPassword(10))




// function generateRandomPassword(length) {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         password += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return password;
// }

// console.log(generateRandomPassword(10)); // Outputs a random 10-character password





// Խնդիր 11: Պատահական Boolean արժեք
// Գեներացնել պատահական Boolean արժեք (true կամ false):

// function getRandomBoolean() {
//     return Math.random() >= 0.5;
// }

// console.log(getRandomBoolean()); // Outputs: true or false


// Խնդիր 12: Պատահական տառեր քառյակի գեներացում
// Գեներացնել պատահական քառյակ տառեր (AAAA-ZZZZ):


// function getRandomQuadLetter() {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let result = '';
//     for (let i = 0; i < 4; i++) {
//         result += letters.charAt(Math.floor(Math.random() * letters.length));
//     }
//     return result;
// }

// console.log(getRandomQuadLetter()); // Outputs: a random 4-letter string


// Խնդիր 13: Պատահական հեռախոսահամար
// Գեներացնել պատահական հեռախոսահամար ձևաչափով XXX-XXX-XXXX:


// function getRandomPhoneNumber() {
//     const getRandomDigit = () => Math.floor(Math.random() * 10);
//     return `${getRandomDigit()}${getRandomDigit()}${getRandomDigit()}-${getRandomDigit()}${getRandomDigit()}${getRandomDigit()}-${getRandomDigit()}${getRandomDigit()}${getRandomDigit()}${getRandomDigit()}`;
// }

// console.log(getRandomPhoneNumber()); // Outputs: a random phone number


// Խնդիր 14: Պատահական ուղղություն
// Գեներացնել պատահական ուղղություն (N, NE, E, SE, S, SW, W, NW):

// function getRandomDirection() {
//     const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
//     return directions[Math.floor(Math.random() * directions.length)];
// }

// console.log(getRandomDirection()); // Outputs: a random direction\


// Խնդիր 15: Պատահական նամակի սուբյեկտ
// Գեներացնել պատահական նամակի սուբյեկտ:


// function getRandomEmailSubject() {
//     const subjects = [
//         "Meeting Reminder",
//         "New Assignment",
//         "Project Update",
//         "Invitation",
//         "Feedback Request",
//         "Important Notice",
//         "Thank You",
//         "Follow Up"
//     ];
//     return subjects[Math.floor(Math.random() * subjects.length)];
// }

// console.log(getRandomEmailSubject()); // Outputs: a random email subject


// Խնդիր 16: Պատահական Hexadecimal Գույնի Գեներացիա
// Գեներացնել պատահական հեքսադեցիմալ գույնի արժեք:


// function getRandomHexColor() {
//     const hexDigits = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
//     }
//     return color;
// }

// console.log(getRandomHexColor()); // Outputs: a random hex color like #3E2F1B


// Խնդիր 17: Պատահական տողի ընտրություն
// Ընտրել պատահական տող երկու տողերից:


// function getRandomString(string1, string2) {
//     return Math.random() >= 0.5 ? string1 : string2;
// }

// console.log(getRandomString("Hello", "World")); // Outputs: "Hello" or "World"



// Խնդիր 18: Պատահական ամսվա գեներացում
// Գեներացնել պատահական ամիս:


// function getRandomMonth() {
//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];
//     return months[Math.floor(Math.random() * months.length)];
// }

// console.log(getRandomMonth()); // Outputs: a random month like "July"




// Խնդիր 19: Պատահական ժամանակ գեներացիա (HH:MM)
// Գեներացնել պատահական ժամանակ ձևաչափով HH:MM:


// function getRandomTime() {
//     const hours = Math.floor(Math.random() * 24).toString().padStart(2, '0');
//     const minutes = Math.floor(Math.random() * 60).toString().padStart(2, '0');
//     return `${hours}:${minutes}`;
// }

// console.log(getRandomTime()); // Outputs: a random time like "13:45"



// Խնդիր 20: Պատահական վարժություն գեներացում
// Գեներացնել պատահական վարժություն:


// function getRandomExercise() {
//     const exercises = ["Push-ups", "Squats", "Lunges", "Burpees", "Plank", "Jumping Jacks", "Sit-ups"];
//     return exercises[Math.floor(Math.random() * exercises.length)];
// }

// console.log(getRandomExercise()); // Outputs: a random exercise