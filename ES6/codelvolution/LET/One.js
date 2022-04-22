// let is block scope we can invoke this inside any block
// outside the block invoking is not possible // it throw the error


// function Greet(name){
//     let res;
//     if(name==='karthik'){
//         res="hello karthik";
//     }else{
//         res="hi there";
//     }
//     console.log(res);
// }
// Greet('karthik');

// var a=1;
// var b=2;

// if(a===1){
//     var a=10;
//     // let is won't override the value 
//     // var can override the value /// it will override the value inside the function/class
//     let b=20;
//     console.log(a)
//     console.log(b)
// }
// console.log(a)
// console.log(b)

// var will allow re-declaration

var a=10;
var a=15;

console.log(a);

// let does not allow re-declations

let b=30;
let b=40;

console.log(b);