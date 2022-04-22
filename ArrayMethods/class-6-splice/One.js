// splice() method add or removes from an array element

const number = [1,2,3,4,5]

// here first parameter is where to sart
// here second parameter is how many array values should be remove
console.log(number.splice(2, 3)) // res 3,4,5 /// removed array values
console.log(number)// remaining array values

// add values
// here first parameter is where to sart
// here second parameter is how many array value should be remove
// from third all parameter is to be add
const add = number.splice(2,0,6,7,8,9)
console.log(number) // result newly added 6,7,8,9
