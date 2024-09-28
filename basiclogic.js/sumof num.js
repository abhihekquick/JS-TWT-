let num=6789;
let sum=0;
 while(num>0){
    let ld=num%10;
    sum=sum+ld;
     num=Math.floor(num/10);
 }
 console.log(sum);