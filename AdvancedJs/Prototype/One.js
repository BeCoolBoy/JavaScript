// prototype allows you to write method and properties inside the object constructor method

// function display(name,age){
//     this.name = name;
//     this.age = age;
// }

// const obj1=new display('karthik',23);
// const obj2=new display('suresh',26);
// const obj3=new display('shankar',30);
// console.log(obj1.name + ' ' + obj1.age)
// console.log(obj2.name + ' ' + obj2.age)
// console.log(obj3.name + ' ' + obj3.age)

// function display(name,age){
//     this.name = name;
//     this.age = age;
// }
// display.prototype.course = 'React JS'
// const obj1=new display('karthik',23);
// const obj2=new display('suresh',26);
// const obj3=new display('shankar',30);
// console.log(obj1.name + ' ' + obj1.age)
// console.log(obj2.name + ' ' + obj2.age)
// console.log(obj3.name + ' ' + obj3.age + ' ' + obj3.course)

function display(name,age){
    this.name = name;
    this.age = age;
}
display.prototype.course = 'React JS'
display.prototype.Details = function(){
    return this.name+' '+this.age+' '+this.course
}
const obj1=new display('karthik',23);
const obj2=new display('suresh',26);
const obj3=new display('shankar',30);
console.log(obj1.name + ' ' + obj1.age)
console.log(obj2.name + ' ' + obj2.age)
console.log(obj3.name + ' ' + obj3.age + ' ' + obj3.course)
console.log(obj1.Details())