const cleanMyroom = new Promise(function(resolve,reject){
    // cleaning the room
    // let isClean = true;
    let isClean = false;
    if(isClean){
        resolve('Cleaned') //success
    }else{
        reject("Sorry i could not cleaed") //failures
    }
})

cleanMyroom.then(function(res){
    console.log('Room is ' + res)
}).catch(function(err){
    console.log(err)
})
console.log(cleanMyroom)