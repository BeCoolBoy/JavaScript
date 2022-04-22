// let greet = function(inu){return `Hello ${inu}`};

// function Name(f_name,l_name,greet){
//     let fullName = f_name+l_name;
//     console.log(greet(fullName))
// }
// Name('m','karthik',greet);

let Greet = function(initial){
    console.log(`Hello ${initial}`);
}

function NameEMP(f_name,l_name,callback){
    let res = f_name+l_name;
    callback(res)
}
NameEMP('krthik','m',Greet);