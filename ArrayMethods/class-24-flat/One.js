// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr = [1,[2,[3,[4,[5]]]]];
console.log(arr)
// const arrange = arr.flat();
// console.log(arrange)

// const  arrange = arr.flat(5);
// console.log(arrange)

const arrange = arr.flat(Infinity);
console.log(arrange)