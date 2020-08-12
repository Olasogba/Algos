`
    Write a function called sumZero which accepts a !(sorted)! array of
    intergers. The fn should find the first pair where the sum is 0.
    Return an array that includes both values that sum to zero or
    undefined if a pair does not exist.

    sumZero([-4,-3,-2,-1,0,1,2,5])
    
`
log = (val) => console.log(val)

function sumZero(array) {
    let left = 0, right = array.length-1
    for(let i=0; i<array.length; i++) {
        const sum = array[left]+array[right]
        if(sum==0) return log([array[left], array[right]])
        if(sum<0) left++
        else right--
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5])
