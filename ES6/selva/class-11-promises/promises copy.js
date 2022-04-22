const person = false;
const P = new Promise((resolve,rejected)=>{
    if(person){
        resolve('SUCCESS')
    }else{
        rejected('FAILED')
    }
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})