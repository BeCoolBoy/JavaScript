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

// const Video = {
//     title:'a',
//     tags:['a','b','c'],
//     showTags(){
//         // console.log(this.tags)
//         this.tags.forEach(function(tgs){
//             console.log(this.title, tgs)
//         })
//     }
// };
// Video.showTags();

// const Video = {
//     title:'a',
//     tags:['a','b','c'],
//     showTags(){
//         // console.log(this.tags)
//         this.tags.forEach(function(tgs){
//             console.log(this, tgs) // here this will refer window object
//         })
//     }
// };
// Video.showTags();

// const Video = {
//     title:'a',
//     tags:['a','b','c'],
//     showTags(){
//         this.tags.forEach(function(tgs){
//             console.log(this,tgs) // here this will refer window object
//         },this)
//     }
// };
// Video.showTags();

const Video = {
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tgs){
            console.log(this.title,tgs) // here this will refer window object
        },this)
    }
};
Video.showTags();

