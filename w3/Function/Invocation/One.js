// function add(){
//     console.log('Hello world')
// }
// add()


// function add(a,b){
//     // console.log(a+b)
//     return a+b
// }
// console.log(add(20,30))

const Employee = {
    name:'Praveen',
    age:22,
    course:'Front end',
    lastName:'Kumar',
    fullName:function(){
        console.log( this.name +' ' +this.lastName)
    }
}
Employee.fullName()