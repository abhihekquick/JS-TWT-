let arr=[1,3,4,6,7,8,9,34,543,56,67,567];
let max=arr[0];
let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(max,min);
console.log(max-min);
