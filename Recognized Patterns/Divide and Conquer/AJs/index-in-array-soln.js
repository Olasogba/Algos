`
    Given a sorted array of integers, write a function called search.,
    that accepts a value and returns the index where the value passed
    to the function is located. If the value is not found, return -1

    search([1,2,3,4,5,6], 4) // 3
    search([1,2,3,4,5,6], 6) // 5
    search([1,2,3,4,5,6], 11) // -1
`
log = (val) => console.log(val)

function search(array, n) {
    // divide and conquer
    // get the left and right indexes
    // get the middle index
    // if n is greater than the value in the middle index,
    // set the left to be the middle index + 1
    // else set the right to be the middle index - 1
    // else it means we found our number n 
    let left = 0, right = array.length - 1
    while(left <= right) {
        let middle = Math.floor((left+right) / 2)
        if(n > array[middle]) left = middle + 1
        else
        if(n < array[middle]) right = middle - 1
        else
        return log(middle)
    }
    return log(-1)
}


search([1,2,3,4,5,6], 4)
search([1,2,3,4,5,6], 6)
search([1,2,3,4,5,6], 11)