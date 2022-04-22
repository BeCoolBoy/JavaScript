const emp = {
    name:'karthik',
    sal:15000,
    address:{
        state:'andhrapradesh',
        city:'chittoor'
    }
}
const emp2 = {
    age:23
}

// const {name,age} = {...emp,...emp2};

// console.log(name);
// console.log(age);

const employee = {...emp,...emp2};

console.log(employee);