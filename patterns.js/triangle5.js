let nsp=4;
let nst=1;

for(let row=1;row<=9;row++){
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ");

    }
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")
    }
   
    if(row<5){
        nsp=nsp-1;
        nst=nst+2;

    }
    else{
        nsp=nsp+1;
        nst=nst-2;
    }

    console.log();
}
