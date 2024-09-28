let arr=[1,3,4,5,6,7,9,8,2,10];
target=5;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            console.log(arr[i],arr[j]);
        }
    }
}