// // // const score = 409;
// // // console.log(score);
// // // const balance= new Number(100);
// // // console.log(balance);
// // // console.log(balance.toString());
// // // console.log(balance.toFixed(1));
// // // const othernumber= 23.8966;
// // // console.log(othernumber.toPrecision(4));
// // // const hundreds=1000000;
// // // console.log(hundreds.toLocaleString('en-IN'));
// // // // mathhs#################

// // // let str='abhishek';
// // // let New= str.substring(0,5);
// // // let Nnew= str.replace('abhishek','golu');
// // // console.log(Nnew);
// // // console.log(New);
// // // console.log(str.indexOf('a'));
// // // console.log(str.includes('a'));
// // // console.log(str.toUpperCase());
// // // console.log(str.toLocaleLowerCase());

// // // Array####//////

// // let heroes=['a','b','c'];
// // let viliens=['d','e','f'];
// // let all=[...viliens,...heroes];
// // console.log(all);
// // let array1=[1,2,3,[4,5,6,[7,8,9,10]]];
// // console.log(array1.flat(Infinity));
// // let array2=[10,51,63,54,89,58,48,36,456];
// // console.log(array2);
// // array3=array2;
// // console.log(`a is ${array3.slice(0,4)}`);
// // console.log(array3);
// // let array4=[10,51,63,54,89,58,48,36,456]
// // console.log(`b is ${array4.splice(0,4)}`);
// // console.log(array4);

// // # object 
// const mysym=  Symbol("key1");
// const jsuser={
//     Name:"abhishek",
//     class:"3rd",
//     [mysym]:"myKey1",
//     Rollno:'4',
//     age:"18",
//     isPresent:"true",
//     lastdaypresent:["monday","tuesday",]
// }
// // console.log(jsuser.Name);
// // console.log( jsuser.mysym);

// jsuser.greeting= function(){
//     console.log(`hey my name is ${jsuser.Name}`);

// }
// console.log(jsuser.greeting());
    
// const tinderuser={}
// tinderuser.id="123454";
// tinderuser.Name="abhi";
// console.log(tinderuser);

const reguleruser={
    email:"abhishek@1233gmail.com",
    Name:{
        username:{
            firstname:"abhishek",
            lastname:"rajput"

        }
    }
}

console.log(reguleruser);