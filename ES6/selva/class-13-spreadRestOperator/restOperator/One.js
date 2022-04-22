function add(a,b,...args){
    console.log(args)
    return a.age+b.age;
}
let obj = [
    {
        age:25
    },
    {
        age:30
    }
]
console.log(add(...obj))