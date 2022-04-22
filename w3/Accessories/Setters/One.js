const emp={
    name:'karthik',
    age:23,
    language:'',
    set lang(value){
        this.language=value
    }
}
emp.lang='English'
console.log(emp.language);