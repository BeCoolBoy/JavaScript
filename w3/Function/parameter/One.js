// Default parameters

// function add(a=10){
//     console.log(a)
// }
// add()

// function add(a){
//     console.log(a)
// }
// add()

// // Number parameter
// function add(a){
//     console.log(a)
// }
// add(10)

// // String parameter
// function add(a){
//     console.log(a)
// }
// add('karthik')

// // Array parameter
// function add(arr){
//     console.log(arr)
// }
// add([1,2,3,4,5,6])

// // Object parameter
// function add(arr){
//     console.log(arr)
// }
// add({name:'karthik',age:23})

// // Callback parameter
// function display(){
//     console.log('Callback')
// }
// function add(Callback){
//     console.log(Callback())
// }
// add(display)

// Callback parameter
function display(){
    console.log('Display function')
}

function add(dis){
    console.log('Add function')
    return dis()
}
add(display)

