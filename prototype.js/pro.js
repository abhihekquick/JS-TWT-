let myhero=["thor","spiderman"];
let heropower={
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.abhishek=function(){
    console.log(`abhishek is present in all objects`)
}
Array.prototype.heyabhishek=function(){
    console.log(`daddy is here`);
}
heropower.abhishek()
myhero.abhishek()
myhero.heyabhishek()


const user={
    name:"abhi",
    email:"abhi@gmail.com",
}

const teacher={
    makevideo:true
}
const techsupport={
    isavalable:false
}
const TA={
    assignment:'js',
    fulltime:true,
    __proto__:techsupport
}
techsupport.__proto__=user

Object.setPrototypeOf(techsupport,teacher)

let anotherusername="Abhishekrajput     ";
String.prototype.truelenght=function(){
    console.log(`truelength is ${this.trim().length}`);
}
anotherusername.truelenght()

 