let nsp=1;
let nst=5;


for(row=1;row<=5;row++){

    for(sp=1;sp<=nsp;sp++){
        process.stdout.write(" ") 
    }

    for(st=1;st<=nst;st++){
        process.stdout.write("*")
    }
    console.log();
    nst=nst-1;
    nsp=nsp+1;
  
}