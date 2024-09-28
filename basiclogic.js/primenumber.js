let num=2;
let nof=0;
let primecheck=(num)=>{


for (let div=2;div*div<=num;div++){
    if(num%div==0);
    nof=nof+1;
    break;

}
if(nof==0){
    console.log(" prime");

}
else{
    console.log ("not prime");
}

}

primecheck(num);