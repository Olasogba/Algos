`
    Write a function that returns all the odd values in a given array
`
log = (...val) => console.log(...val)
function collectOddValues(arr) {
    let results = [];
    (function x (input) {
        if(input.length==0) return
        if(input[0]%2!=0) results.push(input[0])
        x(input.slice(1))
    })(arr)

    log(results)
    return results
}

collectOddValues([1,2,3,4,5,6,7,8,9])

function collectOddValuesPureRecurse(arr) { 
    
}

