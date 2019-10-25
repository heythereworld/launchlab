//Input data
var nums = [0, 1, 7, 3, 5, 2];
var k = 3;

var numsFunction = [];
var kFunction;
var arrayLength;
var difference;

function containsCloseNums(numsFunction, kFunction) { 
    arrayLength =  numsFunction.length;

    for (var i = 0; i<=arrayLength; i++){
        for (var j = i+1; j<arrayLength; j++){
            if (numsFunction[i] == numsFunction[j]){
                difference = Math.abs(j-i);

                if (difference<=k){
                    return true; 
                }
            }
        }
    }            
    return false;
}
containsCloseNums(nums, k);