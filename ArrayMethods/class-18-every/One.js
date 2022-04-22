// array.every(function(elemnt)) method takes in a function 
// which evaulates each elment 
// The every method is designed to check if all the elements
// in an array meet a specific condition 
// This condition is defined within your function

const arr = [20,30,40,50];
const ev = arr.every((e)=>{
    return e>=20;
})
console.log(ev)//true

const arr1 = [20,5,65,865,55];
const ev1 = arr1.every((e)=>{
    return e>10;
})
console.log(ev1)//false