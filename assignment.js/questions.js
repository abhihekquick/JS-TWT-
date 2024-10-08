// q1
let removeduplicate=(arr)=>{
    
    for(let i=0;i<arr.length;i++){
        let unique=false;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(i,1);
            }
            
        }

    }
    return arr;

}
let int=[10,20,30,30,40,40,50,10,7,1,3,4]
let rv=removeduplicate(int);
console.log(rv);

// q2
 function seclargest(){
let arr1 =[10,20,30,40,24,3,1,15];
    let max=[0];
    let secbig=[0];
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]>max){
            secbig=max;
            max=arr1[i];
        }
        else if(arr1[i]>secbig&& arr1[i]<max){
            secbig=arr1[i];
        }
    }
    return secbig;
 }
 console.log(seclargest());

//  q3
function sortedmergeduplicate(array1,array2){
    let mergearray=array1.concat(array2);
    let sortedarray=[];
    for(let i=0;i<mergearray.length;i++){
        for(let j=i+1;j<mergearray.length;j++){
            if(mergearray[i]==mergearray[j]){
                mergearray.splice(j,1);
            }
        }
    }
    for(let i=0;i<mergearray.length;i++){
        for(let j=i+1;j<mergearray.length;j++){
            if(mergearray[i]>mergearray[j]){
            let temp=mergearray[i]
            mergearray[i]=mergearray[j]
            mergearray[j]=temp
            }
        }
    }
    return mergearray;
}
let rvv=sortedmergeduplicate([10,50,40,50,70,70],[10,50,66,40,70,80,50]);
console.log(rvv)


 
// q4

function rotate(arr2){
    let end=arr2.length-1;
    let endvalue=[];
    for(let i=end;i>2;i--){
        endvalue[endvalue.length]=arr2[i]
    }
    console.log(endvalue);
    let exchange=endvalue.concat(arr2);

    return exchange

}
let ans=rotate([1,2,3,4,5]);
console.log(ans);

// q5
function intersection(array3,array4){
    let array5=[];
    for(let i=0;i<array3.length;i++){
        for(let j=0;j<array4.length;j++){
            if(array3[i]==array4[j]){
                array5.push(array4[j])
            }
        }
    }
    return array5;

}
let answer=intersection([24,25,26,27,28],[24,25,26,17,16])
console.log(answer);

// q6
function maxsubarray(nums){
    let maxsofar=nums[0];
    let maxend=nums[0];
    for(let i=1;i<nums.length;i++){
        maxend=Math.max(nums[i],maxend+nums[i])
        maxsofar=Math.max(maxsofar,maxend

        );
    }
    return maxsofar;
}
let end=maxsubarray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(end);


// 7ques

function reversestring(a){
    let revstr='';
    let length=a.length;
    for(let i=length-1;i>=0;i--){
        revstr=revstr+a[i];
    }
    return revstr;

}
 let firststr="Hello,world!";
 let secondstr=reversestring(firststr);
 console.log(secondstr);
 
//ques9
function countcharacter(strr){
    let count={};
    for(let char of strr){
        if(count[char]){
            count[char]++;
        }
        else{
            count[char]=1;
        }
    }
    return count;

}
let result=countcharacter("hello,bhailog");
console.log(result);

// 10
function firstnonrepeatingchar(strrr){
    let charcount={};
    for(let char of strrr){
        charcount[char]=(charcount[char]||0)+1;
    }
    for(let char of strrr){
        if(charcount[char]==1){
            return char;
        }
    }
      return null;//return null if there is no repeated char;
}
let resultt=firstnonrepeatingchar("sessions");
console.log(resultt);


