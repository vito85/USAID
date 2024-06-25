//!----------------------------------== Map ==----------------------------------------

// Map - это коллекция, которая хранит ключи и соответствующие им значения, 
// где каждый ключ может быть любого типа. Он похож на объект, 
// но имеет несколько важных отличий. 

//  основные методы и свойства объекта Map 


//Создание объекта Map


// const myMap = new Map();
// console.log(myMap)
//Добавление элементов в Map
//Чтобы добавить элемент в Map, мы используем метод set():

//  myMap.set('key1', 'value1');
//  myMap.set('key2', 'value2');
//  myMap.set('key3', 'value3');
// console.log( myMap)
//Также можно добавить элементы в Map с помощью конструктора:

// const myMap = new Map([
// ['key10', 'value110'],
// ['key1', 'value1'],
// ['key2', 'value2'],
// ['key3', 'value3']
// ]);
//  console.log(myMap)
//Получение элементов из Map
//Чтобы получить элемент из Map, мы используем метод get():

// const value = myMap.get('key1');
// console.log(value); // 'value1'

//Если ключ не существует, метод get() вернет undefined.

//Проверка наличия ключа в Map
//Чтобы проверить, существует ли ключ в Map, мы используем метод has():

// const hasKey = myMap.has('key1');
// console.log(hasKey); // true

//Удаление элемента из Map
//Чтобы удалить элемент из Map, мы используем метод delete():

//  myMap.delete('key1');
//  console.log(myMap);
//Очистка Map
//Чтобы очистить Map, мы используем метод clear():

 //myMap.clear();

// Получение размера Map
// Чтобы получить количество элементов в Map, мы используем свойство size:

// const size = myMap.size;
// console.log(size); // 2

//Итерация по элементам Map
//Map имеет метод forEach(), который позволяет перебирать все элементы Map:

// myMap.forEach((value, key) => {
// console.log(key + ' = ' + value);
// });

//Также мы можем перебирать элементы Map с помощью цикла for...of:

// for (const [key, value] of myMap) {
// console.log(key + ' = ' + value);
// }

//Примеры использования Map
// Map может быть полезен, когда мы хотим хранить значения по ключу, 
// которые могут быть любого типа. Он также может использоваться для хранения 
// порядка элементов в коллекции.



//Пример использования Map для подсчета количества слов в строке:

// const myString = 'hello world hello';
// const wordCount = new Map();
// const words = myString.split(' ');

// words.forEach((word) => {
// if (wordCount.has(word)) {
// wordCount.set(word, wordCount.get(word) + 1);
// } else {
// wordCount.set(word, 1);
// }
// });

//  console.log(wordCount); // Map(2) { 'hello' => 2, 'world' => 1 }



//!--------------------------------== Set ==--------------------------------------

// Set - это коллекция уникальных значений в JavaScript. 
// Как и Map, Set был добавлен в ES6 и позволяет легко работать с 
// уникальными значениями без необходимости самостоятельно следить за
//  дубликатами в массиве или другой коллекции.

// Set не имеет индексов, как массивы, и не имеет ключей, как объекты.
//  Вместо этого он предоставляет методы для добавления, удаления и поиска элементов
//   в коллекции.

// Чтобы создать новый Set, нужно просто вызвать конструктор Set():

// const mySet = new Set();
// console.log(mySet);


//Чтобы добавить элементы в Set, используется метод add():

// mySet.add('one');
// mySet.add('two');
// mySet.add('one');
// mySet.add('three');
// console.log(mySet);

//Чтобы удалить элемент из Set, используется метод delete():

//  mySet.delete('two');
//  console.log(mySet);

// Чтобы проверить наличие элемента в Set, используется метод has():

// console.log(mySet.has('one')); // true
// console.log(mySet.has('two')); // false

//метод forEach() для итерации по Set:

// mySet.forEach(function(value) {
//     console.log(value);
//   });
  

// add(value) - добавляет новый элемент в Set. 
// delete(value) - удаляет элемент из Set. 
// has(value) - возвращает true, если элемент есть в Set, и false в противном случае.
// clear() - удаляет все элементы из Set.
// size - свойство, которое возвращает количество элементов в Set.



 //const mySet = new Set();

// // добавление элементов в Set
//  mySet.add('one');
//  mySet.add('two');
// mySet.add('three');
//  mySet.add('one'); // элемент не будет добавлен, т.к. уже есть в Set

// // проверка наличия элемента в Set
 //console.log(mySet.has('two')); // true

// // удаление элемента из Set
// mySet.delete('two');

// // получение размера Set
// console.log(mySet.size); // 2

// // очистка Set
// mySet.clear();

// // проверка наличия элементов в Set
// console.log(mySet.size); // 0

// let arr = [1,22,1,4,6,4,7,8,7];

// function arrToSet(arr){
//     return new Set(arr)
// }
// console.log(arrToSet([1,22,1,4,6,4,7,8,7]));



