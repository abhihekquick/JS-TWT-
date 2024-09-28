function longeststring(str){
    let arr=str.split(" "
        
    );
    var maxlen=0;
    var ans=" ";
    for(let i=0;i<arr.lenght;i++){
        if(arr[i].length>maxlen){
            maxlen==arr[i].lenght;
            ans==arr[i]
        }

    }
    return ans;
}

let ans=longeststring("my name is abhishek");
console.log(ans);