// find() method returns the first element in the provided array that satisfies the provided testing function.

const arr = [1,2,3,4];
const ind = arr.findIndex((item)=>{
    return item>3
})
console.log(ind)// result is  3

const name = ['karthik','suresh','shankar'];
const ind1 = name.findIndex((item)=>{
    return item==='karthik'
})
console.log(ind1) // result is 0

const obj = [
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
]
const ind3 = obj.findIndex((item)=>{
    return item.age===26
})
console.log(ind3)