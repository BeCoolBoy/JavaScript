// const obj = {
//     name:'karthik',
//     age:23
// }
// console.log(obj)

// const obj = {
//     name:'karthik',
//     age:23
// }
// console.log(Object.keys(obj))//retuns objects keys
// console.log(Object.values(obj))//retuns objects values

const obj = {
    name:'karthik',
    age:23
}
const arr = Object.keys(obj);

for (const res of arr) {
    console.log(res)
}