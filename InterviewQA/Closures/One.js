
function outerFunction(outervariable){
    let outer2='hi';
    return function innerFunction(innervariable){
        console.log(outervariable)
        console.log(innervariable)
        console.log(outer2)
    }
    
}
let newFunction = outerFunction('outer');
newFunction('inner');