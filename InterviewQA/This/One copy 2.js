// const Video = {
//     title:'a',
//     play(){
//         console.log(this)
//     }
// }
// Video.stop=function(){
//     console.log(this)
// }
// Video.play();

const Video = {
    title:'a',
    play(){
        console.log(this)
    }
};
Video.stop=function(){
    console.log(this)
};
Video.stop();