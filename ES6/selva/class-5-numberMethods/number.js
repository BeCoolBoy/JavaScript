// console.log(Number.isInteger(2)) //true
// console.log(Number.isInteger(2.2))//false its float value
// console.log(Number.isSafeInteger(2.2))//false its float value it will checks exact result

const a = 10;
console.log(Number.isInteger(a))
const b = '10';
console.log(Number.isInteger(b))
const c = 10.5;
console.log(Number.isInteger(c))