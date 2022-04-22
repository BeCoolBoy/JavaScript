// const person={
//     name:'karthik',
//     age:23,
//     Detali:function(){
//         return this.name+' '+this.age
//     }
// }
// console.log(person.Detali())

const person={
    name:'karthik',
    age:23,
    Detali:function(){
        return (this.name+' '+this.age).toLocaleUpperCase();
    }
}
console.log(person.Detali())

