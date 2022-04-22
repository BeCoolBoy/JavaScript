// join() method creates and returns new string by cancatinating all of the elements in array..
const colors = ['red','blue','green'];
console.log(colors)// default
console.log(colors.join())// it will concatinate all the array value in an sinlge value
console.log(colors.join(''))// specify how you want to seperate an single array values result: redluegreen
console.log(colors.join('-'))// result : red-blue-green
console.log(colors.join(' = '))// result: red=blue=green