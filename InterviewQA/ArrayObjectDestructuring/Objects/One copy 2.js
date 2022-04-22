const emp = {
    name:'karthik',
    sal:15000,
    address:{
        state:'andhrapradesh',
        city:'chittoor'
    }
}

const {address:{state,city}} = emp;

console.log(state);
console.log(city);