// some() method return every array elements
// it will accepts one callback function
// in this function whatever user is giving that value will check in the array elements
// it will return true/false value BOOLEAN

const arr = [10,20,30,40,50,60];
const sm = arr.some((item)=>{
    return item>50
})
console.log(sm)// true

const arr1 = [10,20,30,40,50,60];
const sm1 = arr1.some((item)=>{
    return item>60
})
console.log(sm1)// false