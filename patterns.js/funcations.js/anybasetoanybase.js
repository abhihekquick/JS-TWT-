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


function anybasetoanybase(num1,base1,base2){
    let decimalnumber=anybasetodecimals(num1,base1);
    let finalnumber=decimaltoanybase(decimalnumber,base2);
    console.log(finalnumber);



}
anybasetoanybase(67,8,2);
  
