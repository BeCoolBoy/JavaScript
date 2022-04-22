const Person = {
    fname:'karthik',
    lname:'m',
    fullname:function(){
        return this.fname + ' '+this.lname;
    }
}
const Member = {
    fname:'Praveen',
    lname:'k'
}
const Fullname = Person.fullname.bind(Member);
console.log(Fullname())