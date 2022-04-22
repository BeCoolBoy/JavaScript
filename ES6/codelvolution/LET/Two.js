// for(var i=1;i<=5;i++){
//     console.log(i);
// }

// var overriding
// for(var i=1;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1000)
// }

// let it does not override
for(let i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}

