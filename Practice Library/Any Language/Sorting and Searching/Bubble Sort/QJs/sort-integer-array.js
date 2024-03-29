/**
 * Write a function that sorts a given integer array in ascending order
 */

let log = (val) => console.log(val)
/**
 * Start a loop at the end of the array (i)
 * Start an inner loop that loops up to i-1
 * Swap elements based on condition
 * return the array at the end of the outer loop
 */
function sort(array) {
    for(let i=array.length-1; i>0; i--) {
        for(let j=0; j<=i-1; j++) {
            if(array[j] > array[j+1]) swap(array, j, j+1)           
        }
    }
    return array
}

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

log(sort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0]))
//log()