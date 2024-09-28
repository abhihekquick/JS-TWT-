function decimaltoanybase(num,base ){
    let Ans=0;
    let pow=1;
    while(num
        
        
        >0){
        let rem=num%base;
         num=Math.floor(num/base);
         rem=pow*rem;
         Ans=Ans+rem;
         pow=pow*10;
         
    }
    return Ans;
}
let rv=decimaltoanybase(999,8);
console.log(rv);