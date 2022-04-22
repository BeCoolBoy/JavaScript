// let arr = [1,2,3,4];
// let arr1 = arr;//deep copy
// console.log(arr)
// console.log(arr1)

// let arr = [1,2,3,4];
// let arr1 = arr;//deep copy
// arr1[0]=20;
// console.log(arr)
// console.log(arr1)

// while updating non-primitive data types ...the value is updating to both arr anb arr1 array

let arr = [1,2,3,4];
let arr1 = [...arr];//shallow copy
arr1[0]=20;
console.log(arr)
console.log(arr1)
