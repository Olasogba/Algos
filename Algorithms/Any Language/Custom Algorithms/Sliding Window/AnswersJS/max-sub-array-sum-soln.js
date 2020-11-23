log = (val) => console.log(val)


/**Optimal Solution:
 */
function maxSubArraySum(array, n) {
    // add up the first n words of the array
    // remove the first element in the group above and add the next element in the array
    // if the new sum is greater, the it becomes the max sum
    let maxSum = 0;
    let newSum = 0
    if(array.length<n) return log(null)
    for(let i=0; i<n; i++) {
        maxSum += array[i]
    }
    newSum = maxSum
    for(let i=n; i<array.length; i++) {
        newSum = newSum - array[i-n] + array[i]
        maxSum = Math.max(newSum, maxSum)
    }
    return log(maxSum)
}

maxSubArraySum([1,2,-3,8,1,5,2,-3,8,2,-3,8,1,5,1,5],2);
maxSubArraySum([2,6,9,2,1,8,5,6,3],3);



/**Naive Solution: 
 * 
 * This solution starts from the first element,
 * then creates another loop that starts from that same element
 * up till the last element based on 'n'
 * summing up the values and assigning it to a private variable
 * The process is then repeated for the outer loop
*/
function naive(array, n) {
    if(array.length < n) return log(null)
    let maxSum = -Infinity
    let tempSum = 0
    for(let i=0; i<array.length-n+1; i++) {
        tempSum = 0
        for(let j=0; j<n; j++) {
            tempSum += array[i+j]
            if(tempSum > maxSum) maxSum = tempSum
        }
    }
    return log(maxSum)
}

// naive([1,2,-3,8,1,5,2,-3,8,2,-3,8,1,5,1,5],2);
// naive([1,2,5,2,8,1,5],4)