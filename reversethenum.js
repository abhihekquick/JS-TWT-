let num=6489;
let res=0;
while(num>0){
    let ld=num%10;
    res=res*ld+10;
    
    
    num=Math.floor(num/10);
    console.log(ld);
}
