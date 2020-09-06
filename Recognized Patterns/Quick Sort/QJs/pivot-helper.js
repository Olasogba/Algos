/**
 * PSEUDO-CODE
 * It will help to accept three arguments: an array, a start index, and
 * an end index (these can default to 0 and the array length-1, respectively)
 * 
 * Grab the pivot from the start of the arry
 * 
 * Store the current ouvot index ina variable (this will keep track of
 * where the pivot should end)
 * 
 * Loop through the array from the start until the end
 *      - If the pivot is greater than the current element, increment the
 *        pivot index variable and then swap the current element with the 
 *        element at the pivot index
 * 
 * Swap the starting element (i.e. the pivot) with the pivot index
 * 
 * Return the pivot index
 */

function pivot(arr, start=0, end=arr.length+1) {
    let pivot = arr[start]
    let swapIdx = start

    for(let i=start+1; i<=end; i++) {
        if(pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, start, swapIdx)
    return swapIdx
}

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[j]]