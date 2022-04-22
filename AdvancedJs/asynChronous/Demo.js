// asynchronous means .. calling or displaying data after certain time

const disPlay = function(num1,num2,callBack){
    console.log('.......Calculating your result')
    setTimeout(function(){
        console.log(callBack(num1,num2))
    },3000)
}
console.log(disPlay(20,80,function(a,b){return a+b}))