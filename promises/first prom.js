const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // Dbcall,crpytography , network
  setTimeout(function () {
    console.log("Async task completed");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject){
    setTimeout(function (){
console.log("async task 2");
resolve()
 },1000);
}).then(function (){
    console.log("promis successfully consumed");

})

const promiseThree= new Promise(function (resolve,reject){
  setTimeout(function (){
    resolve({username:"abhi",email:"example@.com"})
  },1000);

})
promiseThree.then(function (user){
console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error= true;
    if(!error){
      resolve({username:"abhi",email:"example@.com"})
    }
    else{
      reject("Error:something went wrong");
    }
  },1000);
})
promiseFour.then((user)=>{
  console.log(user);
  return user.username
})
.then((username)=>{
console.log(username);
})
.catch((error)=>{
console.log(error);
})
.finally(()=>console.log("promise is done or pending"));
