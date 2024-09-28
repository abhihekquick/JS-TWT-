// // function printname(){
// //     console.log("this is the end");
// // }
// // printname();
// // printname();
// // function sumoftwo(num1,num2){
// //      return num1+num2;
// // }
// // sumoftwo(2,5);
// // const result=sumoftwo(2,3);
// // console.log(result);
// // ########functionexpersion
// // let myfun=function saymyname(){
// //     console.log("abhishek");
// // }
// // myfun();
// // ##########function anonymous########
// // let myfun=function(){
// //     console.log("anonymous");
// // }
// // myfun();
// // functions with perameters

// // let myfun=function sayhello(name ,age,ismarried){
// //     console.log("my name is ",name+" "+"age is "+age+" "+"I am married ",ismarried);

// // }

// // myfun("abhishek",27,)
// // ######################returnkeyword#########

// // //
// //

// // }
// // console.log(sum)
// // function nat(n){
// //     for( let i=1; i<=100; i++){
// //         if(i%2==0)
// //             console.log("even",i);

// //     }
// // }nat()
// //  var a="abhishek";
// //      for(let i=0; i<a.length ;i++ ){
// //          if(!(a[i]=='a'||a[i]=='i'||a[i]=='o'||a[i]=='o'||a[i]=='e'||a[i]=='u')){             console.log(a[i]);
// //          }

// //     }

// // let  a=Number(prompt("enter the value"));
// // let  b=Number(prompt("enter the value"));
// // for(let i=a;i<=b;i++){
// //     console.log(i);
// // }

// // let a="Abhishek";
// // console.log(a.length);
// // console.log(a [a.length-1]);
// // console.log(a [a.length]);


// for (let row = 1; row <= 7; row++) {
//     for (let col = 1; col<= 7; col++) {
//       if (row == 1) {
//         if (col == 1 || col >= 4) {
//           process.stdout.write("*");
//         } else {
//           process.stdout.write(" ");
//         }
//       } else if (row > 1 && row <= 3) {
//         if (col == 1 || col == 4) {
//           process.stdout.write("*");
//         } else {
//           process.stdout.write(" ");
//         }
//       } else if (row == 4) {
//         process.stdout.write("*");
//       } else if (row > 4 && row <= 6) {
//         if (col == 4 || col >= 7) {
//           process.stdout.write("*");
//         } else {
//           process.stdout.write(" ");
//         }
//       } else if (row == 7) {
//         if (col <= 4 || col == 7) {
//           process.stdout.write("*");
//         } else {
//           process.stdout.write(" ");
//         }
//       }
//     }
//     console.log();
//   }
  let obj={
    name:"abhishek",
    age:'25',
    class:'12th fail',
    details:()=>{
     let beta=()=>{
      console.log(this)
        
      }
      beta();

    }

    
  }
  console.log(obj.details());