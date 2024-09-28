// Ans1 Entry control are the loops that control the statement in the begginning of the code for eg for loop: for(let i=0; i<=1; i++) and while loop

// Exit control are the loops that control the statement after running the code for one time the control the code after exit for example: do while loop
/*
let i=0;
text=1
do{
text=text+i;
i++;

}
while(i<=1);
*/

// ################################################################################
// Ans7
function anybasetodecimals(num, base) {
  let ans = 0;
  let pow = 1;
  while (num > 0) {
    let rem = num % 10;
    num = Math.floor(num / 10);
    rem = rem * pow;
    ans = ans + rem;
    pow = pow * base;
  }
  return ans;
}
function decimaltoanybase(num, base) {
  let Ans = 0;
  let pow = 1;
  while (num > 0) {
    let rem = num % base;
    num = Math.floor(num / base);
    rem = pow * rem;
    Ans = Ans + rem;
    pow = pow * 10;
  }
  return Ans;
}
function anybasetoanybase(num1, base1, base2) {
  let decimalnumber = anybasetodecimals(num1, base1);
  let finalnumber = decimaltoanybase(decimalnumber, base2);
  console.log(finalnumber);
}
anybasetoanybase(72, 19, 8);

// #################################
// Ans8
function anybaseplus(base, num1, num2) {
  let ans = 0;
  let c = 0;
  let pow = 1;
  while (num1 > 0 || num2 > 0 || c > 0) {
    let num1ld = num1 % 10;
    let num2ld = num2 % 10;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    let d = num1ld + num2ld + c;
    c = Math.floor(d / base);

    d = d % base;
    ans += d * pow;
    pow = pow * 10;
  }
  return ans;
}

let sum = anybaseplus(8, 44, 99);
console.log(sum);

// ###########################################################################
// Ans6
let num = 2;
let nof = 0;
let primecheck = (num) => {
  for (let div = 2; div * div <= num; div++) {
    if (num % div == 0);
    nof = nof + 1;
    break;
  }
  if (nof == 0) {
    console.log(" prime");
  } else {
    console.log("not prime");
  }
};

primecheck(num);

// ###############################################################################
// ans5
let nsp = 1;
let nst = 4;
for (let row = 1; row <= 4; row++) {
  for (let sp = 1; sp <= nsp; sp++) {
    process.stdout.write(" ");
  }
  for (let st = 1; st <= nst; st++) {
    process.stdout.write("*");
  }
  console.log();
  nsp = nsp + 1;
  nst = nst - 1;
}


// ##############################################################################
// Ans2
/*
Q2.
for (let i=1;i<=3;i++){
    for(j=1;j<=3;j++){
        if(i==j)continue;
        console.log(i+j);}
}
// Ans2        
dry run of Q2
 let i=1;
i<=3, 1<=3 true
 j=1;
j<=3,1<=3 true
 i==j,1==1 true  
continue;
  j++ j=2;
2<=3 true;
 1!==2
console.log(1+2)
output is 3
again
  j++ j=3,3<=3 true
 i==j
 1!==3
 console.log(1+3)
 output is  4
 j++ j=4
4<=3 false


i++ i=2
i<=3,2<=3,true
 j=1;
j<=3,1<=3 true
 i==j,2!==1   
console.log(2+1);
 output is 3
  j++ j=2;
2<=3 true;
 2==2
continue;

again
   j++ j=3,3<=3 true
 i==j
 2!==3
 console.log(2+3)
 output is 5
 
i++ i=3
i<=3,3<=3,true
 j=1;
j<=3,1<=3 true
l12 i==j,3!==1   
console.log(3+1);
 output is 4
l11  j++ j=2;
2<=3 true;
l12 3!==2
 console.log(3+2)
  output is 5;
again
  j++ j=3,3<=3 true
 i==j
 3==3
continue;
 j++ j=4
4<=3 false
final output is 
3
4
3
5
4
5
*/

// ###############################################################################

/*
Q3.
let found=false;
for(i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        if(i*j>4){
            found=true;break;
        }
        console.log(i.j);
    }
    if(found)break;
}
// Ans3
dry run  of Q3


let found=false;
 i=1 
1<=3 true
 let j=1; 
 1<=3 true
 i*j>4,(1*1)>4=1 false
found =false


 let j=2; 
 2<=3 true
 i*j>4,(2*1)>4=2 true
found =true
break;
 let j=3; 
 3<=3 true
 i*j>4,(3*1)>4=3 true
found =true
break;
 let j=4; 
 4<=3 false

 i=2
2<=3 true
 let j=1; 
 1<=3 true
 i*j>4,(2*1)>4=2 true
found =true
break;
 let j=2; 
 2<=3 true
 i*j>4,(2*2)>4=4  false
found =false
  console.log(2.2)
output is 2 2
 found = false 
break;

let j=3; 
 3<=3 true
 i*j>4,(2*3)>4=6 false
found =false
 console.log(2.3)
output is 2 3
 found = false 
break;
let j=4; 
 4<=3 false

 i=3
3<=3 true
 let j=1; 
 1<=3 true
 i*j>4,(3*1)>4=3 true
found =true
break;
 let j=2; 
 2<=3 true
 i*j>4,(3*2)>4=6 false
found =false
  console.log(3.2)
output is 3 2
 found = false 
break;

let j=3; 
 3<=3 true
 i*j>4,(3*3)>4=9 false
found =false
 console.log(3.3)
output is  3 3
 found = false 
break;
 let j=4; 
 4<=3 false
final output is
2 2
2 3
3 2
3 3
*/
// ############################################################################
/*
Q4.

let pattern='';
for(let i=1;i<=5;i++){
for(let j=1;j<=i;j++){
pattern+='*'
}
pattern+='\n';
}
console.log(pattern);
 
dryrun of Q4
 l198 pattern='';
 l199 let i=1,
 i<=5, 1<=5 true
 l200 j=1 
 j<=i,1<=1 true
 
 j++, j=2
 2<=1 false
 l201 pattern+='*'
 l203 pattern+='\n';



 l199  i++ i=2,
  i<=5, 2<=5 true
 l200  j=2
 j<=i,2<=2 true
 l201 pattern+='+'
 j++, j=3
 3<=2 false
 l203 pattern+='\n';


 l199  i++ i=3,
 i<=5, 3<=5 true
 l200  j++ j=3
 j<=i,3<=3 true
 l201 pattern+='++*'
 j++, j=4
 4<=3 false
 l203 pattern+='\n';


 l199 i++  i=4,
 i<=5, 4<=5 true
 l200  j++ j=4
 j<=i,4<=4 true

 l201 pattern+='*'
 j++, j=5
 5<=4 false

 l203 pattern+='\n';


 l199 i++ i=5,
 i<=5, 5<=5 true
 l200  j++ j=5
 j<=i,5<=5 true
 l201 pattern+='*'
 j++, j=6
 6<=5 false

 l203 pattern+='\n';
 i++,i=6
 i<=5,6<=5 false
 l194 console.log(pattern)

 
 
 final output
 *
 **
 ***
 ****
 *****

*/

let a="abhishek";
for(let i=0; i<=a.length;i++){
  if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'){
    console.log(a[i]);
  }
}
// ##################################################
let number=2345;
rev=0;
while(number>0){
  let temp=number%10;
  rev=rev*10+temp;
  number=Math.floor(number/10);
}
console.log(rev);
// ##############################
let numm=777;
let plus=0;
while(numm>0){
  let ld=numm%10;
  plus=plus+ld;
  numm=Math.floor(numm/10);
}
console.log(plus);
// ##############################################
let nummm=5555;
let nod=0;
while(numm>0){

  nummm=Math.floor(nummm/10);
  nod=nod+1;
}
console.log(nod);
