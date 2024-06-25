

// function foo(){
//     let count = 0
//     return function(){
//         count++
//         console.log(count)
//     }
// }

// let foo1 = foo()

// foo1()
// foo1()
// foo1()
// foo1()

function toDoo(arr) {
    let masiv = [];
    for(let i = arr.length - 1; i >= 0; --i){
        masiv.push(arr[i])
    }
    return masiv;
}

console.log(toDoo([1,2,3]))