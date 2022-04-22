const Car = {
    name:'Altroz',
    price:950000,
    brand:'tata'
}
// console.log(Car.brand);
// console.log(Object.values(Car))
//console.log(Object.keys(Car))

// for(obj in Object.entries(Car)){
//     console.log(obj)
// }

for(obj in Car){
    console.log(`${obj.keys}, ${obj.values}`)
}

