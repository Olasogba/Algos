`
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.
The arrays are equal, no need to swap any elements.


For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.
We can obtain b from a by swapping 2 and 1 in b.


For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.
Any swap of any two elements either in a or in b won't make a and b equal.

`

/** Mike
 * My initial solution which turned out to be too slow
 */
function areSimilar(a, b) {
    if(areEqual(a, b)) return true
    return swap(a, b)
}

function swap(arr, arrb) {
    let a1=[...arr]
    let a2=[...arrb]
    for(let i=0; i<arr.length; i++) {
        for(let u=i+1; u<arr.length; u++) {
            if(!arr[u]) continue
            let el1=arr[i], el2=arr[u]
            arr[i]=el2, arr[u]=el1
            if(areEqual(arr, arrb)) return true
            arr = [...a1]
        }
    }
    
    for(let i=0; i<arrb.length; i++) {
        for(let u=i+1; u<arrb.length; u++) {
            if(!arrb[u]) continue
            let el1=arrb[i], el2=arrb[u]
            arrb[i]=el2, arrb[u]=el1
            if(areEqual(a1, arrb)) return true
            arrb = [...a2]
        }
    }
    return false
}

function areEqual(a, b) {
    if(a.length != b.length) return false
    for(let i=0; i<a.length; i++) {
        if(a[i] != b[i]) return false
    }
    return true
}