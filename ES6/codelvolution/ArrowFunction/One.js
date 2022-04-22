// let getValue = function(){
//     let x=10;
//     return x;
// }

// const getValue = ()=>{
//     let x=10;
//     return x;
// }

// if we have single statement in the function

//const getValue = ()=> 10;
//const getValue = (m)=> 10*m;
//const getValue = m=> 10*m;
const getValue = (m,add)=> 10*m+add;

console.log(getValue(3,5));
console.log(typeof getValue);