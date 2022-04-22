const number = [1,-1,2,3];

// a=1, c=-1 res==== a=0
// a=0, c=2 res==== a=2
// a=2, c=-3 res==== a=5    
const res = number.reduce((accumulate,currentValue)=>{
    return accumulate + currentValue;
})
console.log(res) //5