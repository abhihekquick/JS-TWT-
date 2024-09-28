
let a=1;
for(let i=1;i<=4;i++){
    let str=""
    for(let j=1;j<=i;j++){
        str=str+a;
        a=a+1;
    }
    console.log(str);
}