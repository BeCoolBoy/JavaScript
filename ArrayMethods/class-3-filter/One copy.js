// filter() method will executes the array values by conditionally filtering
// it will add the element in new array
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

const Name = emp.filter((employee)=>{
    if(employee.age>=20){
        console.log(employee.age)
    }
})
console.log(Name)