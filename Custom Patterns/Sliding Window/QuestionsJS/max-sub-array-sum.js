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
    // get the sum of the first n elements
    // then subtract the initial and add the next
    if(n > arr.length) return null
    let max = 0
    let current = 0

    for(let i=0; i<n; i++) {
        max += arr[i]
    }
    current = max

    for(let i=n; i<arr.length; i++) {
        current = current - arr[i-n] + arr[i]
        max = Math.max(max, current)
    }

    return max;
}

log(calc([1,2,5,2,8,1,5],4))
log(calc([1,5,2,8,1,5],4))
log(calc([4,2,1,6],1))
log(calc([4,2,1,6,2,4], 4))
log(calc([], 4))
log(calc([4,2,1,6],1))
