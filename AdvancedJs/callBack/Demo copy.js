const x = function(){
    console.log('I am coming from callBack function')
}
const y = function(callBack){
    console.log('Do something')
    callBack()
}
y(x)