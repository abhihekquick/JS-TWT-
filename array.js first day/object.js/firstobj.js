// Singletone;
// object literals
// object.create is constructer method for oject type is singletone;
const mysym=Symbol("key1")
const user={
    name:"abhishek",

    [mysym]:"mykey1",
    "full name":"abhi rajput",
    age:19,
    loction:"faridabad",


}
console.log(user.name);
console.log(user["loction"]);
console.log(user["full name"]);
console.log(user[mysym]);
console.log(typeof user[mysym]); 

user. name="golu"
// Object.freeze(user) 
user.name="shake";
console.log(user);
user.greeting=function(){
    console.log("hey buddy");
}
console.log(user.greeting());
user.greet=function(){
    console.log(`hey buddy,${this.name}`);
}
console.log(user.greet());