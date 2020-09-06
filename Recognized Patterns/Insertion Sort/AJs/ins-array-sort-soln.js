/**
 * Write a function that sorts a given integer array in ascending order
*/
log = (val) => console.log(val)


/**
 * Pick the second element in the array
 * compare with the first and swap if needed
 * check the next element
 * if it is less than the last element on the left
 * compare with the previously sorted elements and place correctly
 * repeat the process for the next elements
 * 
 * Loop over the first array
 * Start a second loop that starts on the second element
 * mark the current element then
 * check if its less than the immediate previous
 * if true then go back to the first index and swap till you reach the current index
 * repeat the process 
 */
function sort(array) {
    for(let i=1; i<array.length; i++) {
        let current = array[i]
        let currentIndex = i
        if(current < array[i-1]) {
            for (let j=0; j<currentIndex; j++) {
                if(array[j]>array[currentIndex]) {
                    swap(array, j, currentIndex)                    
                }
            }
        }
    }

    return array

}

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

log(sort([1,3,4,2,4,5,6,4,1,33]))


function insertionSort(arr) {
    for(var i=1; i<arr.length; i++) {
        var currentVal = arr[i]
        for(var j=i-1; j>=0 && arr[j]>currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

log(insertionSort([1,3,4,2,4,5,6,4,1,33]))