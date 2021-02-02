`
Write a function called same which accepts
two arrays.

The function should return true if every
value in the array has it's corresponding 
values squared in the second array. The 
frequency of the values must be the same.
`
let log = (...val) => console.log(...val)

function same(a, b) {
    let map1 = {}
    let map2 = {}

    for(let i=0; i<a.length; i++) {
        if(map1[a[i]]) map1[a[i]]++
        else map1[a[i]]=1
    }

    for(let i=0; i<b.length; i++) {
        if(map2[b[i]]) map2[b[i]]++
        else map2[b[i]]=1
    }

    for(let i in map1) {
        if(map1[i]!=(map2[i**2])) return false
    }
    return true
}

log(same([1,2,3,4], [1,4,9,16])) // true
log(same([1,2,3,4], [1,4,9,15])) //false
log(same([1,2,3,4], [1,4,9])) //false
log(same([2,4,6,4],[4,16,36,16])) // true


