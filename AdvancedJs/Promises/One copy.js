const myPromise = new Promise(function(resolved,rejected){
    let x=10;
    if(x===10){
        resolved('ok')
    }else{
        rejected('Failed')
    }
})
myPromise.then(
    function(res){
        console.log(res)
    },
    function(err){
        console.log(err)
    }
)

