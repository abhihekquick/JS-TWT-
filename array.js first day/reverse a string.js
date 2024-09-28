function reverse(str){
    let arr=str.split(" ");
    let st=0;
    let end=arr.length-1;
    while(st<end){
        let temp=arr[st];
        arr[st]=arr[end];
        arr[end]=temp;

        st++;

        end--;
    }
    console.log(arr);

}
reverse("my name is abhi");

function reversee(str){
    let arr=str.split(" ");
    let rev='';
    for(let idx=arr.length-1;idx>=0;idx--){
        rev=rev+arr[idx];
        

    }
    return rev;
    


} 
let rvv=reversee
("my name is abhi");
console.log(rvv);
   