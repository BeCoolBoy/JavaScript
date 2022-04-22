// Array.from() it adds string or numbers to arrays

const name = 'karthik';
const arr = Array.from(name);
console.log(arr)
console.log(arr.length)

// remove duplicate value from an number array 

const number = [1,2,3,3,4,5,6,2,6];
const res = new Set(number)
console.log(res)
const arrnew = Array.from(res)
console.log(arrnew)

// remove duplicate value from an string array 

const Names = ['karthik','suresh','shankar','karthik','seenu','seenu'];
const removeDup = new Set(Names);
console.log(removeDup)
console.log(Array.from(removeDup))
