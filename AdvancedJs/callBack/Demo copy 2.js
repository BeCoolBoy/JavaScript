let add = function(a,b){
    return a+b;
}
let divide = function(a,b){
    return a/b;
}
let multiply = function(a,b){
    return a*b;
}
const calc = function(num1,num2,callBack){
    console.log(callBack(num1,num2))
}
// calc(20,30,add)
// calc(2,30,multiply)
calc(2,30,function(a,b){return a-b})
