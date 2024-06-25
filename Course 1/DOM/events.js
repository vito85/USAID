//! ===================== Event ==============================

// //1

// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");

// function change(){
//     console.log("clicked");
//     h1.innerHTML = "changed from JS"
// }

//    button.addEventListener("click",change);


//onclick attribute
// https://www.w3schools.com/tags/ev_onclick.asp

//2.
// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// const input = document.querySelector("input");

// function change(){
//     h1.innerHTML = input.value
// }

//  button.addEventListener("click",change)


//3.
// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter",function(){
//     console.log("Mouse has enterd h1")
// })

// h1.addEventListener("mouseleave",function(){
//     console.log("Mouse has left h1")
// })

//4.

// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");

// h1.addEventListener("mouseenter",function(){
//     this.style.color = "red";
//     this.style.backgroundColor = "blue";
//     this.style.border = "1px solid green"
// })

// h1.addEventListener("mouseleave",function(){
//     this.style.color = "white";
//     this.style.backgroundColor = "yellow";
//     this.style.border = "1px solid green"
// })




//5.
// const divs = document.querySelectorAll("div");
// console.log(divs)

// for(let i = 0; i < divs.length; i++){
//     divs[i].addEventListener("click",function(){
//         console.log(this.getAttribute("id"))
//     })
// }



//5.1 Всплытие
//https://learn.javascript.ru/bubbling-and-capturing

// for(let i = 0; i < divs.length; i++){
//     divs[i].addEventListener("click",function(){
//         console.log(this.getAttribute("id"))
        
//     },true)
// }


//5.2
//Прекращение всплытия

//  const divs = document.querySelectorAll("div");
//  const link = document.querySelector("a");

// for(let i = 0; i < divs.length;i++){
//     divs[i].addEventListener("click",function(event){
//          console.log(event);
//          event.stopPropagation();
//          console.log(this.getAttribute("id"))
//     })
// }

//   link.addEventListener("click",linkClick)

// function linkClick(event){
//     event.preventDefault(); //Blocking default click handling
    
//     const div = divs[1];
    
//     div.style.display = div.style.display === "none"? "flex" :"none"
    
// }


//6.
//6.1
//  let p = document.querySelectorAll("p");

// for(let i = 0; i < p.length; i++){
//     p[i].addEventListener("click",function(event){
//         event.target.style.color = "blue"
//     })
// }
//but, when wh have an 100000 paragaphs this method is not useble

//6.2
// document.getElementById("wrapper")
// .addEventListener("click",function(event){
//     console.log(event.target.tagName);
// //1
//     let tagName = event.target.tagName.toLowerCase()
//     if(tagName === "p"){
//         event.target.style.color = "blue"
//     }
// //2
//     if(event.target.classList.contains("color")){
//         event.target.style.color = "red";
//     }
//  })


//!Справочник по событиям
// https://developer.mozilla.org/ru/docs/Web/Events




