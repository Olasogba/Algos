`Given a string "aaabbbcc", compress it, = "a3b3c2" . 
Given  that output string's length is always smaller than input string, you have do it inplace. No extra space`

log = (...val) => console.log(...val)


function compress(string) {
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


log(compress("AAABCBBBDD"))
log(compress("ABCDDDEFG"))