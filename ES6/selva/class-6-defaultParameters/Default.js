// const Add = function(x,y){
//     console.log(x+y)
// }
// Add(10,40) //result

// const Add = function(x,y){
//     console.log(x+y)
// }
// Add()/// error NaN 

// Default parameters

// const Add = function(x,y){
//     let a=x||5;
//     let b=y||15;
//     console.log(a+b)
// }
// Add();//result 50

// const Add = function(x,y){
//     let a=x||5;
//     let b=y||15;
//     console.log(a+b)
// }
// Add(60,40);//result 100


const Add = function(x=20,y=30){
    console.log(x+y)
}
Add();//result 