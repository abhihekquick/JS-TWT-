function frequency(str,target){
    let arr=str.split(" ");
    let count=0;
    for(let maal of arr){
        if(maal==target){
            count++;
        }

    }
    return count;
}
let ans=frequency("my name is abhi name is abhi is abhi","abhi");
console.log(ans);

function firstindex(str,tar){
    let arr=str.split(" ");
    let ansidx=-1;
    for(let idx=0;idx<arr.length;idx++){
        if(arr[idx]==tar){
            ansidx=idx;
            break;

        }
    }
    return ansidx;
}
let ans2=firstindex("my name is abhi name is abhi is abhi","abhi");
console.log(ans2);