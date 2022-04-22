// const Person = {
//     firstname:'karthik',
//     lastname:'muneppa',
//     age:23,
//     color:'Pure black'
// }
// const {fname,lname,age,color}=Person;
// console.log(fname+ ' '+lname+' '+age+' '+color) // fname,lname/// these two will be undefined

//  const Person = {
//    firstname:'karthik',
//     lastname:'muneppa',
//     age:23,
//     color:'Pure black'
// }
// const {firstname,lastname,age,color}=Person;
// console.log(firstname+ ' '+lastname+' '+age+' '+color)// while destructuring an object the object key name sholud be same

// How many ways is there to create an object?

// We have 4 ways is there to create an object in javascript
// 1. String literal {}
// 2. new Keyword new
// 3. function constructor 
// 4. Object.Create()

let Person = new Object();

Person.name='karthik'
console.log(Person.name)