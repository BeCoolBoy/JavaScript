// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2))

// function add(a,b){
//     return a+b;
// }
// let arr = [1,2]
// console.log(add(arr,3))

// function add(a,b){
//     return a+b;
// }
// let arr = [1,2]
// console.log(add(...arr))

function add(a,b,...args){
    console.log(args)
    return a+b;
}
let arr = [1,2,3,4,5,6]
console.log(add(...arr))