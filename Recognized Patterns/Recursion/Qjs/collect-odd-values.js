`
    Write a function that returns all the odd values in a given array
`
log = (...val) => console.log(val)
function collectOddValues(arr) {
    // check if first element is odd, if true
    // add element to result
    // else do not add
    //then slice the element from the array
    // till you reach an empty array

    let result = []
    count = 0;

    (function helper(input) {
        if(count >= 1000) return
        if(input.length == 0) return

        if(input[0] % 2 != 0) result.push(input[0])
        count++
        helper(input.slice(1))
    })(arr)

    return log(result)

}

collectOddValues([1,2,3,4,5,6,7,8,9])

function collectOddValuesPureRecurse(arr) { 
    let newArr = []

    if(input.length == 0) return newArr

    if(input[0] % 2 != 0) result.push(arr[0])

    newArr = newArr.concat(collectOddValuesPureRecurse(arr.slice(1)))

    return log(newArr)
}