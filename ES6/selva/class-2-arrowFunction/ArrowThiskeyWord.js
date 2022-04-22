// this keyword will refers to the current object

// const car = {
//     name:'audi',
//     price:322552,
//     color:'red',
//     display:function(){
//         console.log('hi')
//     }
// }
// car.display()

// const car = {
//     name:'audi',
//     price:322552,
//     color:'red',
//     display:function(){
//         console.log(price)
//     }
// }
// car.display() //will get error

// const car = {
//     name:'audi',
//     price:322552,
//     color:'red',
//     display:function(){
//         console.log(car.price)
//     }
// }
// car.display() // will get result

// const car = {
//     name:'audi',
//     price:322552,
//     color:'red',
//     display:function(){
//         console.log(this.price)
//     }
// }
// car.display() // result

// const car = {
//     name:'audi',
//     price:322552,
//     color:'red',
//     display:()=>{
//         console.log(this.price)
//     }
// }
// car.display() // throws undesined

const car = {
    name:'audi',
    price:322552,
    color:'red',
    display:()=>{
        const Name = this.name;
        console.log(Name)
    }
}
car.display()

