var alpahabet=65;
for(var i=1;i<=4;i++){
    str=""
    for(var j=1;j<=i;j++){
        str+= String.fromCharCode(alpahabet);
        alpahabet++;
    }
    console.log(str);

    
}