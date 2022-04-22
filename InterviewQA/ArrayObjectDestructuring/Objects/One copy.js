const emp = {
    name:'karthik',
    sal:15000,
    address:{
        state:'andhrapradesh',
        city:'chittoor'
    }
}

// console.log(emp.address.city)

//const {name,sal} = emp;
const {name:f_name,sal,age=23,...rest} = emp;
console.log(f_name);
console.log(sal);
console.log(age);
console.log(rest);