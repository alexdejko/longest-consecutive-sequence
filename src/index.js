module.exports = function longestConsecutiveLength(array) {
  
 let arr= array.sort(function(a, b) {
            return a - b;
        });
 
 if(array.length == 0){
        return 0;
    }else if(array.length == 1){
        return 1;
    }
 function seq(arr){ 
  let tmp = 1;
  let max = 0;
  for (let i = arr.length; i > 0; i--){
    if (arr[i] == arr[i - 1] + 1) {
       tmp=tmp + 1;
       if(tmp > max){
        max = tmp;
       }
    }else{tmp = 1}
  }
 return max;
} 

 return seq(array);
}

