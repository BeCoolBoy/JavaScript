const greet = function(name){
    console.log('Hello', name);
}

const Welcome = function(age,callback){
    const Employee = age + 'karthik';
    callback(Employee)
}
Welcome(23,greet); 