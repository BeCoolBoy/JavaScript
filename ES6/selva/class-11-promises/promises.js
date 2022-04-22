// const P = new Promise((resolve,rejected)=>{
//     let a = 1+1;
//     if(a==2){
//         resolve('SUCCESS')
//     }else{
//         rejected('FAILED')
//     }
// }).then((response)=>{
//     console.log('This is then method ' + response)
// }).catch((err)=> console.log('This is catch method ' + err))

const P = new Promise((resolve,rejected)=>{
    let a = 1+1;
    if(a==3){
        resolve('SUCCESS')
    }else{
        rejected('FAILED')
    }
}).then((response)=>{
    console.log('This is then method ' + response)
}).catch((err)=> console.log('This is catch method ' + err))