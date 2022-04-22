 const Alphabets = ['a','b','c','d','e','f','g','h'];
 const Numbers = [1,2,3,4,5,6,7,8,9];

// const NewArray = [Alphabets,Numbers];
// console.log(NewArray);

// const NewArray = [...Alphabets,...Numbers];
const NewArray = Alphabets.concat(Numbers);
console.log(NewArray);