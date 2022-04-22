// object ascending order

const emp = [
    {
        name:'karthik',
        age:23,
        salary:10000
    },{
        name:'suresh',
        age:26,
        salary:40000
    },{
        name:'shankar',
        age:30,
        salary:60000
    },{
        name:'muneppa',
        age:50,
        salary:40000
    }
];

console.log(emp) // default order
// to make array of object ascending and descending order .. we need to create function

const ascending = emp.sort((a,b)=>{
    return a.salary - b.salary
})
console.log(ascending)

const descending = emp.sort((a,b)=>{
    return b.salary - a.salary
})
console.log(descending)

