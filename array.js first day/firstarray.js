// const myarr=[1,2,3,4,5,"aman"];

// method of array#########
//1 push add value in the end of the array
// syntax myarr.push(10);
// method 2
// 2 pop remove value from the end of the array we can apply it many times on the array
//syntex myarr.pop();
// method 3
// unshift add value in the starting of the array;
// syntex myarr.unshift(66);
// method 4
// shift remove value from the start of the array ;
// syntex myarr.shift();
// some other methods
// indexOf helps us in showing the index number of the value which are in array
// includes helps us in showing the value that exist in array or not in the form of true or false;
// join method help us to convert the array into a string 
/*const var1=myarr.join();
console.log(var1);
console.log(typeof(var1));*/
 const newarr= new Array(1,2,3,4,5,6);

 const arrr=newarr.slice(0,3);
console.log(arrr);
console.log(newarr)

 arrr=newarr.splice(0,3);

console.log(arrr);

console.log(newarr)
//  console.log(newarr);


// console.log(newarr);
// console.log(myarr.indexOf(4));
// console.log(myarr.includes(5));

// ################
// traverse the array
// #######################

// let arr2=[1,3,5,6,7,8];
// for(let z=0;z<arr2.length;z++){
//     console.log(arr2[z]);
// }
// #########while loop traverse
// let p=0;
// while(p<arr2.length){
//     console.log(arr2[p]);
//     p++;
// }
// //######## do while loop traverse
// let f=0;
// do{
//     console.log(arr2[f]);
//     f++
// }while(f<arr2.length)
// ###############################################################NEW LOOPS
// for of loops;
// let arr4=[5,45,5,1,8,5];
// for(let a of arr4){
//     console.log(a);
// }
// ##############################
// forEach loop traverse
// let arrr5=[100,200,300,400,500];

// arrr5.forEach((maal)=>{

//     console.log(maal);
// }
 let arr=[1,3,4,5,6,6,7,8,9,10]
 let arr1=arr.slice(0,4);
 console.log(arr1);
 console.log(arr); 



