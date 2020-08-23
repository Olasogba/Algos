`
    Write a function called which accepts an array of intergers and a 
    number called n. The fn should calculate the maximum sum of n
    consecutive elements in the array.

    [1,2,5,8,1,5],2 // 13
    [1,2,5,2,8,1,5],4 // 17
    [4,2,1,6],1 // 6
    [4,2,1,6,2,4], 4 // 13
    [], 4 // null
    
`
log = (val) => console.log(val)

function calc(arr, n) {
    // get the sum of the first 4 elements - thats the window
    // set that sum to be the max value
    // subtract the first element and add the element after the last element
    // if greater, make new max
    // repeat process till you reach array end
    if(!arr.length) return log(null)
    let maxSum = 0
    let currentSum = 0

    for(let i=0; i<n; i++) {
        maxSum += arr[i]
    }

    currentSum = maxSum
    for(let i=n; i<arr.length; i++) {
        currentSum = currentSum - arr[i-n] + arr[i]
        maxSum = Math.max(currentSum, maxSum)
    }

    return log(maxSum)
}

calc([1,2,5,2,8,1,5],4)
calc([1,5,2,8,1,5],2)
calc([4,2,1,6],1)
calc([4,2,1,6,2,4], 4)
calc([], 4)
