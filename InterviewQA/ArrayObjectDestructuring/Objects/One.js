const emp = {
    name:'karthik',
    sal:15000,
    address:{
        state:'andhrapradesh',
        city:'chittoor'
    }
}

// function employee(emp){
//     console.log(`Name: ${emp.name}, Salary: ${emp.sal}, Address: ${emp.address.city}, ${emp.address.state}`)
// }
// employee(emp);

function employee({name,sal,address:{state,city}}){
    console.log(`Name: ${name}, Salary: ${sal}, Address: ${city}, ${state}`)
}
employee(emp);