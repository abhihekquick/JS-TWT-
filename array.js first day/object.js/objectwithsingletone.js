// const tinderUser=new Object();this is singletone object
const tinderUser={};
tinderUser.id="786"
tinderUser.name="kush"
tinderUser.email="kush@gmail.com"
// console.log(tinderUser);
const regularUser={
    email:"somee123@gmail.com",
    fullname:{
        userfullname:{
            firtname:"abhishek",
            lastname:"rajput"
        }

    }
}
 console.log(regularUser.fullname.userfullname.firtname);
const obj1={1:"a",2:"b"};
const obj2={2:"a",4:"b"};
const obj3={5:"a",6:"b"};
obj4={obj1,obj2,obj3};
// console.log(obj4);


const obj5= Object.assign({},obj1,obj2,obj3);
// console.log(obj5);


const obj6={...obj1,...obj2,...obj3};
// console.log(obj6);
const users=[
    {
        id:1,
        Email:"abc@gmail.com"
    },
    {
        id:1,
        Email:"abc@gmail.com"
    },
    {
        id:1,
        Email:"abc@gmail.com"
    },
]
users[1].Email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));

