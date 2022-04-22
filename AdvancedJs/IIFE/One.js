// (IIFE) Immediate invoke function exception
// this is a one type of function
//syntax (function(){
    
// })();

// (function(){
//     console.log('HI')
// })();

// (myFavourite = function(){
//     console.log('My favourite function');
// })();
// myFavourite()

// (myFavourite = function(){
//     console.log('My favourite function');
// })();

// (myFavourite = function(num = 3){
//     console.log('My favourite function ' + num);
// })();

// (()=>{
//     var a=10;
//     console.log(a)
// })()
// console.log(a) // get error undefine

let a=20;
(()=>{
    let a=10
    console.log(a)
})()
console.log(a)
