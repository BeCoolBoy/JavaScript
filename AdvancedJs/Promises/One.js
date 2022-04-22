const clearRoom = function(){
    return new Promise(function(resolve,reject){
        resolve('Room cleaned')
    })
}
const removeGarbage = function(message){
    return new Promise(function(resolve,reject){
        resolve(message + 'Removed garbage')
    })
}
const iceCream = function(message){
    return new Promise(function(resolve,reject){
        resolve(message + 'Won iceCream!....')
    })
}

clearRoom().then(function(res){
    return removeGarbage(res);
}).then(function(res){
    return iceCream(res);
}).then(function(res){
    console.log('Finished ' + res)
})