// find() method returns the first element in the provided array that satisfies the provided testing function.
const names = ['karthik','suresh','shankar'];
const res = names.find((item)=>{
    return item==='karthik'
});
console.log(res)// true === karthik

const number = [1,2,3,4,5,6];
const res1 = number.find((item)=>{
    return item>3
})
console.log(res1) // it will returns only one value 3 greTER THAN 4,5,6 IS THERE then also it is returning only one value (-- 4 --)

