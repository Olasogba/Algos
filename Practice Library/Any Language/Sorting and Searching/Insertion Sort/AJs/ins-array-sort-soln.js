/**
 * Write a function that sorts a given integer array in ascending order
*/
log = (val) => console.log(val)


const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

function insertionSort(arr) {
    for(var i=1; i<arr.length; i++) {
        var currentVal = arr[i]
        let j=i-1
        while(j>=0 && arr[j]>currentVal) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = currentVal // placing the swapped value in the correct position
    }
    return arr
}

log(insertionSort([1,3,4,2,4,5,6,4,1,33, 7, 8,9]))