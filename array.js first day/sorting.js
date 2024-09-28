let arr=[23,45,67,24,66,89,10,3,4,5];
for(let i=0;i<arr.length;i++){
    for (let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);