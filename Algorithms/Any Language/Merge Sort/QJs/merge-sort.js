/**
 * Break up the array into haves until you have arrays that are empty or
 * have one element
 * 
 * Once tou have smaller sorted arrays, merge those arrays with other sorted
 * arrays until you are back at the full length og the array
 * 
 * Once the array has been merged back together, return the merged array.
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

function mergeSort(arr) {
    // base case
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

log = (val) => console.log(val)

log(merge([1,2,3],[3,6,7]))
log(mergeSort([1,4,3,5,32,6,7,6,8,7,66,5,4,3,4,6]))