// // // for(let row=1;row<=5;row++){
// // //     for(let i=1;i<=row;i++){
// // //     process .stdout.write(" "+"*");
// // //     }
// // //     console.log();
// // // }
// // // //###########################################################################
// // // for(let row=1;row<=5;row++){
// // //     for(let i=5;i>=row;i--){
// // //         process .stdout.write(" "+"*");

// // //     }
// // //     console.log();
// // // }
// // // // ########################################################

// // // let nsp=4;
// // // let nst=1;
// // // for(let row=1;row<=5;row++){
// // //     for(let i=1;i<=nsp;i++){
// // //         process .stdout.write(" ");
// // //     }
// // //     for(let j=1;j<=nst;j++){
// // //         process.stdout.write("*");
// // //     }
// // //     console.log();
// // //     nsp=nsp-1;
// // //     nst=nst+1;
// // // }
// // // // ###########################################################

// // // let star=5;
// // // let space=1;
// // // for(let line=1;line<=5;line++){
// // //     for(let b=1;b<=space;b++){
// // //         process.stdout.write(" ");

// // //     }
// // //     for(let a=1;a<=star;a++){
// // //         process.stdout.write("*");
// // //     }

// // //     console.log();

// // //     star=star-1;
// // //     space=space+1;

// // // }
// // // // #############################################################
// // // let dot=1;
// // // let blank=4;
// // // for(let axis=1;axis<=5;axis++){
// // //     for(let m=1;m<=blank;m++){
// // //         process.stdout.write(" ");
// // //     }
// // //     for(let e=1;e<=dot;e++){
// // //         process.stdout.write("*");
// // //     }

// // //     console.log();

// // //     blank=blank-1;
// // //     dot=dot+2;
// // // }
// // // // ########################################################
// // // let spark=9;
// // // let empty=1;
// // // for(let row1=1;row1<=5;row1++){
// // //     for(let d=1;d<=empty;d++){
// // //         process.stdout.write(" ");

// // //     }
// // //     for(let h=1;h<=spark;h++){
// // //         process.stdout.write("*");
// // //     }
// // //     console.log();
// // //     spark-=2;
// // //     empty+=1;
// // // }
// // // // ###########################################################
// // // let NSP=4;
// // // let NST=1;
// // // for(let l=1;l<=10;l++){
// // //     for(let b=1;b<=NSP;b++){
// // //         process.stdout.write(" ");

// // //     }
// // //     for(let c=1;c<=NST;c++){
// // //         process.stdout.write("*");
// // //     }

// // //     if(l<5){
// // //         NST=NST+1;
// // //         NSP=NSP-1;
// // //     }
// // //     else{
// // //         NST-=1;
// // //         NSP+=1;
// // //     }
// // //     console.log();
// // // }
// // // // ##########################################################
// // // let spp=4;
// // // let stt=1;
// // // for(let roow=1;roow<=9;roow++){
// // //     for(let y=1;y<=spp;y++){
// // //         process.stdout.write(" ");
// // //     }
// // //     for(let z=1;z<=stt;z++){
// // //         process.stdout.write("*");
// // //     }

// // //     if (roow<5){
// // //         spp-=1;
// // //         stt+=2;
// // //     }
// // //     else{
// // //         spp+=1;
// // //         stt-=2;

// // //     }
// // //     console.log();
// // // }
// // // // #############################################################

// // // let str=9;
// // // let spc=0;
// // // for(let q=1;q<=8;q++){
// // //     for(let e=1;e<=spc;e++){
// // //         process.stdout.write(" ");
// // //     }
// // //     for(let t=1;t<=str;t++){
// // //         process.stdout.write("*");
// // //     }

// // //     if(q<5){
// // //         str-=2;
// // //         spc+=1;

// // //     }
// // //     else{
// // //         str+=2;
// // //         spc-=1;
// // //     }
// // //     console.log();
// // // }
// // // //#########################################################
// // // for(let m=1;m<=4;m++){
// // //     let nasty="";
// // //     for(let x=1;x<=m;x++){

// // //         nasty=nasty+" "+m;
// // //     }
// // //     console.log(nasty);
// // // }
// // // // #######################################################
// // // let f=1;
// // // for(let ii=1;ii<=4;ii++){
// // //     let fuu="";
// // //     for(let jj=1;jj<=ii;jj++){
// // //         fuu=fuu+f;
// // //         f=f+1
// // //     }
// // //     console.log(fuu);
// // // }
// // // //##########################################################

// // // for(let h=1;h<=4;h++){
// // //     let jat="";
// // //     for(let g=1;g<=h;g++){

// // //         jat=jat+g;

// // //     }
// // //     console.log(jat);

// // // }
// // // // ######################################################

// // // for(let kk=1;kk<=4;kk++){
// // //     let box=" ";

// // //     for(let mm=4;mm>=kk;mm--){
// // //         process.stdout.write(" ");
// // //     }
// // //     for(zz=1;zz<=kk;zz++){
// // //         // box=box+kk;
// // //         // kk=kk+1;
// // //         console.log("*")
// // //     }
// // //    console.log();
// // // }

// // let nst=1;
// // let nsp=4
// // let a=1
// // ;
// // for(let row=1;row<=4;row++){
// //     let ans="";

// //     for(let i=1;i<=nsp;i++){
// //         process.stdout.write(" ");
// //     }
// //     for(let j=1;j<=nst;j++){
// //         ans=ans+a;
// //         a=a+1;
// //     }
// //     nst=nst+2;

// //     nsp=nsp-1;

// //     console.log(ans);
// // }

// function print1(n){

// for(let i=0;i<n;i++){
//     let row="";
//     for(let j=0;j<=n;j++){
//         row+="*";

//     }
//     console.log(row);
// }
// }
// print1(10);
function hollow(n){
for(let i=0;i<=n;i++){
    for(let j=0;j<=n;j++){
        if((i>=1&&i<n)&&(j>=1&&j<n)){
            process .stdout.write(" ");
        }else{
            process .stdout.write("*")
        }
    }
    console.log();
}
}
hollow(10);
// ######################################################
