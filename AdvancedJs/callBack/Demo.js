// checking callback function is function or any other data type..
const calc = function(num1,num2,callBack){
    if(typeof callBack === 'function'){
        console.log(callBack(num1,num2))
    }
}
calc(2,30,function(a,b){return a+b})
