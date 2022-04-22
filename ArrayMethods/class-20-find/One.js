// find() method returns the first element in the provided array that satisfies the provided testing function.
const names = [
    {
        name:'karthik',
        age:23
    },
    {
        name:'suresh',
        age:26
    },
    {
        name:'shankar',
        age:30
    }
];

const res = names.find((item)=>{
    return item.name==='suresh'
})
console.log(res)//result {name:'suresh',age:26}
console.log(names.find((item)=>{
    return item
}))
