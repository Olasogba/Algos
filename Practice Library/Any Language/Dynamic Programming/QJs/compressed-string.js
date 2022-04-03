// aabbcc, 2 -> 

// state that we seek a solution for = removeAndEncode(s, k)
// How do I break this problem?
// removeAndEncode(aabbcc, 2) = min(removeAndEncode(abbcc, 1), removeAndEncode(bbcc, 0))

function removeAndEncode(string, k) {
    if(k < 0) return string.length

    let n = string.length


    // start from char at 0
    let ans = 0
    for(let i=k; i<n; i++) {
        let temp = removeAndEncode(string.substr(i, n-1), k-1)

        ans = Math.min(ans, temp)
    }

    return ans
}

console.log(removeAndEncode('aabbcc', 2))