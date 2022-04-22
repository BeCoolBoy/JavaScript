let Numbers = [1,2,3,4,5];

// default looping
// for(let i=0; i<Numbers.length;i++){
//     console.log(Numbers[i])// result 12345
// }  

// Reverse looping
// for(let i=5; i>0;i--){
//     console.log(i)// result 12345
// } 

for(let i=Numbers.length-1; i>=0;i--){
    console.log(Numbers[i])// result 12345
}