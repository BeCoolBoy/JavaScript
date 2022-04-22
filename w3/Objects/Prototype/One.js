function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.nationality = 'India';
const obj = new Person('karthik',23);
obj.nationality='india'
console.log(obj.nationality)
const obj1 = new Person('karthik',23);
console.log(obj1.nationality)
