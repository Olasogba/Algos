`
    Write a function called sumZero which accepts a !(sorted)! array of
    intergers. The fn should find the first pair where the sum is 0.
    Return an array that includes both values that sum to zero or
    undefined if a pair does not exist.

    sumZero([-4,-3,-2,-1,0,1,2,5])
    
`

function sumZero(array, target) {
    // use two pointers on the array with a while loop
    // add the two values,
    // if less, increment the left, else, increment the right
    // else we found it
    let left = 0, right = array.length-1
    while (left < right) {
        let sum = array[left] + array[right]
        if (sum < target) {
            left++
        } else  if (sum > target) {
            right--
        } else {
            return [left, right]
        }
    }
    return undefined
}

console.log(sumZero([2,7,11,15], 9))

console.log(sumZero([-4,-3,-2,-1,0,1,2,5], 3))