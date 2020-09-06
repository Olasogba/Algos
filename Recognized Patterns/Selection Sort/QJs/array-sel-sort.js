/**
 * Given an array, sort it in ascending order and return it
*/
/**
 * Loop over the array (i)
 * Start an inner loop j counting to the end of the array
 * register the index of the min value in the array
 * when you reach the end of the inner loop
 * if the value is less than i, swap
 * increment i
 */

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

function sort(array) {
    let minValueIndex = 1;
    for(let i=0; i<array.length; i++) {
        for(let j=i+1; j<array.length; j++) {
            let min = array[minValueIndex]
            let current = array[j]

            if(current < min) minValueIndex = j
            
            
            if(j == (array.length - 1)) {
                if(array[minValueIndex] < array[i]){
                    swap(array, i, minValueIndex)
                } 
            } 
        }
    }

    return array
}


log = (val) => console.log(val)

log(sort([1,3,2,4,3,5,6,4,7]))
log(sort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0]))
