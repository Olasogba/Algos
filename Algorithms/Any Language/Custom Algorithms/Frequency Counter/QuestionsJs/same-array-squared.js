`
Write a function called same which accepts
two arrays.

The function should return true if every
value in the array has it's corresponding 
values squared in the second array. The 
frequency of the values must be the same.
`
log = (val) => console.log(val)
function same(a, b) {
    if(a.length != b.length) return false
    let freq = {}
    let freq2 = {}
    for(let i of a) {
        freq[i] = freq[i] ? freq[i]+1 : 1
    }
    for(let i of b) {
        freq2[i] = freq2[i] ? freq2[i]+1 : 1
    }
    for (let i in freq) {
        if(!freq2[i*i] || freq[i] != freq2[i*i]) 
        return false
    }
    return true
}

log(same([2,4,6,4],[4,16,36,16]))
