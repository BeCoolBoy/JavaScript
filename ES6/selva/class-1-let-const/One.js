// if(1==1){
//     var a=10;
// }
// console.log(a)// VAR get success because of it is an global scope

// if(1==1){
//     let a=10;
// }
// console.log(a)//let error because of it is an block scope

if(1==1){
    const a=10;
}
console.log(a)//const error because of it is an block scope


//// const and let is block scope.....
//// var is an global scope....