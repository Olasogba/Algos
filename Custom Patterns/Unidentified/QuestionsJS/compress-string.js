`Given a string "aaabbbcc", compress it, = "a3b3c2" . 
Given  that output string's length is always smaller than input string, you have do it inplace. No extra space`

log = (val) => console.log(val)


function compress(string) {
    // start from the current element
    // if the next element is the same as the current element, add it to the current sequence
    // else add the element
    // repeat the process
    let ans = ''

    let currentSequence = ''
    for(let i=0; i<string.length; i++) {
        let currentChar = string[i]
        if(currentSequence.length < 1)
            currentSequence += currentChar
        if(string[i] == string[i+1]) {
            currentSequence += string[i+1]
        }
        else {
            currentSequence.length == 1 ? ans+=currentSequence : ans+=(currentSequence.length+currentChar)
            currentSequence = ''
        }
    }

    log(ans)
}

compress("AAABCBBBDD")
compress("ABCDDDEFG")