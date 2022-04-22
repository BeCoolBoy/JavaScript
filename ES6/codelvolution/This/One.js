// const emp = {
//     id:1,
//     getVal(){
//         return this.id;
//     }
// }

// const emp = {
//     id:1,
//     getVal(){
//         console.log(this.id);
//     }
// }

// const emp = {
//     id:1,
//     getVal(){
//         setTimeout(function(){
//             console.log(this.id);
//         },1000)
//     }
// }

// const emp = {
//     id:1,
//     getVal(){
//         let self = this;
//         setTimeout(function(){
//             console.log(self.id);
//         },1000)
//     }
// }

// with arrow function

const emp = {
    id:1,
    getVal(){
        setTimeout(()=>{
            console.log(this.id);
        },1000)
    }
}

emp.getVal()