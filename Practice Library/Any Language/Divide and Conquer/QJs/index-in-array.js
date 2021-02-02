`
    Given a sorted array of integers, write a function called search.,
    that accepts a value and returns the index where the value passed
    to the function is located. If the value is not found, return -1

    search([1,2,3,4,5,6], 4) // 3
    search([1,2,3,4,5,6], 6) // 5
    search([1,2,3,4,5,6], 11) // -1
`

const log = (...val) => console.log(...val)

function search(ints, value) {
    var left = 0
    var right = ints.length-1
    
    while(left<=right) {
        var mid = Math.floor((left+right)/2)
        // log(mid)
        if(ints[mid]<value) {
            left=mid+1
        } 
        else if(ints[mid]>value) {
            right=mid-1
        }
        else return mid
    }
    
    return -1
}

log(search([1,2,3,4,5,6], 4)) //3
log(search([1,2,3,4,5,6], 6)) // 5
log(search([1,2,3,4,5,6], 11)) // -1


