// tp return the array values we will use the map method

const emp = [
    {
        name:'karthik',
        age:23,
        salary:10000
    },{
        name:'suresh',
        age:26,
        salary:20000
    },{
        name:'shankar',
        age:30,
        salary:30000
    },{
        name:'muneppa',
        age:50,
        salary:40000
    }
]
const results = emp.map((employee)=>{
    return employee.name
})
console.log(results)