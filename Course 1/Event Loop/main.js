console.log("1");

setTimeout(()=>{
    console.log("SetTimeout 1");
    Promise.resolve().then(()=>{
        console.log("Promise setTimeout")
    })
},0)

setTimeout(()=>{
    console.log("setTimeout 2")
},0)

Promise.resolve().then(()=>{
    console.log("promise 1")
})

Promise.resolve().then(()=>{
    console.log("Promise 2")
})

console.log("2")