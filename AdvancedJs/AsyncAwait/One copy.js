// const myPromise = new Promise(function(resolved,rejected){
//     // let i=10;
//     let i=1;
//     if(i>5){
//         resolved('Yes ok')
//     }else{
//         rejected('Not ok')
//     }
// })

// myPromise.then(function(res){
//     console.log(res)
// }).catch(function(err){
//     console.log(err)
// })

const testing=function(){
    let myPromise = new Promise(function(resolved,rejected){
        let i=10;
        if(i>5){
            resolved('success')
        }else{
            rejected('Failed')
        }
    })
    return myPromise;
}

async function test(){
    let response = await testing()
    console.log(response)
}
test()