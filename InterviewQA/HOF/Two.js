let colors = [
	{
		color: "red",value: "#f00"
	},
	{
		color: "green",value: "#0f0"
	},
	{
		color: "blue",value: "#fff"
	},
	{
		color: "cyan",value: "#fff"
	},
	{
		color: "magenta",value: "#fff"
	},
	{
		color: "yellow",value: "#ff0"
	},
	{
		color: "black",value: "#000"
	}
]

// for(let i=0;i<colors.length;i++){
//     console.log(colors[i])
// }

// colors.forEach(function(clr){
//     console.log(clr.color)
// });

colors.filter(
    function(e){
        return e.value=='#fff'
    }
).map(function(e){
    console.log(e)
})

//******************************** */

let numbers = [100,23];

function sub(total,dub){
    console.log(total - dub);
}

numbers.reduce(sub);