// let obj={
//     name:'karthik',
//     age:25
// }
// let obj2=obj;
// console.log(obj)
// console.log(obj2)

// let obj={
//     name:'karthik',
//     age:25
// }
// let obj2=obj;
// obj.name='muneppa karthik'
// console.log(obj)
// console.log(obj2)

let obj={
    name:'karthik',
    age:25
}
let obj2={...obj};
obj.name='muneppa karthik'
console.log(obj)
console.log(obj2)