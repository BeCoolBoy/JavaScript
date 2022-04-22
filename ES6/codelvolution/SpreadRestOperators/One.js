let Dcolors = function(){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}
Dcolors('red')
Dcolors('red','blue')
Dcolors('red','blue','green ')