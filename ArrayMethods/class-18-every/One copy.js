// array.every(function(elemnt)) method takes in a function 
// which evaulates each elment 
// The every method is designed to check if all the elements
// in an array meet a specific condition 
// This condition is defined within your function

const number = [1,2,3,4,5,6,7,8,9,-1];
const everys = number.every((ever)=>{
    return ever>0
})
console.log(everys)

const number1 = [1,2,3,4,5,6,7,8,9];
const everys1 = number1.every((ever)=>{
    return ever>0
})
console.log(everys1)