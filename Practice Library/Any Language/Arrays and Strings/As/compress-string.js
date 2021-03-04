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
            currentSequence.length == 1 ? ans+=currentSequence : ans+=(currentChar+currentSequence.length)
            currentSequence = ''
        }
    }

    log(ans)
}

function compress2(string) {
    // get current string
    // if +1 is current, update count and replace with ''
    // else set result += current+count
    var current = string[0]
    var result = ''
    let count = 0
    for(let i=0; i<string.length; i++) {
      count++
      current = string[i]
      if(current==string[i+1]) {
          string=string.replace(string[0], '')
          i-- 
      } else {
          result += count > 1 ? current+count : current
          count=0
      }
    }
  
    return result
  }

  

compress("AAABCBBBDD")
compress("ABCDDDEFG")