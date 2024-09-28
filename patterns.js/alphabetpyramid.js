var alpahabet=65;
for(var i=1;i<=4;i++){
   var str=""
    for(var j=1;j<=i;j++){
        str+= String.fromCharCode(alpahabet);
    }
    console.log(str);
    alpahabet++;
}
