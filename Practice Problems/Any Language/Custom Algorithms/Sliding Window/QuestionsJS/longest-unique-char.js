`
 Given a string, write a function that returns the longest sequence of
 unique characters within that string.
`
log = (...val) => console.log(...val)

function uniqueChar(string) {
    // first get the longest
    // slide and compare values
    // update after each slide

    let longest = ''
    for(let i of string) {
        if(longest.includes(i)) break
        longest+=i
    }
    
    let current = longest
    let i =current.length
    while(i<string.length) {
        let nextChar = string[i]
        if(current.includes(nextChar)) {
            current = current.replace(current[0], '')
        } else {
            current += nextChar
            longest = longest.length >= current.length ? longest : current
        }
        // log(current, nextChar)
        i++
    }

    return longest

}

log(uniqueChar('helloqwtybnmkpcvvthereyyouifhdbgqwertyuiopzxcvbnmkkkgutn'))
log(uniqueChar('ABDEFGABEF'))
log(uniqueChar('BBBB'))
log(uniqueChar('GEEKSFORGEEKS'))
// log('herouifdgqwtypzxbnmk'.length)