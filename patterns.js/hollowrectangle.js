function hollowrectangle(n){
    for(let row=1;row<=n;row++){
        for(let col=1;col<=n;col++){
            if((row>1&&row<n)&&(col>1&&col<n)){
                process.stdout.write(" ")
            }
            else{
                process.stdout.write("*"
                    
                )
            }
        }
        console.log();
    }
    
    
}
hollowrectangle(10);
