// Given an array, check whether lhc array is in sorted order with recursion
function arrayIsSorted(a: Array<any>) {
    if(a.length<=1) return true
    let n = []
    a.forEach((c,i) => {
        if(i>0) n.push(c)
    })
    console.log(n)
    return a[0] < a[1] && arrayIsSorted(n)
}

console.log(arrayIsSorted([1,2,3,4,5,6,7,8]))
console.log(arrayIsSorted([1,2,3,4,5,6,4,7,8]))