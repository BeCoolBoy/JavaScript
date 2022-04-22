// class Car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
//     Age(){
//         return this.name + ' hi '+this.year;
//     }
// }
// const Obj1=new Car('altroz',2020);
// console.log(Obj1.Age())

// Find my age
class Karthik{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    GetAge(x){
        return x-this.year;
    }
}
const Obj1 = new Karthik('Karthik',1998);
console.log(Obj1.GetAge(2022))