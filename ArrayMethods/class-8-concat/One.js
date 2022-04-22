// the array concat() method will allow us to merge two or more array in one new array
const a = [1,2,3];
// const b = a.concat(4,5,6)
const b = a.concat(4,5,6,a)
console.log(b)