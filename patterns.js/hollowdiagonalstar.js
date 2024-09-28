function hollowstar(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if((i==1||i==n)||(j==1||j==n)||(j==i)||(j==n-i+1)){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }
        }
        console.log();
    }
}
hollowstar(20);