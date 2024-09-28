let nsp=4;
let nst=1;

for(let row=1;row<=10;row++){
    for(let st=1;st<=nst;st++){
        process .stdout.write("*")
    }
    for(let sp=1;sp<=nsp;sp++){
        process .stdout.write(" ")
    }
    console.log();
    if(row<5){
        nsp=nsp-1;
        nst=nst+1;
    }
    else{

        nsp=nsp+1;
        nst=nst-1;
    }
}