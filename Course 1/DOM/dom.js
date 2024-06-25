//! Find Elements from DOM


//1.
//  let div = document.getElementById("playground");
// console.log(div);

// // //2
// let p = document.getElementsByClassName("text");
// console.log(p)

// //3
// let h1 = document.getElementsByTagName("h1");
// console.log(h1);

//4
// let div1 = document.querySelector("#playground");
// console.log(div1)

// // 5
// let p1 = document.querySelectorAll(".text");
// console.log(p1);

// // //6
// let h1 = document.querySelector("h1");
// console.log(h1)

// // //7
// let ul = document.querySelector("#playground >div > ul");
// console.log(ul)


//! Elements Content
//1.
// let div = document.querySelector("#playground");
// console.log(div.innerHTML);
//   div.innerHTML = `<h2 style = "color: green"> Change Content with JS</h2>`



//2.
// let h1 = document.querySelector("h1");
// console.log(h1.textContent);
// h1.textContent = "Hello from JS";
// console.log(h1.textContent);


//3
// let input = document.querySelector("input");
// console.log(input.value)
//  let x = input.value = "barev";
// console.log(x)


//!Attributes
//1
// let a = document.querySelector("a");
// console.log(a)
//  console.log(a.getAttribute("href"));

//    let oldHref = a.getAttribute("href");
//   console.log(a.getAttribute("title"));
//   console.log(a.attributes);

//    a.setAttribute("href","https://facebook.com");
//    a.textContent = "facebook";
//   a.setAttribute("title", "go to facebook");


//classes
// let box1 = document.querySelector("#box1");
// let box2 = document.querySelector("#box2");
// console.log(box1.classList);

// box1.classList.add("red")
// console.log(box1.classList);

// // // //էլեմենտը պարունակում է արդյո՞ք կլասի անվանումը
// let hasClass = box1.classList.contains("red")
// console.log(hasClass)

//!dom elements node property
//https://developer.mozilla.org/ru/docs/Web/API/Node



// let box1 = document.querySelector("#box1");
// box1.classList.add("red")
// let box2 = document.querySelector("#box2")
// let hasClass = box2.classList.contains("blue")
// // //console.log(hasClass)

// if(hasClass){
//     box2.classList.remove("blue")
// }else {
//     box2.classList.add("blue")
// }

//===========================================================================
//!создание узлов
//https://learn.javascript.ru/modifying-document
//1.
// let box1 = document.querySelector("#box1");
// let h1 = document.createElement("h1");

// // //1.1
// box1.appendChild(h1);
// h1.textContent = "hello"

// // // //1.2
// let text = document.createTextNode("heloooo")
// box1.appendChild(h1).appendChild(text)


// // // //Node colone
// let box3 = box1.cloneNode(true);
// console.log(box3);




