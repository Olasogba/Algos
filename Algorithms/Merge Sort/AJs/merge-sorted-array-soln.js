/**
 * A function that merges two sorted arrays.
*/

/**
 * Loop over both arrays using while
 * while i and j havent reached the ends of their arrays
 * compare elements on both indexes, if i is smaller, push and increment i
 * else do the same for j
 * Once we exhaust one array,
 * push all other values from the other array 
 */
function merge(arr1, arr2) {
    let n = arr1.length, m = arr2.length
    let i=0, j=0
    let result = []
    while(i<n && j<m) {
        if(arr1[i]<=arr2[j]) {
            result[result.length]=arr1[i]
            i++
        } else if(arr2[j] <= arr1[i]) {
            result[result.length]=arr2[j]
            j++
        }
    }
    while(i<n) {
        result[result.length]=arr1[i]
        i++
    }
    while(j<m) {
        result[result.length]=arr2[j]
        j++
    }

    return result
}

log = (val) => console.log(val)

log(merge([1,2,3,4], [3,5,7,7,8,99,123]))
log(merge([1,10,50],[2,14,99,100]))