// 1. imaging we have a some object
let someobject ={
    width: 1000,
    height: 760,
    background: "yellow",
    font: {
        size: '20px',
        color: "white"
    }
};
// 1.2 now we what to send this object to server

// console.log(JSON.stringify(someobject));

// run code

// 2. if we recieve some info from server. So we can write  another method

console.log(JSON.parse(JSON.stringify(someobject)));

// before JSON we was use XML format.
// copy our json object and paste it in site
// https://www.freeformatter.com/json-to-xml-converter.html#ad-output
