`
    Write a function called sumZero which accepts a !(sorted)! array of
    intergers. The fn should find the first pair where the sum is 0.
    Return an array that includes both values that sum to zero or
    undefined if a pair does not exist.

    sumZero([-4,-3,-2,-1,0,1,2,5])
    
`
log = (...val)=>console.log(...val)
function sumZero(array) {
    // start two pointers on the left and right
    // compare and slide down
    let i = 0
    let j = array.length-1

    while(i<j) {
        sum = array[i]+array[j]
        if(sum<0){
            i++
        } else if (sum>0) {
            j--
        } else{
            return [array[i], array[j]]
        }
    }
}

console.log(sumZero([2,7,11,15])) // undefined
log(sumZero([-4,-3,-2,-1,0,1,2,5]))