let nst=7;
let nsp=0;

for(let row=1; row<=4;row++){
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write( " ");
    }

for(let st=1;st<=nst;st++){
    process.stdout.write("*");
}
    console.log();
    nsp=nsp+1;
    nst=nst-2;
}


