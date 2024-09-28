let arr6=[10,45,50,40,30,55];
let target=40;
function test(arr,target){
    for(let maal of arr6){
        if(maal==target){
            return true;
        }
        
        
    }
    
        return false;
}
let rv=test(arr6,target);
console.log(rv);