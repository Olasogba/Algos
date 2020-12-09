// you should have used the sliding window pattern in that test
// get the first k sequence
// then subtract increment j and unshift i
// this would have gotten all the segments
// 

function segment(arr, k) {
    segments = []
    segment = []
    for(let i=0; i<k; i++) {
        segment.push(arr[i])
    }
    segments.push(segment)

    for (let i=k; i<arr.length; i++) {
        let ne = segment
        ne.shift()
        ne.push(arr[i])
        segment = ne
        segments.push(ne)
    }

    console.log(segments)
}
segment([1,2,3,4,5], 4)