const arr = [1,2,3,4];
const filtered = arr.filter((value)=>{
    if(value>2){
        return value;
    }
})
console.log(filtered)