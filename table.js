// let i=1;
// while(i<=100){
//     if(i%2==0){
//         console.log("even",i);
//     }
//     else{
//         console.log("odd",i);
//     }
//     i++;


   
    
// }
for(row=1;row<=5;row++){
    for(colume=1;colume<=5;colume++){
        if(row==colume){
            process.stdout.write("*")

        }
        else{
            process.stdout.write("")
        }
    }
    console.log();
}