const connectpromise= new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("connecting........")
        resolve();
    },1000 );
})   
connectpromise.then(function(){
    console.log("Connected to dice");
})
const courseExplore= new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("courseExplore......")
        resolve()

    },2000)
})
courseExplore.then(function(){
    console.log("exploring....")
})





