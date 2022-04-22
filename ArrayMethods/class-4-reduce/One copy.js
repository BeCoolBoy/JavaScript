const number = [1,-1,2,3];

// let sum = 0;

// for(const b of number){
//     sum += b
// }

// console.log(sum)

// a=0 -- c=1 res=== a=1
// a=1 -- c=-1 res=== a=0
// a=0 -- c=2 res=== a=2
// a=2 -- c=3 res=== a=5
const res = number.reduce((accumulated,currentValue)=>{
    // return accumulated + currentValue
    return accumulated - currentValue
},0)

console.log(res) // result is 5