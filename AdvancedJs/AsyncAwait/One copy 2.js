const testing = ()=>{
    return new Promise((resolved,rejected)=>{
        // let i=10;
        let i=1;
        if(i>5){
            resolved('success')
        }else{
            rejected('Failure')
        }
    })
}

// // only we will get success response
// async function test(){
//     let response = await testing()
//     console.log(response)
// }
// test()

// to get both success and error ... we need to use try{}catch(e){clg(e)}
async function test(){
    try{
        let response = await testing()
        console.log(response)
    }catch(err){
        console.log(err)
    }
}
test()