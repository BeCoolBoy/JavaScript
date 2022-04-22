// const Video = {
//     title:'a',
//     play(){
//         console.log(this)
//     }
// };
// function playVideo(){
//     console.log(this)
// }
// playVideo();

const Video = {
    title:'a',
    play(){
        console.log(this)
    }
};
function Videos(title){
    this.title = title;
    console.log(this)
}
new Videos('hello'); // new operator will create new empty object like {}