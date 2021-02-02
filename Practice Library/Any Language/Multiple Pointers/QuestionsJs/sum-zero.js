`
    Write a function called sumZero which accepts a !(sorted)! array of
    intergers. The fn should find the first pair where the sum is 0.
    Return an array that includes both values that sum to zero or
    undefined if a pair does not exist.

    sumZero([-4,-3,-2,-1,0,1,2,5])
    
`
log = (...val)=>console.log(...val)
function sumZero(array) {
    array = array.sort();

    var left = 0
    var right = array.length-1
    while(left<right){
        let sum = array[left]+array[right]
        if(sum==0) return [array[left], array[right]]
        else if (sum>0) right--
        else left++
    }

   return undefined
}

console.log(sumZero([2,7,11,15])) // undefined
log(sumZero([-4,-3,-2,-1,0,1,2,5]))