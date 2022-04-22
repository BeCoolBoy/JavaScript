const clearRoom = function(){
    return new Promise(function(resolve,reject){
        resolve('Room cleaned')
    })
}
const removeGarbage = function(){
    return new Promise(function(resolve,reject){
        resolve('Removed garbage')
    })
}
const iceCream = function(){
    return new Promise(function(resolve,reject){
        resolve('Won iceCream!....')
    })
}

clearRoom().then(function(res){
    console.log(res)
    return removeGarbage();
}).then(function(res){
    console.log(res)
    return iceCream();
}).then(function(res){
    console.log(res)
    console.log('Finished')
})