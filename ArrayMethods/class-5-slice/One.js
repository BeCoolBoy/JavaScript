const months = ['jan','feb','mar','aprl','may','june','july'];

// console.log(months) // it will return all the array elements

// 1. How can i return an array element in between number?
// a) using slice() method we can filter the array element in between the numbers

// const res = months.slice(1,3); // Here 1 after Tiil the 3 // res feb,mar
// console.log(res)

// Negative value slice the opposite direction
const res = months.slice(-3,-1); // Here 1 after Tiil the 3 // res may,june
console.log(res)

console.log(months.slice(2)) // single value will take after the number 
