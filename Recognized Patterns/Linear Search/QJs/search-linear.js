/**
 * Write a function that accepts an array and a value
 * 
 * - Loop through the array and check if the current array element is 
 *   equal to the value
 * - If it is, return the index at which the element is found
 * - If the value is never found, return -1
 */

function solve(array, value) {
    for(let i=0; i<array.length; i++) {
        if(array[i] == value) return i
    }

    return -1
}

 log = (val) => console.log(val)

 log(solve([1,2,3,4,5], 5))
 log(solve([1,2,3,4,5], 57))